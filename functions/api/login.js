import { json, readJson, verifyPassword, signToken, normUser, blankData } from "./_lib.js";

// POST /api/login  { username, password }
export async function onRequestPost({ request, env }) {
  const { username, password } = await readJson(request);
  const u = normUser(username);
  if (!u || !password) return json({ error: "missing" }, 400);

  const row = await env.DB.prepare("SELECT * FROM users WHERE username=?").bind(u).first();
  if (!row) return json({ error: "invalid" }, 401);

  const ok = await verifyPassword(password, row.pass_salt, row.pass_hash);
  if (!ok) return json({ error: "invalid" }, 401);

  const prog = await env.DB.prepare("SELECT data FROM progress WHERE username=?").bind(u).first();
  let data;
  try { data = prog ? JSON.parse(prog.data) : blankData(row.display_name); }
  catch { data = blankData(row.display_name); }

  const token = await signToken({ u, exp: Date.now() + 30 * 864e5 }, env.AUTH_SECRET);
  return json({ token, displayName: row.display_name, data });
}
