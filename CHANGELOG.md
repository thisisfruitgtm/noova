### Changelog — Noova

Format: data ISO (DD-MM-YYYY) — scurtă descriere. Păstrăm intrările concise, orientate pe impact.

2025-08-13 — Inițializare documentație roluri și procese
- Adăugat `docs/00-ROLURI-SI-DOCUMENTE.md`
- Adăugat fișiere rol (PM, Tech Lead, FE, BE, Fullstack, DevOps, QA, UX/UI, Content, i18n, Data, Sec, A11y, SEO, Support, PM/Scrum)
- Adăugat `.cursor/rules.md`

2025-08-13 — Scaffold aplicație web + DB (SQLite/Neon)
- Creat aplicație Next.js (`web`) cu TypeScript, App Router, Tailwind 4, ESLint
- Prisma: modele MVP + migrare inițială, client generat; scheme separate: `schema.sqlite.prisma` și `schema.postgres.prisma`
- Scripturi DB în `package.json`: `db:use:sqlite`, `db:use:pg`, `db:dev:sqlite`, `db:push:pg`, `db:dev:pg`
- `.env.example` cu URL SQLite și template Neon Postgres
- Branding UI: culori + fonturi (Montserrat/Open Sans), layout `ro-RO`, homepage CTA în română
- ESLint: ignorare fișiere Prisma generate pentru build stabil
- Git repo inițializat la rădăcină și setat remote `origin` către `https://github.com/thisisfruitgtm/noova.git`

