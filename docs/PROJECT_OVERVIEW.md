### Project Overview — Noova

Document viu pentru viziune, arie funcțională și schimbări de feature‑uri. Actual pentru produsul „Noova” — instrument all‑in‑one de marketing (SaaS) pentru creatori/meșteșugari români non‑digitali, cu roluri distincte: Administrator platformă, Manager platformă, Meșteșugar (proprietar cont), Agenție de marketing (delegat).

#### Scop & viziune
- Nu este marketplace. Orice vizualizare publică este doar microsite personal (opțional). Un director public poate exista ulterior, dar implicit este dezactivat.
- Obiectiv: să facă extrem de simplă gestionarea brandului, conținutului, postărilor, materialelor tipărite, campaniilor sezoniere și contactelor — integral în limba română.

#### Model SaaS, roluri & permisiuni
- Administrator platformă
  - Activează/dezactivează module pe fiecare tenant (meșteșugar) și la nivel global (feature flags)
  - Creează/editează module noi, gestionează librării globale (șabloane, campanii, ghiduri)
  - Moderare conținut (opțional), management utilizatori, rate‑limits, audit log, integrări
- Manager platformă
  - Operare zilnică: suport, aprobare șabloane, curare campanii, conținut educațional
  - Fără acces la setări critice (chei, billing); poate administra module conform politicilor
- Meșteșugar (proprietar cont/tenant)
  - BrandKit, Bibliotecă media, Șabloane (copii personale), Calendar, Microsite, Contacte, Analitice, Linkuri/QR, Catalog PDF, setări cont
  - Poate invita/delega Agenții sau Colaboratori cu permisiuni limitate
- Agenție de marketing (delegat)
  - Acces la workspace‑ul meșteșugarului pe bază de invitație; poate crea șabloane, programa postări, gestiona microsite‑ul, vede analitice
  - Fără drept de ștergere cont/tenant, fără acces la plan/billing; multi‑client switching
- Tenancy & securitate
  - Date izolate pe tenant (scop la nivel de `userId/tenantId`), RBAC pe resursă
  - Feature flags și module toggling per tenant; politici de acces explicite pe API/UI

#### Stack (pe scurt)
- Next.js (App Router) + TypeScript
- Tailwind CSS + shadcn/ui (global CSS) + framer-motion + lucide-react
- Prisma ORM + PostgreSQL (SQLite în dev)
- NextAuth (email+parolă; Google opțional)
- UploadThing (upload imagini; alternativă locală în dev)
- next-intl (implicit `ro-RO`)
- Multi‑tenant + RBAC (feature flags pe modul, izolarea datelor pe tenant)
- Panou de administrare: activare/dezactivare module pe tenant, gestionare librării (șabloane/campanii/ghiduri), guvernanță (rate‑limits, audit)

#### Branding & accesibilitate
- Culori: Primar `#8B4513`, Secundar `#D2691E`, Accent `#228B22`, Background `#FAF0E6`, Text `#2F4F4F`, Highlights `#CD853F`
- Fonturi: Montserrat (titluri), Open Sans (text)
- Estetică: card‑based grid, cald/artizanal, mobile‑first, animații subtile
- Accesibilitate: contrast WCAG AA, focus vizibil, aria‑label pentru iconițe, mod „Text mare” și „Contrast ridicat”
- Toată interfața, textele și validările în limba română (diacritice corecte)

#### Fluxuri cheie (ghidate pas cu pas)
1) Onboarding asistat (wizard) → „Setează‑ți trusa de brand”: logo, culori, font, ton, oraș/județ, tip de meșteșug, linkuri.
2) Planificator de conținut (Calendar) → adaugă idei, șabloane, remindere, programări.
3) Designer de postări & materiale tipărite → selectezi șablon, introduci text/poze, export PNG/PDF.
4) Microsite + Link‑in‑bio (opțional) → pagină simplă cu bio, butoane contact, galerie, linkuri.
5) Contact Hub → formular public „Contactează‑mă” + trimitere email + inbox intern.
6) Analitice simplificate → vizualizări microsite, click‑uri pe link‑uri, scanări QR, descărcări PDF.
7) Campanii sezoniere (RO) → seturi de șabloane și checklist pentru: Mărțișor, Paște, 1 Iunie, Black Friday, Crăciun.

