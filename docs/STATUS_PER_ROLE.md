### Status pe roluri — TODO / DONE

Document de sincronizare rapidă pentru progres pe roluri. Actualizează la fiecare PR.

#### Frontend Engineer
- DONE:
  - Next.js + TypeScript (App Router), Tailwind 4, shadcn/ui (Button, Card, Input, Textarea, Dialog)
  - Branding (culori + fonturi), i18n `ro-RO` (next-intl: middleware + plugin + mesaje)
  - Pagini schelet: BrandKit, Bibliotecă media (dialog upload WIP), Șabloane (grilă demo + dialog Create), Calendar (formular client-side), Contacte, Analitice
  - CTA funcțional către rute locale, Login `/login`
- TODO:
  - Animații subtile (framer-motion), stări empty/eroare/loading
  - SEO per pagină: meta/OG/structured data
  - Microsite public `/u/[username]` — layout/blocks, QR și short links UI

#### Backend Engineer
- DONE:
  - Prisma: modele MVP + migrare inițială; scripturi DB (SQLite/Neon); health API; tabele NextAuth
  - API: `POST/GET /api/messages` (zod + rate-limit), `POST /api/links` + redirect `/r/[slug]`, `POST /api/qr` (SVG), `GET/PATCH /api/brandkit`
- TODO:
  - `/api/assets`, `/api/templates`, `/api/posts` (+`/[id]`), `/api/page`, `/api/messages/inbox` detașată, `/api/pdf/catalog`
  - RBAC/tenant pe rute; rate-limit mai fin; email notificări

#### Full‑stack Engineer
- DONE:
  - NextAuth (cred) integrat, seed utilizator demo, fluxuri demo Templates/Calendar
- TODO:
  - UploadThing, fluxuri end‑to‑end: BrandKit → Templates → Calendar → Microsite → Contacte → Analitice

#### DevOps / Platform
- DONE:
  - Git + remote; `.env.example`; comutare SQLite/Neon; migrații/generate; seed script
- TODO:
  - CI (lint, Vitest, Playwright), seed automat pe env, deploy Vercel, logs/monitorizare

#### QA / Testare
- TODO:
  - Vitest pentru utilitare/validatori zod
  - Playwright (onboarding → BrandKit → șablon → programare → reminder; microsite + mesaj; link scurt + click; QR scan)
  - Teste a11y/i18n

#### UX/UI Designer
- DONE:
  - Paletă + fonturi, componente shadcn de bază
- TODO:
  - Sistem de design (tokens), pattern-uri, animații, a11y în component library

#### Content & Copy
- DONE:
  - Mesaje `ro-RO` de bază (hero, CTA)
- TODO:
  - Microcopy formulare și mesaje de validare, ghid de stil

#### Localizare / i18n
- DONE:
  - next-intl (prefix locale), mesaje `ro-RO`, redirect `/` → `/ro-RO`
- TODO:
  - Formate RO, pluralizare, meta i18n, gard mesaje lipsă

#### Data & Analytics
- TODO:
  - Instrumentare evenimente UI, agregare în `Metric`, grafice pe 30 zile

#### Securitate
- DONE:
  - NextAuth (cred), validare zod la endpoints critice
- TODO:
  - rate-limit + captcha simplu la `/api/messages`, audit minim, igienă loguri

#### Accesibilitate
- TODO:
  - aria-label, focus vizibil, navigare tastatură, contrast WCAG AA, opțiuni „Text mare”/„Contrast ridicat”

#### SEO
- TODO:
  - meta/OG per pagină, canonical, sitemap, robots, schema.org

#### Suport & Comunitate
- DONE:
  - Pagina Contacte (formular WIP)
- TODO:
  - Formular public + inbox intern + răspuns email; rate-limit/captcha; empty/error states

#### Product Manager / Project Manager
- DONE:
  - Documente roluri, Overview, Changelog actualizat
- TODO:
  - Backlog/Roadmap în issues, AC pe feature, KPI map la evenimente

#### Tech Lead / Arhitect
- DONE:
  - Stack, module, convenții de bază
- TODO:
  - Feature flags pe module, politici de acces, guidelines performanță și a11y 