// Utilidades compartilhadas da API do CYPHER.
// Roda no runtime do Cloudflare Pages Functions (Web Crypto nativo).
// Sem dependências externas, sem IA: só criptografia padrão.

const enc = new TextEncoder();

export function json(obj, status = 200, headers = {}) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", ...headers },
  });
}

export async function readJson(request) {
  try { return await request.json(); } catch { return {}; }
}

function bufToHex(buf) {
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}
function hexToBuf(hex) {
  const a = new Uint8Array(hex.length / 2);
  for (let i = 0; i < a.length; i++) a[i] = parseInt(hex.substr(i * 2, 2), 16);
  return a;
}

const PBKDF2_ITER = 100000;

// Retorna {salt, hash} em hex. Se saltHex vier, reusa (para verificar).
export async function hashPassword(password, saltHex) {
  const salt = saltHex ? hexToBuf(saltHex) : crypto.getRandomValues(new Uint8Array(16));
  const key = await crypto.subtle.importKey("raw", enc.encode(password), { name: "PBKDF2" }, false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits(
    { name: "PBKDF2", salt, iterations: PBKDF2_ITER, hash: "SHA-256" },
    key,
    256
  );
  return { salt: bufToHex(salt), hash: bufToHex(bits) };
}

export async function verifyPassword(password, saltHex, hashHex) {
  const { hash } = await hashPassword(password, saltHex);
  return timingSafeEqual(hash, hashHex);
}
function timingSafeEqual(a, b) {
  if (typeof a !== "string" || typeof b !== "string" || a.length !== b.length) return false;
  let r = 0;
  for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}

// -------- Token assinado (JWT HS256) --------
function b64urlFromBuf(buf) {
  let bin = "";
  const bytes = new Uint8Array(buf);
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function b64urlFromStr(str) { return b64urlFromBuf(enc.encode(str)); }
function b64urlToStr(b64) {
  b64 = b64.replace(/-/g, "+").replace(/_/g, "/");
  while (b64.length % 4) b64 += "=";
  return atob(b64);
}
async function hmacKey(secret) {
  return crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign", "verify"]);
}

export async function signToken(payload, secret) {
  const header = b64urlFromStr(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const body = b64urlFromStr(JSON.stringify(payload));
  const data = header + "." + body;
  const sig = await crypto.subtle.sign("HMAC", await hmacKey(secret), enc.encode(data));
  return data + "." + b64urlFromBuf(sig);
}

export async function verifyToken(token, secret) {
  try {
    if (!token || typeof token !== "string") return null;
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    const data = parts[0] + "." + parts[1];
    const sig = Uint8Array.from(b64urlToStr(parts[2]), (c) => c.charCodeAt(0));
    const ok = await crypto.subtle.verify("HMAC", await hmacKey(secret), sig, enc.encode(data));
    if (!ok) return null;
    const payload = JSON.parse(b64urlToStr(parts[1]));
    if (payload.exp && Date.now() > payload.exp) return null;
    return payload;
  } catch { return null; }
}

// Autentica uma requisição pelo header Authorization: Bearer <token>.
export async function authUser(request, env) {
  const h = request.headers.get("Authorization") || "";
  const token = h.replace(/^Bearer\s+/i, "");
  return verifyToken(token, env.AUTH_SECRET);
}

export function normUser(name) {
  return (name || "").toString().trim().toLowerCase().replace(/[^a-z0-9_]/g, "_").slice(0, 40);
}

export function blankData(mcName) {
  return { flow: 0, done: {}, batalhas: {}, streak: { count: 0, last: null }, mcName: mcName || "" };
}
