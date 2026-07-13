import { json } from "./_lib.js";
// Usado pelo front para detectar se a API está disponível (modo online x preview local).
export const onRequestGet = () => json({ ok: true, service: "cypher" });
