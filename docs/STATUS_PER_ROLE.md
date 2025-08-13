### Status pe roluri — TODO / DONE

Document de sincronizare rapidă pentru progres pe roluri. Actualizează la fiecare PR.

#### Frontend Engineer
- DONE:
  - Next.js + TypeScript (App Router), Tailwind 4, shadcn/ui (Button, Card, Input, Textarea, Dialog)
  - Branding (culori + fonturi), i18n `ro-RO` (next-intl: middleware + plugin + mesaje)
  - Pagini schelet: BrandKit, Bibliotecă media (dialog upload WIP), Șabloane (grilă demo + dialog Create), Calendar (formular client-side), Contacte, Analitice
  - CTA funcțional către rute locale
- TODO:
  - Animații subtile (framer-motion), stări empty/eroare/loading
  - SEO per pagină: meta/OG/structured data
  - Microsite public `/u/[username]` + componente QR și short links

#### Backend Engineer
- DONE:
  - Prisma: modele MVP + migrare inițială; scripturi DB (SQLite/Neon); health API
- TODO:
  - Rute API: `/api/brandkit`, `/api/assets`, `/api/templates`, `/api/posts` (+`/[id]`), `/api/page`, `/api/messages` (+`/inbox`), `/api/links`, `/api/pdf/catalog`, `/api/qr`
  - Validare cu zod, NextAuth + RBAC/tenant, rate-limiting la messages/links

#### Full‑stack Engineer
- DONE:
  - Integrare inițială i18n + Prisma + UI; fluxuri demo Templates/Calendar
- TODO:
  - NextAuth (email/parolă), UploadThing
  - Fluxuri end‑to‑end: BrandKit → Templates → Calendar → Microsite → Contacte → Analitice

#### DevOps / Platform
- DONE:
  - Git init + remote setat; `.env.example`; comutare SQLite/Neon; migrații și generate
- TODO:
  - CI (lint, Vitest, Playwright), seed automat, deploy Vercel, logs/monitorizare

#### QA / Testare
- TODO:
  - Vitest pentru utilitare/validatori zod
  - Playwright (onboarding → BrandKit → șablon → programare → reminder; microsite + mesaj; link scurt + click; QR scan)
  - Teste accesibilitate și localizare (ro‑RO)

#### UX/UI Designer
- DONE:
  - Paletă + fonturi, componente shadcn de bază
- TODO:
  - Sistem de design (spațieri, tokens), pattern-uri de interacțiune, animații, a11y în component library

#### Content & Copy
- DONE:
  - Mesaje `ro-RO` de bază (hero, CTA)
- TODO:
  - Microcopy și mesaje de validare clare, ghid de stil

#### Localizare / i18n
- DONE:
  - next-intl (prefix locale), mesaje `ro-RO`, redirect `/` → `/ro-RO`
- TODO:
  - Formate dată/număr RO, pluralizare, meta i18n, gard pentru mesaje lipsă

#### Data & Analytics
- TODO:
  - Instrumentare evenimente UI, agregare în `Metric`, grafice pe 30 zile

#### Securitate
- TODO:
  - NextAuth, validare input (zod), rate-limit + captcha simplu la `/api/messages`, audit minim, igienă loguri

#### Accesibilitate
- TODO:
  - aria-label la iconițe, focus vizibil, navigare tastatură, contrast WCAG AA, opțiuni „Text mare”/„Contrast ridicat”

#### SEO
- TODO:
  - meta/OG per pagină, canonical, sitemap, robots, schema.org

#### Suport & Comunitate
- DONE:
  - Pagina Contacte (formular WIP)
- TODO:
  - Formular public funcțional + inbox intern + răspuns email; rate-limit/captcha; empty/error states

#### Product Manager / Project Manager
- DONE:
  - Documente roluri, Overview, Changelog actualizat
- TODO:
  - Backlog/Roadmap în issues, AC pe feature, KPI map la evenimente

#### Tech Lead / Arhitect
- DONE:
  - Stack, module, convenții de bază
- TODO:
  - Feature flags pe module, politici de acces explicite, guidelines performanță și a11y 