#### Catalog de feature‑uri (editabil)
- [ ] Onboarding wizard „Trusa de brand”
- [ ] Trusă de brand (BrandKit) cu previzualizare live
- [ ] Bibliotecă media cu foldere, tag‑uri și căutare
- [ ] Șabloane pentru social/print/campanii cu texte preumplute în română
- [ ] Calendar & programare postări (publicare automată sau reminder email)
- [ ] Microsite public opțional + Link‑in‑bio + generator QR
- [ ] Generator materiale tipărite + Catalog PDF din produse „lite”
- [ ] Contact Hub (formular public, inbox intern)
- [ ] Analitice simplificate pe 30 zile (vizite, clickuri, scanări, descărcări)
- [ ] Pachete de campanii sezoniere (RO) cu checklist și „Adaugă în calendar”
- [ ] Educație & Checklist (mini‑ghiduri, checklist săptămânal)
- [ ] Director public (opțional, dezactivat implicit) — doar ca listă de microsite‑uri

#### Module & cerințe
A) Trusă de brand (BrandKit)
- Câmpuri: nume atelier, logo, paletă (culorile date), font preferat, ton, descriere scurtă, oraș/județ, meșteșuguri, specializări, linkuri (Instagram, Facebook, WhatsApp, site)
- UI: formular mare, previzualizare live, buton „Salvează trusa”

B) Bibliotecă media (Asset Library)
- Foldere: „Foto produse”, „Logo & elemente”, „Materiale tipărite”
- Suport drag&drop, tag‑uri, căutare

C) Șabloane (Templates)
- Social: pătrat, story, portret, landscape
- Print: flyer A5, poster A4, card de vizită, etichetă preț
- Conținut: anunț târg, lansare serie nouă, reducere sezonieră
- Populat cu texte default în română; variabile: `{{numeAtelier}}`, `{{oras}}`, `{{contact}}`, `{{link}}`

D) Calendar & Programare
- Creare „post”: titlu, canal (Instagram/Facebook/TikTok*), data/ora, imagini, text, hashtaguri
- Opțiuni: „Publică automat” (dacă API disponibil) sau „Trimite‑mi remindere pe email”
- Vizualizări: lună/săptămână/listă; carduri colorate după canal

E) Microsite & Link‑in‑bio
- URL `/u/[username]` (public), control vizibilitate (toggle)
- Blocuri: bio, butoane, galerie 12 imagini, secțiune „Solicită ofertă”
- Generator QR către microsite; stil în culorile brandului

F) Generator material tipărit & Catalog PDF
- Selectezi șablon → editezi text/imagine → export PDF
- Catalog PDF: generează din `ProductLite` (titlu, preț, descriere, foto) + copertă brand

G) Contact Hub
- Rute: `/contact` → trimite mesaj intern + email
- Inbox simplu: listă mesaje, filtrare „necitite”, răspuns rapid (email)

H) Analitice „pe înțelesul tuturor”
- Carduri: „Vizite microsite”, „Click pe WhatsApp”, „Scanări QR”, „Descărcări PDF”
- Grafic simplu pe 30 zile; explicații plain‑language

I) Pachete Campanii
- Galerie campanii (Mărțișor, Paște, 1 Iunie, Black Friday, Crăciun) cu șabloane preumplute și checklist
- Buton „Adaugă în calendar” pentru fiecare activitate

J) Educație & Checklist
- Secțiune „Învățare rapidă”: 10 mini‑ghiduri (ex: „Cum fac poze bune cu telefonul”, „Cum scriu o descriere scurtă”)
- Checklist săptămânal imprimabil

#### Out‑of‑scope (intenționat)
- Coș de cumpărături, plăți, comenzi. (Nu marketplace.)

#### API (referință scurtă)
- `/api/brandkit` [GET, PATCH]
- `/api/assets` [GET, POST, DELETE]
- `/api/templates` [GET] (seed + custom)
- `/api/posts` [GET paginate + filtre, POST create]
- `/api/posts/[id]` [GET, PATCH, DELETE]
- `/api/page` [GET, PATCH, POST publish]
- `/api/messages` [POST], `/api/messages/inbox` [GET]
- `/api/links` [POST create short link], `/r/[slug]` (redirect + increment click)
- `/api/pdf/catalog` [POST] → return PDF
- `/api/qr` [POST] → return PNG/SVG
- Validare cu zod; protecție rate limit pe `/api/messages`, `/api/links`

