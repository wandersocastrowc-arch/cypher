import { json, readJson, authUser } from "./_lib.js";

// GET /api/progress  -> { data }
export async function onRequestGet({ request, env }) {
  const p = await authUser(request, env);
  if (!p) return json({ error: "unauth" }, 401);
  const row = await env.DB.prepare("SELECT data FROM progress WHERE username=?").bind(p.u).first();
  let data = null;
  if (row) { try { data = JSON.parse(row.data); } catch { data = null; } }
  return json({ data });
}

// PUT /api/progress  { data }  -> { ok }
export async function onRequestPut({ request, env }) {
  const p = await authUser(request, env);
  if (!p) return json({ error: "unauth" }, 401);
  const { data } = await readJson(request);
  if (!data || typeof data !== "object") return json({ error: "nodata" }, 400);
  await env.DB.prepare(
    "INSERT INTO progress (username, data, updated_at) VALUES (?,?,datetime('now')) " +
    "ON CONFLICT(username) DO UPDATE SET data=excluded.data, updated_at=datetime('now')"
  ).bind(p.u, JSON.stringify(data)).run();
  return json({ ok: true });
}
