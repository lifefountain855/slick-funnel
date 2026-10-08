# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

## SEO-ready production output

`npm run build` type-checks the app, builds the Vite assets, and pre-renders the routes in `src/seo/site.ts` into `dist/`. That route manifest supplies canonical URLs, page metadata, indexability, and meaningful content-modified dates to the router, prerenderer, and generated XML sitemap. Deploy the complete `dist/` directory.

The project includes `public/_redirects` rules for the previous no-trailing-slash URLs, the former `.html` aliases, `/audit`, the client-routed admin area, and unknown paths. This file format is supported by Netlify and Cloudflare Pages; on another host, configure equivalent permanent redirects, keep `/admin/*` routed to the app shell, and serve `404.html` with an actual 404 status before the SPA fallback. Do not send missing URLs to the homepage with a success status.

`public/robots.txt` advertises `https://slick.asappy.tech/sitemap.xml`, permits OAI-SearchBot, and disallows admin routes. Keep business identity, service coverage, email, and page claims consistent with visible site content. Do not add location/industry pages, reviews, schema, or results claims without real supporting information.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
