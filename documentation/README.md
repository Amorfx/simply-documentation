# Simply documentation

Documentation of the Simply framework, built with [Docusaurus 3](https://docusaurus.io/) and published on https://amorfx.github.io/simply-documentation/.

Requirements: Node 20 or later and Yarn 1.

```bash
yarn install
yarn start   # local server with live reload
yarn build   # static site in build/, fails on broken links
```

Pushing to `main` builds the site and publishes it on GitHub Pages (`.github/workflows/deploy.yml`). Pull requests are built but not published.
