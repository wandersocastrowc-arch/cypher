<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#0e0b16">
<title>CYPHER · English na batida</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;800;900&display=swap" rel="stylesheet">
<style>
  :root{
    --bg:#0e0b16; --bg2:#171226; --bg3:#221a38; --bg4:#2b2145;
    --gold:#f4c542; --gold2:#e0a92b; --mag:#e8467c; --purple:#8a5cff; --cyan:#28d0c0;
    --text:#f3eefe; --muted:#a99fc4; --good:#3ddc84; --bad:#ff5c72;
    --line:rgba(255,255,255,.09);
    --disp:"Bebas Neue","Arial Narrow Bold",Impact,sans-serif;
    --body:"Inter",system-ui,"Segoe UI",Roboto,Arial,sans-serif;
  }
  *{box-sizing:border-box;-webkit-tap-highlight-color:transparent;}
  html,body{margin:0;padding:0;}
  body{
    font-family:var(--body); background:var(--bg); color:var(--text);
    min-height:100vh; line-height:1.5; overflow-x:hidden;
    background-image:radial-gradient(1200px 500px at 80% -10%, rgba(138,92,255,.18), transparent 60%),
                     radial-gradient(900px 500px at 0% 0%, rgba(232,70,124,.12), transparent 55%);
  }
  .wrap{max-width:520px;margin:0 auto;padding:0 16px 96px;}
  .disp{font-family:var(--disp);letter-spacing:.5px;line-height:.95;}
  button{font-family:var(--body);cursor:pointer;border:none;}
  a{color:var(--cyan);}
  .hidden{display:none !important;}

  /* ---------- LOGIN ---------- */
  #login{min-height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:24px;text-align:center;}
  .logo{font-family:var(--disp);font-size:74px;line-height:.8;background:linear-gradient(180deg,#fff,var(--gold));-webkit-background-clip:text;background-clip:text;color:transparent;filter:drop-shadow(0 4px 20px rgba(244,197,66,.35));}
  .logo-sub{color:var(--muted);letter-spacing:4px;text-transform:uppercase;font-size:12px;font-weight:700;margin-top:2px;}
  .mic{font-size:52px;margin-bottom:6px;filter:drop-shadow(0 6px 16px rgba(232,70,124,.4));}
  .login-card{background:var(--bg2);border:1px solid var(--line);border-radius:20px;padding:22px;margin-top:26px;width:100%;max-width:360px;box-shadow:0 20px 50px rgba(0,0,0,.4);}
  .login-card p.hi{margin:0 0 16px;color:var(--muted);font-size:14px;}
  .field{text-align:left;margin-bottom:12px;}
  .field label{display:block;font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:var(--muted);font-weight:700;margin-bottom:6px;}
  .field input{width:100%;background:var(--bg);border:1px solid var(--line);border-radius:12px;color:var(--text);padding:13px 14px;font-size:16px;outline:none;transition:.15s;}
  .field input:focus{border-color:var(--gold);box-shadow:0 0 0 3px rgba(244,197,66,.15);}
  .btn{background:linear-gradient(180deg,var(--gold),var(--gold2));color:#241a05;font-weight:900;border-radius:12px;padding:14px 18px;font-size:16px;width:100%;letter-spacing:.3px;box-shadow:0 8px 22px rgba(244,197,66,.28);transition:transform .1s;}
  .btn:active{transform:scale(.97);}
  .btn.sec{background:var(--bg3);color:var(--text);box-shadow:none;border:1px solid var(--line);}
  .btn.ghost{background:transparent;color:var(--muted);box-shadow:none;font-weight:600;}
  .preview-badge{position:fixed;top:10px;right:10px;z-index:50;background:rgba(232,70,124,.15);border:1px solid var(--mag);color:#ffd0e0;font-size:10px;font-weight:800;letter-spacing:1.5px;padding:4px 9px;border-radius:20px;text-transform:uppercase;}
  .tb-prev{font-size:9px;font-weight:800;letter-spacing:1px;text-transform:uppercase;color:var(--muted);border:1px solid var(--line);border-radius:20px;padding:2px 7px;align-self:center;}

  /* ---------- TOPBAR ---------- */
  .topbar{position:sticky;top:0;z-index:30;background:rgba(14,11,22,.82);backdrop-filter:blur(12px);border-bottom:1px solid var(--line);}
  .topbar .in{max-width:520px;margin:0 auto;display:flex;align-items:center;gap:10px;padding:11px 16px;}
  .topbar .brand{font-family:var(--disp);font-size:26px;color:var(--gold);letter-spacing:1px;}
  .topbar .flow{margin-left:auto;display:flex;align-items:center;gap:6px;background:var(--bg3);border:1px solid var(--line);border-radius:20px;padding:5px 12px;font-weight:800;font-size:14px;}
  .topbar .flow b{color:var(--gold);}
  .topbar .streak{display:flex;align-items:center;gap:4px;font-weight:800;font-size:14px;background:var(--bg3);border:1px solid var(--line);border-radius:20px;padding:5px 10px;}

  section.view{padding-top:18px;animation:fade .25s ease;}
  @keyframes fade{from{opacity:0;transform:translateY(6px);}to{opacity:1;transform:none;}}

  /* ---------- AVATAR / RANK ---------- */
  .hero{background:linear-gradient(160deg,var(--bg3),var(--bg2));border:1px solid var(--line);border-radius:22px;padding:20px;display:flex;gap:16px;align-items:center;position:relative;overflow:hidden;}
  .hero::after{content:"";position:absolute;inset:0;background:radial-gradient(300px 120px at 90% 0%,rgba(138,92,255,.25),transparent 70%);pointer-events:none;}
  .ring{position:relative;width:96px;height:96px;flex:0 0 auto;}
  .ring svg{transform:rotate(-90deg);}
  .ring .ava{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:44px;}
  .hero .who{min-width:0;}
  .hero .rank{font-family:var(--disp);font-size:30px;line-height:.9;color:#fff;}
  .hero .mcname{color:var(--gold);font-weight:800;font-size:14px;letter-spacing:.5px;text-transform:uppercase;margin-bottom:6px;}
  .hero .next{color:var(--muted);font-size:12.5px;margin-top:7px;}
  .hero .next b{color:var(--text);}

  .grid2{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px;}
  .stat{background:var(--bg2);border:1px solid var(--line);border-radius:16px;padding:13px 14px;}
  .stat .k{font-size:10.5px;text-transform:uppercase;letter-spacing:1.2px;color:var(--muted);font-weight:700;}
  .stat .v{font-family:var(--disp);font-size:28px;margin-top:3px;}
  .stat .v small{font-family:var(--body);font-size:12px;color:var(--muted);font-weight:600;}

  .statuscard{margin-top:12px;border-radius:16px;padding:14px 16px;border:1px solid var(--line);display:flex;align-items:center;gap:12px;}
  .statuscard.ok{background:linear-gradient(120deg,rgba(61,220,132,.14),var(--bg2));border-color:rgba(61,220,132,.4);}
  .statuscard.ahead{background:linear-gradient(120deg,rgba(40,208,192,.14),var(--bg2));border-color:rgba(40,208,192,.4);}
  .statuscard.late{background:linear-gradient(120deg,rgba(255,92,114,.14),var(--bg2));border-color:rgba(255,92,114,.4);}
  .statuscard .ico{font-size:26px;}
  .statuscard .t{font-weight:800;font-size:15px;}
  .statuscard .d{color:var(--muted);font-size:12.5px;}

  .cta{margin-top:14px;}
  .cta .btn{display:flex;align-items:center;justify-content:center;gap:8px;}

  h2.sec-t{font-family:var(--disp);font-size:24px;margin:22px 4px 10px;letter-spacing:.5px;color:#fff;}
  h2.sec-t span{color:var(--gold);}

  /* ---------- TRILHA ---------- */
  .mixtape{border:1px solid var(--line);border-radius:18px;margin-bottom:14px;overflow:hidden;background:var(--bg2);}
  .mixtape .mt-head{display:flex;align-items:center;gap:12px;padding:14px 16px;cursor:pointer;background:linear-gradient(100deg,var(--bg3),var(--bg2));}
  .mixtape .mt-cover{width:44px;height:44px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:22px;flex:0 0 auto;box-shadow:0 6px 16px rgba(0,0,0,.35);}
  .mixtape .mt-t{font-weight:800;font-size:15px;}
  .mixtape .mt-s{color:var(--muted);font-size:12px;}
  .mixtape .mt-meta{margin-left:auto;text-align:right;color:var(--muted);font-size:11px;font-weight:700;}
  .mixtape .mt-body{padding:4px 12px 12px;}
  .weekblk{border-top:1px solid var(--line);padding:12px 4px 6px;}
  .weekblk:first-child{border-top:none;}
  .weekblk .wk-h{display:flex;align-items:baseline;gap:8px;margin-bottom:8px;}
  .weekblk .wk-n{font-family:var(--disp);font-size:20px;color:var(--gold);}
  .weekblk .wk-t{font-weight:700;font-size:13.5px;}
  .weekblk .wk-d{margin-left:auto;color:var(--muted);font-size:11px;}
  .faixa{display:flex;align-items:center;gap:11px;padding:10px 10px;border-radius:12px;margin-bottom:6px;background:var(--bg3);border:1px solid transparent;transition:.12s;}
  .faixa.clickable:active{transform:scale(.99);}
  .faixa.clickable{cursor:pointer;}
  .faixa.done{background:rgba(61,220,132,.08);border-color:rgba(61,220,132,.25);}
  .faixa.locked{opacity:.45;}
  .faixa .fx-ico{width:30px;height:30px;border-radius:8px;background:var(--bg4);display:flex;align-items:center;justify-content:center;font-size:15px;flex:0 0 auto;}
  .faixa.batalha .fx-ico{background:linear-gradient(180deg,var(--mag),#b5245a);}
  .faixa .fx-t{font-size:13.5px;font-weight:600;min-width:0;}
  .faixa .fx-s{font-size:11px;color:var(--muted);}
  .faixa .fx-r{margin-left:auto;font-size:15px;flex:0 0 auto;}
  .soon{color:var(--muted);font-size:12px;padding:8px 10px;background:var(--bg3);border-radius:10px;border:1px dashed var(--line);}
  .soon a{font-weight:600;}

  /* ---------- UNIDADE / QUIZ ---------- */
  .backbar{display:flex;align-items:center;gap:10px;margin:2px 0 14px;}
  .backbar button{background:var(--bg3);border:1px solid var(--line);color:var(--text);border-radius:10px;padding:8px 12px;font-weight:700;font-size:13px;}
  .u-head{background:linear-gradient(150deg,var(--bg3),var(--bg2));border:1px solid var(--line);border-radius:18px;padding:16px 18px;}
  .u-head .tag{display:inline-block;font-size:10.5px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;color:var(--bg);background:var(--gold);padding:3px 9px;border-radius:20px;}
  .u-head h3{font-family:var(--disp);font-size:27px;margin:9px 0 4px;letter-spacing:.5px;}
  .u-head p{color:var(--muted);font-size:13px;margin:0;}
  .study{margin-top:14px;background:var(--bg2);border:1px solid var(--line);border-radius:16px;padding:15px 16px;}
  .study .lbl{font-size:11px;text-transform:uppercase;letter-spacing:1.4px;color:var(--cyan);font-weight:800;margin-bottom:8px;display:flex;align-items:center;gap:6px;}
  .study p{font-size:13.5px;margin:0 0 12px;color:#ddd6f0;}
  .linkbtn{display:flex;align-items:center;gap:10px;text-decoration:none;color:var(--text);background:var(--bg3);border:1px solid var(--line);border-radius:12px;padding:11px 13px;margin-bottom:8px;transition:.12s;}
  .linkbtn:active{transform:scale(.99);}
  .linkbtn .li{font-size:18px;}
  .linkbtn .lt{font-weight:700;font-size:13.5px;}
  .linkbtn .ls{font-size:11px;color:var(--muted);}
  .linkbtn .go{margin-left:auto;color:var(--cyan);font-size:18px;}

  .qwrap{margin-top:16px;}
  .q{background:var(--bg2);border:1px solid var(--line);border-radius:16px;padding:15px 16px;margin-bottom:12px;}
  .q .qn{font-size:11px;color:var(--muted);font-weight:800;letter-spacing:1px;text-transform:uppercase;}
  .q .qp{font-size:15px;font-weight:600;margin:6px 0 12px;}
  .q .qp .blank{color:var(--gold);font-weight:800;}
  .opt{display:block;width:100%;text-align:left;background:var(--bg3);border:1.5px solid var(--line);color:var(--text);border-radius:12px;padding:12px 14px;margin-bottom:8px;font-size:14.5px;font-weight:500;transition:.12s;}
  .opt:active{transform:scale(.99);}
  .opt.sel{border-color:var(--gold);background:rgba(244,197,66,.1);}
  .opt.correct{border-color:var(--good);background:rgba(61,220,132,.14);}
  .opt.wrong{border-color:var(--bad);background:rgba(255,92,114,.14);}
  .q input.fill{width:100%;background:var(--bg);border:1.5px solid var(--line);border-radius:12px;color:var(--text);padding:12px 14px;font-size:15px;outline:none;}
  .q input.fill:focus{border-color:var(--gold);}
  .q input.fill.correct{border-color:var(--good);background:rgba(61,220,132,.1);}
  .q input.fill.wrong{border-color:var(--bad);background:rgba(255,92,114,.1);}
  .q .expl{margin-top:10px;font-size:12.5px;background:var(--bg3);border-left:3px solid var(--gold);border-radius:8px;padding:9px 11px;color:#e7e0f5;}
  .q .expl.ok{border-color:var(--good);}
  .q .expl.no{border-color:var(--bad);}

  .result{background:linear-gradient(160deg,var(--bg3),var(--bg2));border:1px solid var(--line);border-radius:18px;padding:20px;text-align:center;margin-top:8px;}
  .result .big{font-family:var(--disp);font-size:56px;line-height:.9;}
  .result .lbl{color:var(--muted);font-size:13px;margin-top:4px;}
  .result .flowgain{color:var(--gold);font-weight:800;margin-top:8px;font-size:15px;}

  .modal{position:fixed;inset:0;background:rgba(6,4,12,.72);backdrop-filter:blur(6px);z-index:80;display:flex;align-items:center;justify-content:center;padding:24px;animation:fade .2s;}
  .modal .box{background:linear-gradient(160deg,var(--bg3),var(--bg2));border:1px solid var(--gold);border-radius:22px;padding:28px 24px;text-align:center;max-width:340px;box-shadow:0 30px 70px rgba(0,0,0,.6);}
  .modal .ava{font-size:64px;filter:drop-shadow(0 8px 20px rgba(244,197,66,.5));}
  .modal .up{font-family:var(--disp);color:var(--gold);font-size:20px;letter-spacing:2px;margin-top:8px;}
  .modal .rk{font-family:var(--disp);font-size:40px;margin:2px 0 6px;}
  .modal p{color:var(--muted);font-size:13.5px;margin:0 0 18px;}

  .foot-note{color:var(--muted);font-size:11px;text-align:center;margin:22px 6px 0;line-height:1.5;}

  .bnav{position:fixed;bottom:0;left:0;right:0;z-index:30;background:rgba(14,11,22,.92);backdrop-filter:blur(12px);border-top:1px solid var(--line);}
  .bnav .in{max-width:520px;margin:0 auto;display:flex;}
  .bnav button{flex:1;background:none;color:var(--muted);padding:10px 0 14px;font-size:10.5px;font-weight:700;display:flex;flex-direction:column;align-items:center;gap:3px;letter-spacing:.5px;}
  .bnav button .bi{font-size:20px;}
  .bnav button.active{color:var(--gold);}
</style>
</head>
<body>

<div class="preview-badge">Preview</div>

<!-- ================= LOGIN ================= -->
<div id="login">
  <div class="mic">🎤</div>
  <div class="logo">CYPHER</div>
  <div class="logo-sub">English na batida</div>
  <div class="login-card">
    <p class="hi">Sua jornada de inglês até o certificado, um passo por dia, no seu ritmo.</p>
    <div class="field">
      <label>Seu nome de MC</label>
      <input id="in-name" type="text" placeholder="Ex.: MC Jully" autocomplete="off">
    </div>
    <div class="field">
      <label>Senha</label>
      <input id="in-pass" type="password" placeholder="••••••••" autocomplete="off">
    </div>
    <div id="reg-extra" class="field hidden">
      <label>Código de convite</label>
      <input id="in-invite" type="text" placeholder="código de acesso" autocomplete="off">
    </div>
    <div id="login-msg" style="color:var(--mag);font-size:12.5px;min-height:16px;margin:0 2px 8px"></div>
    <button id="login-btn" class="btn" onclick="doLogin()">Entrar</button>
    <button id="reg-link" class="btn ghost" style="margin-top:8px" onclick="toggleReg()">Primeira vez? Criar acesso</button>
  </div>
  <p class="foot-note" style="max-width:320px">Preview local. No app final o login e o progresso rodam no Cloudflare (D1 + Worker), sincronizando celular e navegador.</p>
</div>

<!-- ================= APP ================= -->
<div id="app" class="hidden">
  <div class="topbar">
    <div class="in">
      <div class="brand">CYPHER</div>
      <span class="tb-prev">preview</span>
      <div class="streak" title="dias seguidos">🔥 <span id="tb-streak">0</span></div>
      <div class="flow">⚡ <b id="tb-flow">0</b> flow</div>
    </div>
  </div>

  <div class="wrap">
    <section id="v-home" class="view"></section>
    <section id="v-trilha" class="view hidden"></section>
    <section id="v-unidade" class="view hidden"></section>
  </div>

  <div class="bnav">
    <div class="in">
      <button id="nav-home" class="active" onclick="go('home')"><span class="bi">🏠</span>Base</button>
      <button id="nav-trilha" onclick="go('trilha')"><span class="bi">🗺️</span>Trilha</button>
      <button id="nav-out" onclick="logout()"><span class="bi">🚪</span>Sair</button>
    </div>
  </div>
</div>

<script>
/* =====================================================================
   CYPHER · English na batida  ·  preview (armazenamento local)
   Sem IA em runtime: conteúdo estático + correção determinística.
   Questões ancoradas em lições específicas (British Council / EF SET).
   ===================================================================== */

/* ---------- STORAGE ---------- */
const Mem = {};
const Store = {
  ok:(function(){try{localStorage.setItem('__t','1');localStorage.removeItem('__t');return true;}catch(e){return false;}})(),
  get(k){ if(this.ok){try{return JSON.parse(localStorage.getItem(k));}catch(e){return null;}} return Mem[k]||null; },
  set(k,v){ if(this.ok){try{localStorage.setItem(k,JSON.stringify(v));return;}catch(e){}} Mem[k]=v; },
  del(k){ if(this.ok){try{localStorage.removeItem(k);}catch(e){}} delete Mem[k]; }
};

/* ---------- API (online) + fallback local ---------- */
let TOKEN = Store.get("cypher_token") || null, MODE = "local", regMode = false;
const API = {
  async call(path, method, body){
    const r = await fetch(path, { method, headers: Object.assign({ "content-type":"application/json" }, TOKEN?{ "authorization":"Bearer "+TOKEN }:{}), body: body?JSON.stringify(body):undefined });
    let j = {}; try { j = await r.json(); } catch(e){}
    if(!r.ok) throw Object.assign(new Error(j.error||("http"+r.status)), { status:r.status });
    return j;
  },
  login(u,p){ return this.call("/api/login","POST",{ username:u, password:p }); },
  register(u,p,mc,inv){ return this.call("/api/register","POST",{ username:u, password:p, mcName:mc, invite:inv }); },
  save(data){ return this.call("/api/progress","PUT",{ data }); }
};
async function detectMode(){
  if(!location.protocol.startsWith("http")) return "local";
  try { const r = await fetch("/api/health",{cache:"no-store"}); if(r.ok) return "api"; } catch(e){}
  return "local";
}
function persist(){ Store.set(USER, D); if(MODE==="api" && TOKEN){ API.save(D).catch(()=>{}); } }
function setMsg(t){ const m=document.getElementById("login-msg"); if(m) m.textContent=t||""; }
function enterApp(){
  document.getElementById("login").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");
  const pb=document.querySelector(".preview-badge"); if(pb) pb.style.display="none";
  go("home");
}
function onAuthed(r){
  TOKEN = r.token || TOKEN; if(TOKEN) Store.set("cypher_token", TOKEN);
  const disp = r.displayName || "MC";
  USER = "cypher_user_"+disp.toLowerCase().replace(/[^a-z0-9]/g,"_");
  D = r.data || blankData(); D.mcName = disp;
  updateStreak(); Store.set(USER, D); Store.set("cypher_last", USER);
  enterApp();
}

/* ---------- PATENTES ---------- */
const RANKS = [
  {min:0,  nome:"Ouvinte",         ava:"🎧", cefr:"pré-A1"},
  {min:1,  nome:"Caderno de Rima", ava:"📓", cefr:"A1"},
  {min:4,  nome:"Home Studio",     ava:"🎚️", cefr:"A2"},
  {min:8,  nome:"Freestyler",      ava:"🎤", cefr:"A2+"},
  {min:13, nome:"Batalha",         ava:"🔥", cefr:"B1-"},
  {min:19, nome:"Headliner",       ava:"🌟", cefr:"B1"},
  {min:23, nome:"MC",              ava:"👑", cefr:"B1 ✔"}
];
function rankFor(w){ let r=RANKS[0]; for(const x of RANKS){ if(w>=x.min) r=x; } return r; }
function nextRank(w){ for(const x of RANKS){ if(x.min>w) return x; } return null; }

/* ---------- CONTEÚDO (cada faixa = uma lição específica) ---------- */
const COURSE = {
  start:"2026-07-13", exam:"2026-12-14",
  phases:[
    {id:0,nome:"Soundcheck",cover:"🎛️",cor:"#8a5cff",sub:"Diagnóstico & primeiros passos (A1)",weeks:["S1"]},
    {id:1,nome:"Mixtape Vol.1: Primeiros Versos",cover:"📀",cor:"#28d0c0",sub:"Fundação · A1 → A2",weeks:["S2","S3","S4","S5","S6","S7","S8"]},
    {id:2,nome:"Mixtape Vol.2: Na Roda",cover:"🔥",cor:"#f4c542",sub:"Transição · A2 → B1",weeks:["S9","S10","S11","S12","S13","S14","S15","S16","S17","S18"]},
    {id:3,nome:"Backstage: Reta Final",cover:"🎧",cor:"#e8467c",sub:"Simulados & exame oficial",weeks:["S19","S20","S21","S22","S23"]}
  ],
  weeks:{
    S1:{n:"Semana 1",datas:"13–19 jul",cefr:"A1",titulo:"Cumprimentos & apresentações",planned:4,faixas:[
      {id:"f1",tipo:"estudo",titulo:"Cumprimentos e apresentações",dur:"~25 min",
        estudo:{desc:"Lição: um diálogo em que alguém é apresentado a um novo colega. Ouça o áudio e faça os exercícios da página; depois responda aqui sobre as expressões da lição. (Se ainda não fez, aproveite e faça o EF SET para saber seu ponto de partida.)",
          links:[{i:"🎧",t:"Lição: Meeting a new team member (A1)",s:"British Council · listening A1",u:"https://learnenglish.britishcouncil.org/free-resources/listening/a1/meeting-new-team-member"},
                 {i:"🎯",t:"Soundcheck: fazer o EF SET (ponto de partida)",s:"efset.org · 50 min, grátis",u:"https://www.efset.org/ef-set-50/"}]},
        questoes:[
          {tipo:"mcq",p:"Você chega de manhã e cumprimenta o time. O que diz?",o:["Good morning","Good night","Goodbye"],c:0,e:"Good morning = bom dia. Good night é uma despedida à noite."},
          {tipo:"mcq",p:"Ao ser apresentada a alguém: 'Nice to ___ you.'",o:["meet","see","eat"],c:0,e:"'Nice to meet you' é a fórmula ao conhecer alguém."},
          {tipo:"mcq",p:"Apresentando a colega nova: 'This ___ Sarah, our new designer.'",o:["is","are","am"],c:0,e:"Usa-se 'is' porque o sujeito (this) é singular."},
          {tipo:"fill",p:"Resposta a 'How are you?': 'I'm ___, thank you.' (bem)",r:["fine","well","good","ok","okay"],e:"'I'm fine/well, thank you.' são respostas comuns."},
          {tipo:"mcq",p:"No fim do expediente, ao sair, você diz:",o:["See you tomorrow","Good morning","Nice to meet you"],c:0,e:"'See you tomorrow' = até amanhã."}
        ]},
      {id:"f2",tipo:"estudo",titulo:"Verbo to be: am / is / are",dur:"~30 min",
        estudo:{desc:"Lição de gramática sobre o present simple do verbo 'to be'. Leia a explicação e os exemplos da página; as questões abaixo usam as mesmas frases da lição.",
          links:[{i:"📗",t:"Lição: Present simple: 'to be' (A1–A2)",s:"British Council · gramática",u:"https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/present-simple-be"}]},
        questoes:[
          {tipo:"mcq",p:"'I ___ a student.' (afirmativa)",o:["am","is","are"],c:0,e:"I → am. Forma curta: I'm a student."},
          {tipo:"mcq",p:"'My mum ___ a doctor.'",o:["is","am","are"],c:0,e:"He/She/It (my mum) → is. Curta: My mum's a doctor."},
          {tipo:"mcq",p:"'They ___ very busy.' (não estão)",o:["aren't","isn't","am not"],c:0,e:"They → are; negativa curta: aren't."},
          {tipo:"fill",p:"Pergunta: '___ he a teacher?'",r:["is"],e:"Nas perguntas com to be, o verbo vem antes do sujeito: Is he...?"},
          {tipo:"mcq",p:"Complete a resposta. 'Where are you from?' '___ from Brazil.'",o:["I'm","He's","They're"],c:0,e:"Resposta na 1ª pessoa: I'm from Brazil."}
        ]},
      {id:"f3",tipo:"estudo",titulo:"Informações pessoais",dur:"~25 min",
        estudo:{desc:"Lição de áudio: quatro pessoas se apresentam num evento de trabalho (nome, cargo, empresa). Ouça o áudio da página e responda aqui sobre o que você ouviu.",
          links:[{i:"🎧",t:"Lição: Business cards (A1)",s:"British Council · listening A1",u:"https://learnenglish.britishcouncil.org/free-resources/listening/a1/business-cards"}]},
        questoes:[
          {tipo:"mcq",p:"O Doctor Miller pede para ser chamado de:",o:["Peter","Doctor","Miller"],c:0,e:"No áudio: 'Please call me Peter.'"},
          {tipo:"mcq",p:"O doutorado do Dr Miller foi em:",o:["engenharia eletrônica","medicina","química"],c:0,e:"'My doctorate was in electronic engineering.'"},
          {tipo:"mcq",p:"Megumi Tanaka usa qual nome ao trabalhar com estrangeiros?",o:["Meg","Maggie","Gumi"],c:0,e:"Ela usa 'Meg' quando trabalha internacionalmente."},
          {tipo:"mcq",p:"Alessandro Rossi é o ___ do projeto Starlight.",o:["project leader","intern","doctor"],c:0,e:"'I'm the project leader on the Starlight project.'"},
          {tipo:"fill",p:"Andres quer aprender mais sobre research and ___. (desenvolvimento)",r:["development"],e:"'research and development' (P&D)."}
        ]},
      {id:"bat",tipo:"batalha",titulo:"Prova da Semana 1",dur:"~10 min",
        estudo:{desc:"Prova da semana, reunindo cumprimentos e o verbo to be. Acerte pelo menos 70% para liberar a próxima etapa.",links:[]},
        questoes:[
          {tipo:"mcq",p:"'Good ___!' (boa tarde)",o:["afternoon","morning","night"],c:0,e:"afternoon = tarde."},
          {tipo:"mcq",p:"'We ___ colleagues.' (nós somos)",o:["are","is","am"],c:0,e:"We → are."},
          {tipo:"fill",p:"Pergunta com to be: '___ you tired?'",r:["are"],e:"Em 'Are you tired?', o verbo abre a pergunta."},
          {tipo:"mcq",p:"'This is Sarah. ___ our new manager.' (ela é)",o:["She's","He's","They're"],c:0,e:"She's = She is."},
          {tipo:"fill",p:"'Nice to ___ you.' (conhecer)",r:["meet"],e:"Nice to meet you."}
        ]}
    ]},

    S2:{n:"Semana 2",datas:"20–26 jul",cefr:"A1→A2",titulo:"Present simple (rotina)",planned:4,faixas:[
      {id:"f1",tipo:"estudo",titulo:"Present simple: he/she works",dur:"~30 min",
        estudo:{desc:"Lição de gramática sobre o present simple: rotinas, verdades e o -s da 3ª pessoa. As questões usam os mesmos exemplos da página.",
          links:[{i:"📗",t:"Lição: Present simple",s:"British Council · grammar reference",u:"https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/present-simple"}]},
        questoes:[
          {tipo:"mcq",p:"'She ___ in London.' (work)",o:["works","work","working"],c:0,e:"3ª pessoa (she) recebe -s: works."},
          {tipo:"mcq",p:"'I ___ football every weekend.' (play)",o:["play","plays"],c:0,e:"I/you/we/they → sem -s: play."},
          {tipo:"mcq",p:"Verdade científica: 'Light ___ very fast.' (travel)",o:["travels","travel"],c:0,e:"Fato sempre verdadeiro, 3ª pessoa: travels."},
          {tipo:"fill",p:"'He ___ (live) in London.'",r:["lives"],e:"live → lives (3ª pessoa)."},
          {tipo:"mcq",p:"Advérbio de frequência: 'She ___ plays football.' (nunca)",o:["never","ever"],c:0,e:"never = nunca. Vem antes do verbo principal."}
        ]},
      {id:"f2",tipo:"estudo",titulo:"Perguntas e negativas (do / does)",dur:"~30 min",
        estudo:{desc:"Mesma lição de present simple, agora a parte de perguntas e negativas com do/does. Confira a página e responda com base nos exemplos dela.",
          links:[{i:"📗",t:"Lição: Present simple (do/does)",s:"British Council · grammar reference",u:"https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/present-simple"}]},
        questoes:[
          {tipo:"mcq",p:"'___ you play the piano?'",o:["Do","Does"],c:0,e:"you → Do."},
          {tipo:"mcq",p:"'___ Jack play football?'",o:["Does","Do"],c:0,e:"3ª pessoa (Jack) → Does (e o verbo volta ao normal: play)."},
          {tipo:"fill",p:"Negativa: 'John ___ live in Manchester.' (não mora, forma curta)",r:["doesn't","does not","doesnt"],e:"3ª pessoa → doesn't live."},
          {tipo:"mcq",p:"'Angela ___ drive to work.' (não dirige)",o:["doesn't","don't"],c:0,e:"Angela (3ª pessoa) → doesn't."},
          {tipo:"fill",p:"Pergunta: 'Where ___ he come from?'",r:["does"],e:"Where does he come from?"}
        ]},
      {id:"f3",tipo:"estudo",titulo:"Listening: A voicemail message",dur:"~25 min",
        estudo:{desc:"Lição de áudio: um recado de voz (voicemail). Ouça o áudio da página e responda aqui sobre o que a pessoa disse na mensagem.",
          links:[{i:"🎧",t:"Lição: A voicemail message (A1)",s:"British Council · listening A1",u:"https://learnenglish.britishcouncil.org/free-resources/listening/a1/voicemail-message"}]},
        questoes:[
          {tipo:"mcq",p:"Quem deixou o recado?",o:["Marina Silva","John","Alex"],c:0,e:"'This is Marina Silva calling from Old Time Toys.'"},
          {tipo:"mcq",p:"Quem deu o número do John para ela?",o:["Alex","o chefe","a recepção"],c:0,e:"'Your colleague Alex gave me your phone number.'"},
          {tipo:"mcq",p:"Além de ligar de volta, Marina pede que John:",o:["envie o catálogo e os preços por e-mail","vá até a loja","cancele o pedido"],c:0,e:"Ela pede o 'brochure' (catálogo) e os preços por e-mail."},
          {tipo:"fill",p:"Marina quer informações sobre os novos ___ da empresa. (produtos)",r:["products","produtos"],e:"'I need some information on your new products.'"}
        ]},
      {id:"bat",tipo:"batalha",titulo:"Prova da Semana 2",dur:"~10 min",
        estudo:{desc:"Prova da semana sobre o present simple. Acerte pelo menos 70% para seguir.",links:[]},
        questoes:[
          {tipo:"mcq",p:"'My sister ___ English at university.' (study)",o:["studies","studys","study"],c:0,e:"consoante + y → -ies: studies."},
          {tipo:"mcq",p:"'___ they work here?'",o:["Do","Does"],c:0,e:"they → Do."},
          {tipo:"fill",p:"Negativa: 'I ___ like Mondays.' (não gosto, forma curta)",r:["don't","do not","dont"],e:"I don't like."},
          {tipo:"mcq",p:"'She ___ TV every night.' (watch)",o:["watches","watchs"],c:0,e:"verbos em -ch → -es: watches."},
          {tipo:"fill",p:"Pergunta: 'What ___ Angela do?' (profissão)",r:["does"],e:"What does Angela do?"}
        ]}
    ]},

    S3:{n:"Semana 3",datas:"27 jul–02 ago",cefr:"A2",titulo:"Present continuous & artigos",planned:4,faixas:[
      {id:"f1",tipo:"estudo",titulo:"Present continuous (agora)",dur:"~30 min",
        estudo:{desc:"Lição de gramática sobre o present continuous (to be + verbo-ing) para ações no momento. As questões usam as frases da própria lição, incluindo verbos de estado.",
          links:[{i:"📗",t:"Lição: Present continuous",s:"British Council · grammar reference",u:"https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/present-continuous"}]},
        questoes:[
          {tipo:"mcq",p:"'Please be quiet. The children ___.' (sleep, agora)",o:["are sleeping","sleep"],c:0,e:"Ação neste momento → are sleeping."},
          {tipo:"mcq",p:"Pergunta: '___ you listening?'",o:["Are","Do"],c:0,e:"Continuous usa to be: Are you listening?"},
          {tipo:"fill",p:"'She ___ going home until Monday.' (negativa: não está indo, forma curta)",r:["isn't","is not","isnt"],e:"She isn't going home..."},
          {tipo:"mcq",p:"Verbo de estado (não usa -ing). Qual está correto?",o:["I understand you","I am understanding you"],c:0,e:"'understand' é verbo de estado: I understand you."},
          {tipo:"mcq",p:"'Michael is at university. He ___ history.' (study, situação temporária)",o:["is studying","studies"],c:0,e:"Situação temporária → He's studying history."}
        ]},
      {id:"f2",tipo:"estudo",titulo:"Artigos: a / an / the",dur:"~25 min",
        estudo:{desc:"Lição sobre os artigos 'a', 'an' e 'the'. Regra-chave: 'a' antes de som de consoante, 'an' antes de som de vogal. Leia a página e responda.",
          links:[{i:"📗",t:"Lição: Articles: 'a', 'an', 'the'",s:"British Council · gramática A1–A2",u:"https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2-grammar/articles-a-an-the"}]},
        questoes:[
          {tipo:"mcq",p:"'I have ___ apple.'",o:["an","a"],c:0,e:"apple começa com som de vogal → an."},
          {tipo:"mcq",p:"'She is ___ university student.'",o:["a","an"],c:0,e:"'university' tem som de 'iu' (consoante) → a."},
          {tipo:"mcq",p:"'I need ___ umbrella.'",o:["an","a"],c:0,e:"umbrella tem som de vogal → an."},
          {tipo:"fill",p:"'He's ___ honest man.' (h mudo, som de vogal)",r:["an"],e:"honest tem 'h' mudo → som de vogal → an."},
          {tipo:"mcq",p:"'___ sun is very hot today.' (único e específico)",o:["The","A"],c:0,e:"Coisa única/específica → the sun."}
        ]},
      {id:"f3",tipo:"estudo",titulo:"Listening: Booking a table",dur:"~25 min",
        estudo:{desc:"Lição de áudio: um cliente reserva uma mesa no restaurante Gino's e depois muda a reserva. Ouça o áudio da página e responda aqui sobre o que aconteceu.",
          links:[{i:"🎧",t:"Lição: Booking a table (A1)",s:"British Council · listening A1",u:"https://learnenglish.britishcouncil.org/free-resources/listening/a1/booking-table"}]},
        questoes:[
          {tipo:"mcq",p:"Qual é o nome do restaurante?",o:["Gino's","Mario's","Luigi's"],c:0,e:"O atendente atende dizendo 'Hello, Gino's.'"},
          {tipo:"fill",p:"Qual é o nome na reserva?",r:["jamie"],e:"O cliente soletra J-A-M-I-E."},
          {tipo:"mcq",p:"Na segunda ligação, para quantas pessoas ficou a reserva?",o:["seis","quatro","dois"],c:0,e:"Jamie muda de quatro para seis pessoas."},
          {tipo:"mcq",p:"E para que horário, no fim?",o:["oito horas","sete e meia","nove horas"],c:0,e:"Terminam marcando 'eight o'clock' (8:00)."},
          {tipo:"mcq",p:"'I'd like a table ___ six, please.' (preposição)",o:["for","to","in"],c:0,e:"a table for six = mesa para seis."}
        ]},
      {id:"bat",tipo:"batalha",titulo:"Prova da Semana 3",dur:"~10 min",
        estudo:{desc:"Prova da semana: present continuous e artigos. Acerte pelo menos 70% para concluir o preview.",links:[]},
        questoes:[
          {tipo:"mcq",p:"'Look! It ___.' (rain, agora)",o:["is raining","rains"],c:0,e:"Agora → is raining."},
          {tipo:"mcq",p:"'___ egg' (um ovo)",o:["an","a"],c:0,e:"egg tem som de vogal → an."},
          {tipo:"fill",p:"'They ___ TV right now.' (watch, forma contínua e curta)",r:["are watching","'re watching","are watchng"],e:"right now → are watching."},
          {tipo:"mcq",p:"Verbo de estado: qual é o correto?",o:["I don't understand","I'm not understanding"],c:0,e:"understand não usa contínuo: I don't understand."}
        ]}
    ]}
  },
  scaffold:{
    S4:{n:"Semana 4",datas:"03–09 ago",cefr:"A1→A2",titulo:"Passado simples",link:{t:"Gramática A1–A2 (past simple)",u:"https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2"}},
    S5:{n:"Semana 5",datas:"10–16 ago",cefr:"A2",titulo:"Futuro (going to / will) & preposições",link:{t:"Gramática A1–A2",u:"https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2"}},
    S6:{n:"Semana 6",datas:"17–23 ago",cefr:"A2",titulo:"Comparativos & quantificadores",link:{t:"Gramática A1–A2",u:"https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2"}},
    S7:{n:"Semana 7",datas:"24–30 ago",cefr:"A2",titulo:"Revisão de tempos verbais",link:{t:"Gramática A1–A2",u:"https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2"}},
    S8:{n:"Semana 8",datas:"31 ago–06 set",cefr:"A2",titulo:"Consolidação + checkpoint EF SET",link:{t:"Refazer o EF SET",u:"https://www.efset.org/ef-set-50/"}},
    S9:{n:"Semana 9",datas:"07–13 set",cefr:"A2→B1",titulo:"Present perfect",link:{t:"Lição: Present perfect",u:"https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/present-perfect"}},
    S10:{n:"Semana 10",datas:"14–20 set",cefr:"B1",titulo:"Conectivos & discurso",link:{t:"Gramática B1–B2",u:"https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2"}},
    S11:{n:"Semana 11",datas:"21–27 set",cefr:"B1",titulo:"Condicionais (0 e 1)",link:{t:"Gramática B1–B2",u:"https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2"}},
    S12:{n:"Semana 12",datas:"28 set–04 out",cefr:"B1",titulo:"Voz passiva",link:{t:"Gramática B1–B2",u:"https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2"}},
    S13:{n:"Semana 13",datas:"05–11 out",cefr:"B1",titulo:"Orações relativas + checkpoint",link:{t:"Gramática B1–B2",u:"https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2"}},
    S14:{n:"Semana 14",datas:"12–18 out",cefr:"B1",titulo:"Condicionais (2) & modais",link:{t:"Gramática B1–B2",u:"https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2"}},
    S15:{n:"Semana 15",datas:"19–25 out",cefr:"B1",titulo:"Phrasal verbs comuns",link:{t:"Vocabulário",u:"https://learnenglish.britishcouncil.org/vocabulary"}},
    S16:{n:"Semana 16",datas:"26 out–01 nov",cefr:"B1",titulo:"Leitura acadêmica (início)",link:{t:"Leitura",u:"https://learnenglish.britishcouncil.org/skills/reading"}},
    S17:{n:"Semana 17",datas:"02–08 nov",cefr:"B1",titulo:"Reported speech",link:{t:"Gramática B1–B2",u:"https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2"}},
    S18:{n:"Semana 18",datas:"09–15 nov",cefr:"B1",titulo:"Consolidação B1 + checkpoint",link:{t:"Refazer o EF SET",u:"https://www.efset.org/ef-set-50/"}},
    S19:{n:"Semana 19",datas:"16–22 nov",cefr:"B1",titulo:"Simulado completo + pontos fracos",link:{t:"EF SET",u:"https://www.efset.org/ef-set-50/"}},
    S20:{n:"Semana 20",datas:"23–29 nov",cefr:"B1",titulo:"Intensivo de leitura (formato/timing)",link:{t:"Leitura",u:"https://learnenglish.britishcouncil.org/skills/reading"}},
    S21:{n:"Semana 21",datas:"30 nov–06 dez",cefr:"B1",titulo:"Intensivo de listening (formato/timing)",link:{t:"Listening B1",u:"https://learnenglish.britishcouncil.org/free-resources/listening/b1"}},
    S22:{n:"Semana 22",datas:"07–13 dez",cefr:"B1",titulo:"Simulado final + estratégia",link:{t:"EF SET",u:"https://www.efset.org/ef-set-50/"}},
    S23:{n:"Semana 23",datas:"14–20 dez",cefr:"B1 ✔",titulo:"Exame oficial: EF SET",link:{t:"Fazer o EF SET oficial",u:"https://www.efset.org/ef-set-50/"}}
  }
};
const ALL_WEEK_IDS = ["S1","S2","S3","S4","S5","S6","S7","S8","S9","S10","S11","S12","S13","S14","S15","S16","S17","S18","S19","S20","S21","S22","S23"];
const PLANNED_PER_WEEK = 4;
const TOTAL_PLANNED = ALL_WEEK_IDS.length*PLANNED_PER_WEEK;

/* ---------- ESTADO ---------- */
let USER=null, D=null, curWeek=null, curFaixa=null, checked=false, answers={};

function blankData(){ return {flow:0, done:{}, batalhas:{}, streak:{count:0,last:null}, created:todayStr()}; }
function todayStr(){ const d=new Date(); return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,'0')+"-"+String(d.getDate()).padStart(2,'0'); }
function daysBetween(a,b){ return Math.floor((new Date(b+"T00:00:00")-new Date(a+"T00:00:00"))/86400000); }

/* ---------- LOGIN ---------- */
async function doLogin(){
  const name=(document.getElementById('in-name').value||'').trim();
  const pass=(document.getElementById('in-pass').value||'').trim();
  if(!name){ document.getElementById('in-name').focus(); return; }
  if(!pass){ document.getElementById('in-pass').focus(); return; }
  if(regMode) return doRegister(name,pass);
  if(MODE==='api'){
    setMsg('Entrando...');
    try{ onAuthed(await API.login(name,pass)); }
    catch(e){ setMsg(e.status===401?'Nome de MC ou senha incorretos.':'Não consegui conectar. Tente de novo.'); }
    return;
  }
  USER="cypher_user_"+name.toLowerCase().replace(/[^a-z0-9]/g,'_');
  D=Store.get(USER)||blankData(); D.mcName=name;
  updateStreak(); Store.set(USER,D); Store.set("cypher_last",USER);
  enterApp();
}
async function doRegister(name,pass){
  const inv=(document.getElementById('in-invite')||{value:''}).value.trim();
  setMsg('Criando acesso...');
  try{ onAuthed(await API.register(name,pass,name,inv)); }
  catch(e){ setMsg(e.status===403?'Código de convite inválido.':e.status===409?'Esse nome já existe. Faça login.':e.status===400?'Senha muito curta (mínimo 4).':'Não consegui criar o acesso.'); }
}
function toggleReg(){
  regMode=!regMode;
  document.getElementById('reg-extra').classList.toggle('hidden',!regMode);
  document.getElementById('login-btn').textContent=regMode?'Criar acesso':'Entrar';
  document.getElementById('reg-link').textContent=regMode?'Já tenho acesso, entrar':'Primeira vez? Criar acesso';
  setMsg('');
}
function logout(){ Store.del("cypher_token"); Store.del("cypher_last"); TOKEN=null; location.reload(); }
function resetAll(){ if(USER)Store.del(USER); const l=Store.get("cypher_last"); if(l)Store.del(l); location.reload(); }
function updateStreak(){
  const t=todayStr();
  if(D.streak.last===t) return;
  if(D.streak.last && daysBetween(D.streak.last,t)===1) D.streak.count++;
  else D.streak.count=1;
  D.streak.last=t;
}

/* ---------- PROGRESSO ---------- */
function weekDoneCount(){ let n=0; for(const w of ALL_WEEK_IDS){ if(D.batalhas[w]) n++; } return n; }
function faixasDoneCount(){ return Object.keys(D.done).length; }
function expectedFaixas(){
  const el=daysBetween(COURSE.start,todayStr()), tot=daysBetween(COURSE.start,COURSE.exam);
  return Math.round(Math.max(0,Math.min(1, el/tot))*TOTAL_PLANNED);
}
function expectedWeek(){
  return Math.max(1,Math.min(23, Math.floor(daysBetween(COURSE.start,todayStr())/7)+1));
}
function dateStatus(){
  const diff=faixasDoneCount()-expectedFaixas();
  if(diff>=2) return {cls:"ahead",ico:"🚀",t:"Adiantada",d:"Você está "+diff+" faixas à frente do cronograma."};
  if(diff>=-1) return {cls:"ok",ico:"🎯",t:"No ritmo",d:"Você está em dia com o cronograma."};
  return {cls:"late",ico:"⏰",t:"Atrasada",d:"Faltam "+(-diff)+" faixas para alcançar o cronograma."};
}
function weekUnlocked(wid){
  const idx=ALL_WEEK_IDS.indexOf(wid);
  if(idx<=0) return true;
  return !!D.batalhas[ALL_WEEK_IDS[idx-1]];
}
function faixaUnlocked(wid,fx){
  if(!weekUnlocked(wid)) return false;
  const wk=COURSE.weeks[wid]; if(!wk) return false;
  if(fx.tipo==="batalha") return wk.faixas.filter(f=>f.tipo==="estudo").every(f=>D.done[wid+"-"+f.id]);
  return true;
}

/* ---------- NAVEGAÇÃO ---------- */
function go(v){
  document.getElementById('v-home').classList.toggle('hidden',v!=='home');
  document.getElementById('v-trilha').classList.toggle('hidden',v!=='trilha');
  document.getElementById('v-unidade').classList.toggle('hidden',v!=='unidade');
  document.getElementById('nav-home').classList.toggle('active',v==='home');
  document.getElementById('nav-trilha').classList.toggle('active',v==='trilha');
  window.scrollTo(0,0);
  if(v==='home') renderHome();
  if(v==='trilha') renderTrilha();
  syncTop();
}
function syncTop(){ document.getElementById('tb-flow').textContent=D.flow; document.getElementById('tb-streak').textContent=D.streak.count; }

/* ---------- HOME ---------- */
function renderHome(){
  const wd=weekDoneCount(), rank=rankFor(wd), nx=nextRank(wd);
  const pct=Math.round(faixasDoneCount()/TOTAL_PLANNED*100);
  const st=dateStatus();
  const daysToExam=Math.max(0,daysBetween(todayStr(),COURSE.exam));
  const circ=2*Math.PI*44;
  const nxt=findNextFaixa();
  let nextLbl = nxt ? (COURSE.weeks[nxt.w].n+" · "+nxt.f.titulo) : "Você concluiu o preview.";
  document.getElementById('v-home').innerHTML=`
    <div class="hero">
      <div class="ring">
        <svg width="96" height="96">
          <circle cx="48" cy="48" r="44" stroke="rgba(255,255,255,.10)" stroke-width="7" fill="none"/>
          <circle cx="48" cy="48" r="44" stroke="url(#g)" stroke-width="7" fill="none"
            stroke-linecap="round" stroke-dasharray="${circ}" stroke-dashoffset="${circ*(1-pct/100)}"/>
          <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#f4c542"/><stop offset="1" stop-color="#e8467c"/>
          </linearGradient></defs>
        </svg>
        <div class="ava">${rank.ava}</div>
      </div>
      <div class="who">
        <div class="mcname">${escapeHtml(D.mcName)}</div>
        <div class="rank">${rank.nome}</div>
        <div class="next">${nx?`Faltam <b>${nx.min-wd} semana(s)</b> para o nível <b>${nx.nome}</b> ${nx.ava}`:`Nível máximo: <b>MC</b> 👑`}<br>Progresso: <b>${pct}%</b> · alvo ${rank.cefr}</div>
      </div>
    </div>

    <div class="statuscard ${st.cls}">
      <div class="ico">${st.ico}</div>
      <div><div class="t">${st.t} · hoje é a Semana ${expectedWeek()}</div><div class="d">${st.d}</div></div>
    </div>

    <div class="grid2">
      <div class="stat"><div class="k">⚡ Flow (pontos)</div><div class="v">${D.flow}</div></div>
      <div class="stat"><div class="k">🎧 Faixas concluídas</div><div class="v">${faixasDoneCount()}<small> / ${TOTAL_PLANNED}</small></div></div>
      <div class="stat"><div class="k">🔥 Dias seguidos</div><div class="v">${D.streak.count}<small> dias</small></div></div>
      <div class="stat"><div class="k">🏁 Até o exame</div><div class="v">${daysToExam}<small> dias</small></div></div>
    </div>

    <div class="cta">
      <button class="btn" onclick="${nxt?`openFaixa('${nxt.w}','${nxt.f.id}')`:`go('trilha')`}">
        ${nxt?"Continuar: "+escapeHtml(shorten(nxt.f.titulo,24)):"Ver a trilha"}
      </button>
      <div class="foot-note" style="margin-top:10px">Próxima: ${escapeHtml(nextLbl)}</div>
    </div>
  `;
}
function shorten(s,n){ return s.length>n?s.slice(0,n-1)+"…":s; }
function findNextFaixa(){
  for(const w of ALL_WEEK_IDS){
    const wk=COURSE.weeks[w]; if(!wk) return null;
    for(const f of wk.faixas){
      const key=w+"-"+f.id;
      if(f.tipo==="batalha"){ if(D.batalhas[w]) continue; if(faixaUnlocked(w,f)) return {w,f}; else break; }
      if(!D.done[key]) return {w,f};
    }
  }
  return null;
}

/* ---------- TRILHA ---------- */
function renderTrilha(){
  let html=`<h2 class="sec-t">Sua <span>trilha</span> até o nível MC</h2>`;
  for(const ph of COURSE.phases){
    const wids=ph.weeks, total=wids.length, doneW=wids.filter(w=>D.batalhas[w]).length;
    html+=`<div class="mixtape">
      <div class="mt-head" onclick="this.parentNode.querySelector('.mt-body').classList.toggle('hidden')">
        <div class="mt-cover" style="background:${ph.cor}22;border:1px solid ${ph.cor}55">${ph.cover}</div>
        <div><div class="mt-t">${ph.nome}</div><div class="mt-s">${ph.sub}</div></div>
        <div class="mt-meta">${doneW}/${total}<br>semanas</div>
      </div>
      <div class="mt-body">`;
    for(const wid of wids){
      const wk=COURSE.weeks[wid];
      if(wk){
        html+=`<div class="weekblk"><div class="wk-h"><span class="wk-n">${wk.n.replace('Semana ','S')}</span><span class="wk-t">${escapeHtml(wk.titulo)}</span><span class="wk-d">${wk.datas} · ${wk.cefr}</span></div>`;
        for(const f of wk.faixas){
          const key=wid+"-"+f.id;
          const done = f.tipo==="batalha"? !!D.batalhas[wid] : !!D.done[key];
          const ul=faixaUnlocked(wid,f);
          const cls=done?"done":(ul?"clickable":"locked");
          const icon=f.tipo==="batalha"?"🥊":"🎵";
          const right=done?"✅":(ul?"›":"🔒");
          html+=`<div class="faixa ${f.tipo} ${cls}" ${ul?`onclick="openFaixa('${wid}','${f.id}')"`:""}>
            <div class="fx-ico">${icon}</div>
            <div style="min-width:0"><div class="fx-t">${escapeHtml(f.titulo)}</div><div class="fx-s">${f.tipo==="batalha"?"Prova da semana":"Lição + questões"} · ${f.dur}</div></div>
            <div class="fx-r">${right}</div></div>`;
        }
        html+=`</div>`;
      } else {
        const sc=COURSE.scaffold[wid];
        html+=`<div class="weekblk"><div class="wk-h"><span class="wk-n">${wid}</span><span class="wk-t">${escapeHtml(sc.titulo)}</span><span class="wk-d">${sc.datas} · ${sc.cefr}</span></div>
          <div class="soon">Faixas em produção. Por enquanto, estude por aqui: <a href="${sc.link.u}" target="_blank" rel="noopener">${escapeHtml(sc.link.t)} ↗</a></div></div>`;
      }
    }
    html+=`</div></div>`;
  }
  html+=`<div class="foot-note">Preview: Semanas 1 a 3 completas, com questões ligadas a cada lição. As outras 20 semanas já estão mapeadas com o link de estudo. As questões entram nas próximas versões.</div>`;
  document.getElementById('v-trilha').innerHTML=html;
}

/* ---------- UNIDADE ---------- */
function openFaixa(wid,fid){
  curWeek=wid; curFaixa=COURSE.weeks[wid].faixas.find(f=>f.id===fid);
  checked=false; answers={}; renderUnidade(); go('unidade');
}
function renderUnidade(){
  const wk=COURSE.weeks[curWeek], f=curFaixa, isBat=f.tipo==="batalha";
  let html=`<div class="backbar"><button onclick="go('trilha')">‹ Trilha</button><div style="color:var(--muted);font-size:12px">${wk.n} · ${wk.datas}</div></div>
    <div class="u-head"><span class="tag" style="${isBat?'background:var(--mag);color:#fff':''}">${isBat?"🥊 Prova":"🎵 Lição"}</span>
      <h3>${escapeHtml(f.titulo)}</h3><p>${escapeHtml(f.estudo.desc)}</p></div>`;
  if(f.estudo.links && f.estudo.links.length){
    html+=`<div class="study"><div class="lbl">🎧 Estude primeiro (${f.dur})</div><p>Abra a lição, estude o conteúdo e depois responda. Os links abrem em outra aba.</p>`;
    for(const l of f.estudo.links)
      html+=`<a class="linkbtn" href="${l.u}" target="_blank" rel="noopener"><span class="li">${l.i}</span><span><div class="lt">${escapeHtml(l.t)}</div><div class="ls">${escapeHtml(l.s)}</div></span><span class="go">↗</span></a>`;
    html+=`</div>`;
  }
  html+=`<div class="qwrap" id="qwrap">`;
  f.questoes.forEach((q,i)=>{ html+=renderQ(q,i); });
  html+=`</div><div id="q-action"><button class="btn" onclick="checkAll()">Conferir respostas</button></div><div id="q-result"></div><div style="height:20px"></div>`;
  document.getElementById('v-unidade').innerHTML=html;
}
function renderQ(q,i){
  let inner=`<div class="qn">Questão ${i+1}${q.tipo==="fill"?" · completar":" · múltipla escolha"}</div><div class="qp">${qText(q)}</div>`;
  if(q.tipo==="mcq"){
    q.o.forEach((op,j)=>{ inner+=`<button class="opt" id="o-${i}-${j}" onclick="pick(${i},${j})">${escapeHtml(op)}</button>`; });
  } else {
    inner+=`<input class="fill" id="f-${i}" type="text" autocomplete="off" autocapitalize="none" oninput="answers[${i}]=this.value" placeholder="digite em inglês…">`;
  }
  inner+=`<div id="e-${i}"></div>`;
  return `<div class="q" id="q-${i}">${inner}</div>`;
}
function qText(q){ return escapeHtml(q.p).replace(/___/g,'<span class="blank">____</span>'); }
function pick(i,j){
  if(checked) return;
  answers[i]=j;
  curFaixa.questoes[i].o.forEach((_,k)=>{ document.getElementById('o-'+i+'-'+k).classList.toggle('sel',k===j); });
}
function norm(s){ return (s||'').toString().trim().toLowerCase().replace(/[.!?]$/,'').replace(/\s+/g,' '); }
function checkAll(){
  if(checked) return;
  const f=curFaixa; let correct=0;
  f.questoes.forEach((q,i)=>{
    let ok=false;
    if(q.tipo==="mcq"){
      const a=answers[i];
      q.o.forEach((_,k)=>{ const b=document.getElementById('o-'+i+'-'+k); b.classList.remove('sel');
        if(k===q.c) b.classList.add('correct'); if(a===k && a!==q.c) b.classList.add('wrong'); });
      ok = a===q.c;
    } else {
      const inp=document.getElementById('f-'+i), val=norm(inp.value);
      ok = (q.r||[]).some(r=>norm(r)===val);
      inp.classList.add(ok?'correct':'wrong'); inp.disabled=true;
    }
    if(ok) correct++;
    document.getElementById('e-'+i).innerHTML=`<div class="expl ${ok?'ok':'no'}">${ok?'✅ Correto.':'❌ Resposta certa: <b>'+escapeHtml(q.tipo==='mcq'?q.o[q.c]:q.r[0])+'</b>.'} ${escapeHtml(q.e)}</div>`;
  });
  checked=true;
  const total=f.questoes.length, pctv=Math.round(correct/total*100);
  const isBat=f.tipo==="batalha", pass = isBat? pctv>=70 : true;
  const gain = correct*10 + (isBat&&pass?30:0);
  const key=curWeek+"-"+f.id, already = isBat? D.batalhas[curWeek] : D.done[key];
  if(!already){
    D.flow += gain;
    if(isBat){ if(pass) D.batalhas[curWeek]=true; } else { D.done[key]={score:pctv}; }
    updateStreak(); persist();
  }
  syncTop();
  document.getElementById('q-action').classList.add('hidden');
  document.getElementById('q-result').innerHTML=`<div class="result">
      <div class="big" style="color:${pass?'var(--good)':'var(--bad)'}">${pctv}%</div>
      <div class="lbl">${correct} de ${total} corretas${isBat?(pass?" · prova concluída":" · você precisa de 70% para passar"):""}</div>
      ${(!already)?`<div class="flowgain">+${gain} flow ⚡</div>`:`<div class="lbl" style="margin-top:8px">(já contabilizado antes)</div>`}
    </div><div style="height:12px"></div>
    ${isBat&&!pass?`<button class="btn sec" onclick="openFaixa('${curWeek}','${f.id}')">Refazer prova</button>`:``}
    <button class="btn ${isBat&&!pass?'ghost':''}" style="margin-top:8px" onclick="afterFaixa()">${isBat&&pass?"Seguir na trilha":"Continuar"}</button>`;
  document.getElementById('q-result').scrollIntoView({behavior:'smooth'});
  if(isBat && pass && !already){
    const wdNow=weekDoneCount();
    if(rankFor(wdNow).nome!==rankFor(wdNow-1).nome) setTimeout(()=>levelUp(rankFor(wdNow)),500);
  }
}
function afterFaixa(){ const nx=findNextFaixa(); if(nx) openFaixa(nx.w,nx.f.id); else go('home'); }
function levelUp(rank){
  const m=document.createElement('div'); m.className='modal';
  m.innerHTML=`<div class="box"><div class="ava">${rank.ava}</div><div class="up">NOVO NÍVEL</div>
    <div class="rk">${rank.nome}</div><p>Nível ${rank.cefr}. Você evoluiu. Siga a jornada até chegar a MC.</p>
    <button class="btn" onclick="this.closest('.modal').remove();go('home');">Continuar</button></div>`;
  document.body.appendChild(m);
}

function escapeHtml(s){ return (s||'').toString().replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

/* boot: detecta modo (online/local) e faz auto-login se possível */
(async function(){
  MODE = await detectMode();
  if(MODE==='local'){ const rl=document.getElementById('reg-link'); if(rl) rl.style.display='none'; }
  if(MODE==='api' && TOKEN){
    try{
      const r=await API.call('/api/progress','GET');
      if(r){ const last=Store.get("cypher_last");
        D=(r.data)||(last?Store.get(last):null)||blankData();
        USER=last||("cypher_user_"+String(D.mcName||'mc').toLowerCase().replace(/[^a-z0-9]/g,'_'));
        updateStreak(); Store.set(USER,D); enterApp(); return; }
    }catch(e){ if(e.status===401){ TOKEN=null; Store.del("cypher_token"); } }
  }
  if(MODE==='local'){
    const last=Store.get("cypher_last");
    if(last){ const d=Store.get(last); if(d&&d.mcName){ USER=last; D=d; updateStreak(); Store.set(USER,D); enterApp(); } }
  }
})();
</script>
</body>
</html>
