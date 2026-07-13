import { json, readJson, hashPassword, signToken, normUser, blankData } from "./_lib.js";

// POST /api/register  { username, password, mcName, invite }
// Protegido por INVITE_CODE (secret) para não permitir cadastro aberto.
export async function onRequestPost({ request, env }) {
  const { username, password, mcName, invite } = await readJson(request);
  const u = normUser(username);
  if (!u || !password) return json({ error: "missing" }, 400);
  if (password.length < 4) return json({ error: "weakpass" }, 400);
  if (env.INVITE_CODE && invite !== env.INVITE_CODE) return json({ error: "invite" }, 403);

  const exists = await env.DB.prepare("SELECT username FROM users WHERE username=?").bind(u).first();
  if (exists) return json({ error: "exists" }, 409);

  const display = (mcName || username || u).toString().trim().slice(0, 40);
  const { salt, hash } = await hashPassword(password);
  await env.DB.prepare("INSERT INTO users (username, display_name, pass_salt, pass_hash) VALUES (?,?,?,?)")
    .bind(u, display, salt, hash).run();

  const data = blankData(display);
  await env.DB.prepare("INSERT INTO progress (username, data, updated_at) VALUES (?,?,datetime('now'))")
    .bind(u, JSON.stringify(data)).run();

  const token = await signToken({ u, exp: Date.now() + 30 * 864e5 }, env.AUTH_SECRET);
  return json({ token, displayName: display, data });
}
