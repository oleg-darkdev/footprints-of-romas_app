The project is prepared for deployment to [Vercel](https://vercel.com/) and [Render](https://render.com/).

## Back-end stack

- [SvelteKIT](https://kit.svelte.dev/)
- [StrapiCMS](https://strapi.io/)
- [Postgresql](https://www.postgresql.org/)

```bash
# create a production version  of back-end app :
cd backend;

yarn build;
```

## Дзіўнасці

- калі падлучана вонкавая БД (на render) - правісанні пры запытах і можа вылятаць
- занадта часта **rest api** не рэагуе на get запыты (як на лакальнай BD, так і на ўзнешняй)
- можа вылятаць пры захаванне дадзеных з памылкай на серверы:
  **Error: select "t0".\* from "public"."strapi_core_store_settings" as "t0" where ("t0"."key" = $1 and "t0"."environment" is null and "t0"."tag" is null) limit $2 - Connection terminated unexpectedly**
- можа завісаць пры захаванне новай інфармацыі ў BD праз інтэрфейс StrapiCMS
