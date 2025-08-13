### Rol: DevOps / Platform

#### Scop
- Asigură medii reproductibile, CI/CD, securitate și observabilitate.


#### Medii & infrastructură
- Repositoriu Git, versionare semantică, protecție branch.
- Medii: local (SQLite), staging, producție (PostgreSQL); migrații și seed automat.

#### GIT

https://github.com/thisisfruitgtm/noova.git

#### POSTGRES SQL
PostgresSQL - psql 'postgresql://neondb_owner:npg_nt40LTmgcFbx@ep-old-frost-a9gr7rez-pooler.gwc.azure.neon.tech/neondb?sslmode=require&channel_binding=require'

#### Responsabilități
- Scripturi `dev/build/start`, compatibil Replit; `.env.example` complet.
- Bază de date: PostgreSQL prod, SQLite dev; migrații și seed automat.
- CI: lint, Vitest, Playwright headless; artefacte și previzualizări.
- Deploy pe Vercel/alt PaaS; monitorizare loguri/erori.

#### Deliverables
- Pipeline CI/CD, ghid de rulare, backup DB, rotație secrete.

#### KPI
- Rată reușită builduri, MTTR scăzut, timpul până la deploy.

#### Legături
- Changelog: [`../CHANGELOG.md`](../CHANGELOG.md)

