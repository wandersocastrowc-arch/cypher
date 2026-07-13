# CYPHER — English na batida

App de estudo de inglês (trilha até o certificado EF SET) com login, senha e progresso sincronizado.

**Stack:** Cloudflare Pages (frontend) + Pages Functions (API) + D1 (banco SQLite). Sem IA em runtime: conteúdo estático e correção feita por código.

## O que já está pronto
- Banco **D1 `cypher-db`** criado na conta (id `02d78aae-e72b-4f6d-a96f-7de0bb84a718`), com as tabelas `users` e `progress`.
- **API** em `functions/api/`: `health`, `register`, `login`, `progress`. Senha protegida com PBKDF2 e sessão via token assinado (HMAC-SHA256).
- **Frontend** `index.html`: usa a API quando publicado; funciona em modo local (preview) quando aberto como arquivo.

## Segredos a definir
- `AUTH_SECRET`: chave aleatória para assinar os tokens. Gere uma, por exemplo com `openssl rand -hex 32`.
- `INVITE_CODE`: código exigido para criar acesso (evita cadastro aberto na URL pública). Escolha um valor.

## Deploy via GitHub + painel (recomendado)
1. Suba estes arquivos para um repositório no GitHub:
   ```bash
   git init && git add . && git commit -m "CYPHER"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/cypher.git
   git push -u origin main
   ```
2. No Cloudflare: **Workers & Pages → Create → Pages → Connect to Git** e escolha o repositório.
   - Framework preset: **None**. Build command: **(vazio)**. Output directory: **`.`**
3. Depois de criado, em **Settings** do projeto Pages:
   - **Bindings → D1 database**: adicione um binding com nome `DB` apontando para `cypher-db`.
   - **Variables and Secrets**: adicione `AUTH_SECRET` e `INVITE_CODE` (marque como Secret).
4. Em **Deployments**, refaça o deploy para aplicar binding e segredos.
5. Abra a URL do Pages, clique em **"Primeira vez? Criar acesso"**, crie o acesso da Jully com o `INVITE_CODE`. A partir daí é só login e senha, com progresso sincronizado no celular e no navegador.

## Deploy pela linha de comando (sem GitHub)
Requer Node e login no wrangler (`npx wrangler login`, abre o navegador).
```bash
npm install
npx wrangler pages secret put AUTH_SECRET   # cole a chave
npx wrangler pages secret put INVITE_CODE    # cole o código
npm run deploy                               # wrangler pages deploy .
```
O binding do D1 já está no `wrangler.toml`.

## Recriar o schema (se precisar)
```bash
npx wrangler d1 execute cypher-db --remote --file=./schema.sql
```

## Rodar localmente
```bash
printf 'AUTH_SECRET=dev\nINVITE_CODE=cypher2026\n' > .dev.vars
npx wrangler d1 execute cypher-db --local --file=./schema.sql
npx wrangler pages dev .
```

## Estrutura
```
index.html              frontend (app + preview local)
functions/api/
  _lib.js               hash de senha, token, helpers
  health.js             GET  /api/health
  register.js           POST /api/register  (exige INVITE_CODE)
  login.js              POST /api/login
  progress.js           GET/PUT /api/progress  (exige token)
schema.sql              tabelas users e progress
wrangler.toml           binding do D1
```