#### Modelare date (Prisma)
- `User(id, email, name, role['CRAFTER'], city, county, brandKitId?, username, socials{instagram, facebook, whatsapp, website}, createdAt)`
- `BrandKit(id, userId, logoUrl, colors{primary,secondary,accent,bg,text,hi}, fontHeadings, fontBody, bio, crafts string[], specialties string[])`
- `Asset(id, userId, url, kind['image'|'pdf'], tags string[], createdAt)`
- `Template(id, kind['social'|'print'|'campaign'], title, contentJSON, size, variables string[])`
- `Post(id, userId, title, channel['instagram'|'facebook'|'tiktok'|'manual'], images string[], caption, hashtags string[], scheduledAt, status['draft'|'scheduled'|'sent'], createdAt)`
- `Page(id, userId, slug, published bool, blocks JSON)`
- `Message(id, userId, fromEmail, name, subject, body, createdAt, readAt)`
- `Link(id, userId, slug, targetUrl, clicks int, createdAt)`
- `Metric(id, userId, kind, value int, date)`
- `ProductLite(id, userId, title, price, currency, description, imageUrl)`

#### UI navigație & texte (ro)
- Navbar: „Calendar”, „Șabloane”, „Bibliotecă”, „Microsite”, „Contacte”, „Analitice”
- CTA: „Creează material”, „Programează postare”
- Empty states: „Nu ai încă imagini în Bibliotecă. Încarcă primele poze ale creațiilor tale.”
- Exemple: Hero „Tot marketingul tău, într‑un singur loc.”; Butoane „Încarcă imagini”, „Generează QR”, „Exportă PDF”, „Adaugă în calendar”, „Trimite reminder”
- Etichete: „Tip de craft”, „Specializare”, „Oraș”, „Programare”
- Validări clare: „Te rugăm să adaugi o imagine cu produsul.”

#### Accesibilitate & Simplitate
- Limbaj simplu; explicații sub fiecare câmp („De ce îți cerem asta?”)
- Tooltips cu exemple concrete în română
- Mod „Text mare” + „Contrast ridicat” în setări
- Buton „Ajutor” cu tutoriale scurte (video/gif)

#### Seed data (română)
- 6 meșteșugari demo din zone din Regiunea Iași
- 18 șabloane sociale + 6 șabloane print + 4 campanii sezoniere
- 20 imagini demo (Unsplash) etichetate

#### Testare & calitate
- Validatori zod cu mesaje în ro‑RO
- Vitest pentru utilitare
- Playwright pentru flow: onboarding → trusă brand → creează șablon → programează → primește reminder
- ESLint + Prettier configurate

#### KPI produs
- Timp până la finalizarea onboarding‑ului; număr postări programate; click‑uri pe link‑in‑bio; descărcări PDF; scanări QR; mesaje primite

#### Constrângeri / Non‑obiective
- Fără plăți/comenzi în MVP; fără marketplace. Directorul public e opțional și dezactivat implicit.

#### Backlog (editabil)
- [Idee] Integrare autentificare Google (opțional)
- [Idee] Export CSV al postărilor și link‑urilor
- [Idee] Pagină „Cum funcționează” pentru începători
- [Idee] Integrare publicare automată Instagram/Facebook (dacă API‑urile permit)

#### Roadmap (editabil)
- T1: MVP — BrandKit, Bibliotecă, Șabloane, Calendar, Microsite (opțional), Contact Hub, Analitice simple
- T2: Pachete campanii, Educație & Checklist, Catalog PDF, QR & link tracking avansat
- T3: Director public (opțional), extensii de automatizare, integrări suplimentare

#### Cum propui sau modifici un feature
1) Creează o intrare în „Backlog” folosind șablonul de mai jos.
2) Aliniază cu PM/Tech Lead; atașează acceptance criteria și designuri.
3) Marcheză în „Roadmap” sprintul/trimesterul țintă.
4) Descompune în taskuri (UI/API/DB/Teste) și deschide PR‑uri mici.

Șablon feature (copy/paste):
```
Titlu: <scurt și la obiect>
Context/Problemă: <de ce>
Propunere: <ce livrăm>
Scope: <in/out>
UX/UI: <schițe/flow-uri; link Figma dacă există>
API/Back-end: <rute, zod, prisma>
Date/Model: <schema și migrații>
A11y/i18n/SEO: <considerații>
Acceptare (AC): <liste clare>
Măsurare: <KPI/telemetrie>
Riscuri/Rollout: <toggle, migrare, fallback>
```

#### Artefacte conexe
- Roluri & documente: [`00-ROLURI-SI-DOCUMENTE.md`](./00-ROLURI-SI-DOCUMENTE.md)
- Reguli Cursor: [`.cursor/rules.md`](../.cursor/rules.md)
- Changelog: [`../CHANGELOG.md`](../CHANGELOG.md)

