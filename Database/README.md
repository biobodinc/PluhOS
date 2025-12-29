Postgres migrations & seeds (Knex)

Quick setup

1. Install dependencies:

```bash
cd Database
npm install
```

2. Configure Postgres connection: copy `.env.example` to `.env` and edit, or set `DATABASE_URL`.

3. Run migrations and seeds:

```bash
npm run migrate
npm run seed
```

Notes
- This uses `knex` with the `pg` driver.
- Seeds include a simple `bcrypt`-hashed password; ensure `bcrypt` is installed.
- If your app currently uses MySQL, update its DB configuration and queries to use Postgres-compatible SQL or use Knex/ORM for portability.
