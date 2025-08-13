### Reguli Cursor — Noova

#### Principii
- Optimizează pentru claritate, simplitate, consistență. Copy, UI și cod în română unde e relevant.
- Preferă PR-uri mici, autonome, cu review rapid.

#### Flux de lucru
- Branch: `feat/<scop-scurt>` / `fix/<problema>` / `chore/<task>`
- Commit: `type(scope): descriere la imperativ` (ex: `feat(api): filtre preț pentru /api/products`)
- PR: checklist UI (stări focus, empty, erori), i18n, accesibilitate, teste trecute.
- După merge: actualizează `CHANGELOG.md`.

#### Practici de editare
- Respectă stilul: TypeScript strict, nume explicite, early return, erori tratate util.
- Nu re-formata codul în afara dif-ului. Păstrează indentarea existentă.
- UI: Tailwind + shadcn/ui, paleta și fonturile obligatorii, animații subtile.

#### Testare & calitate
- Rulează local: lint, unit (Vitest), e2e (Playwright) pentru flow critic.
- Adaugă teste minime pentru utilitare și validatori zod.

#### Securitate & date
- Protejează rutele API cu middleware și NextAuth. Validează input cu zod.
- Rate limiting la mesaje/contact; captcha simplu la formular.
- Evită date sensibile în loguri; folosește `.env` și `.env.example`.

#### Review checklist (scurt)
- UX: copy în ro-RO, stări empty/încărcare/eroare, focus vizibil.
- A11y: aria-label la iconițe, contrast WCAG AA, navigare tastatură.
- i18n: toate textele prin next-intl (locale `ro-RO`).
- Performanță: imagini optimizate, încărcări progresive, paginare.

#### Documente (sursă de adevăr)
- Project Overview: `docs/PROJECT_OVERVIEW.md`
- Roluri & documente: `docs/00-ROLURI-SI-DOCUMENTE.md`
- Changelog: `CHANGELOG.md`

#### Cum folosim documentele în lucru
- Înainte de cod: verifică `PROJECT_OVERVIEW.md` (scope, module, API, date, KPI) și rolul implicat din `ROLE_*.md`.
- Dacă schimbi comportament/flux/API/UI: actualizează documentele în același PR.
- Dacă introduci rol/funcție nouă: adaugă `ROLE_*.md` și indexează în `00-ROLURI-SI-DOCUMENTE.md`.

#### Module canonice (din Overview)
- BrandKit, Bibliotecă media, Șabloane, Calendar & programare, Microsite (+ Link‑in‑bio + QR), Contact Hub, Analitice, Linkuri scurte & tracking, Catalog PDF.

#### API canonice (din Overview)
- `/api/brandkit`, `/api/assets`, `/api/templates`, `/api/posts`, `/api/posts/[id]`, `/api/page`, `/api/messages`, `/api/messages/inbox`, `/api/links`, `/api/pdf/catalog`, `/api/qr`.

#### PR checklist (extins)
- [ ] Teste: lint, unit (Vitest), e2e (Playwright) pe flow critic
- [ ] UX/A11y/i18n: stări empty/încărcare/eroare, focus vizibil, `next-intl` (ro‑RO)
- [ ] Docs: `PROJECT_OVERVIEW.md` actualizat (Backlog/Roadmap/API/Date dacă e cazul)
- [ ] Docs: roluri afectate (`ROLE_*.md`) și index `00-ROLURI-SI-DOCUMENTE.md` (dacă apar noi roluri)
- [ ] `CHANGELOG.md` actualizat

#### Denumiri & copy
- Denumiri module/rute/entități conform `PROJECT_OVERVIEW.md`.
- Toate textele prin `next-intl` (locale implicit `ro-RO`), copy aliniat cu `ROLE_Content_Copywriter.md` și `ROLE_Localizare_i18n.md`.

