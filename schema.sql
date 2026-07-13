-- Schema do CYPHER (Cloudflare D1 / SQLite)
CREATE TABLE IF NOT EXISTS users (
  username     TEXT PRIMARY KEY,
  display_name TEXT,
  pass_salt    TEXT NOT NULL,
  pass_hash    TEXT NOT NULL,
  created_at   TEXT DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS progress (
  username   TEXT PRIMARY KEY,
  data       TEXT NOT NULL DEFAULT '{}',
  updated_at TEXT DEFAULT (datetime('now'))
);
