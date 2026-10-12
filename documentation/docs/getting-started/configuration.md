---
sidebar_position: 3
---
# Configuration (.env)
With the boilerplate, WordPress is configured in the `.env` file at the root of the project, not in `wp-config.php`. `config/application.php` reads it with [Symfony Dotenv](https://symfony.com/doc/current/configuration.html#configuring-environment-variables-in-env-files) and defines the WordPress constants.

`composer create-project` creates `.env` from `.env.example`:

```bash title='.env'
APP_ENV=dev
APP_DEBUG=true

WP_HOME=http://localhost:8080
WP_SITEURL=${WP_HOME}/wp

DB_NAME=wordpress
DB_USER=wordpress
DB_PASSWORD=wordpress
DB_HOST=127.0.0.1
DB_PREFIX=wp_
DB_CHARSET=utf8mb4

# Generate your keys here: https://roots.io/salts.html
AUTH_KEY='generateme'
# ...
```

## Variables

| Variable | Required | Default | Effect |
|---|---|---|---|
| `WP_HOME` | yes | | URL of the site, with its scheme (`https://example.com`). Also used to build `WP_CONTENT_URL`. |
| `WP_SITEURL` | | `WP_HOME/wp` | URL of the WordPress core, installed in `web/wp`. |
| `DB_NAME` | yes | | Database name. |
| `DB_USER` | yes | | Database user. |
| `DB_PASSWORD` | yes | | Database password. It can be empty (`DB_PASSWORD=`), but it must be defined. |
| `DB_HOST` | | `localhost` | Database host (`db` with the [Docker environment](docker.md)). |
| `DB_PREFIX` | yes | | Table prefix, usually `wp_`. |
| `DB_CHARSET` | | `utf8mb4` | Connection charset. |
| `APP_DEBUG` | | `false` | Boolean, defines `WP_DEBUG` (see below). |
| `APP_ENV` | | `dev` | Selects the extra `.env.*` files that are loaded (see below). |
| `DISABLE_WP_CRON` | | `false` | Boolean, disables the WordPress cron triggered by page loads (use a real cron instead). |
| `WP_POST_REVISIONS` | | `true` | `true` (keep every revision), `false` (none) or a number of revisions to keep. |
| `AUTH_KEY`, `SECURE_AUTH_KEY`, `LOGGED_IN_KEY`, `NONCE_KEY`, `AUTH_SALT`, `SECURE_AUTH_SALT`, `LOGGED_IN_SALT`, `NONCE_SALT` | | | Salts. Generate them at https://roots.io/salts.html (the [Docker setup script](docker.md) does it for you). |
| `WP_CACHE_KEY_SALT` | | | Prefix for the object cache keys. |

A missing required variable stops the request with an explicit `InvalidArgumentException`.

**Booleans** (`APP_DEBUG`, `DISABLE_WP_CRON`) accept `true`/`false`, `1`/`0`, `on`/`off` and `yes`/`no`.

## APP_DEBUG
`APP_DEBUG=true` defines `WP_DEBUG` as `true`, and changes the behaviour of Simply:
- the service container is still cached, but it is rebuilt when one of the files it was built from changes;
- Twig templates are not cached, and the Twig `dump()` function is available.

Keep `APP_DEBUG=false` in production. See [cache and deployment](cache.md).

## .env files
Symfony Dotenv loads, in this order: `.env`, `.env.local`, `.env.$APP_ENV` and `.env.$APP_ENV.local`. A file loaded later overrides the previous ones. `.env.*` files are ignored by git (except `.env.example`): use `.env.local` for values specific to a machine.

:::caution
`config/application.php` reads the variables loaded by Dotenv. A variable defined only in the server environment, and in no `.env*` file, is ignored.
:::

## Settings defined by the boilerplate
`config/application.php` also defines:
- `AUTOMATIC_UPDATER_DISABLED`, `DISALLOW_FILE_EDIT` and `DISALLOW_FILE_MODS`: WordPress, plugins and themes are managed with Composer, not from the admin;
- `CONTENT_DIR` (`/content`): the `wp-content` directory is `web/content`;
- `DB_COLLATE` (empty);
- `$_SERVER['HTTPS'] = 'on'` when the request comes through a proxy with `X-Forwarded-Proto: https`.

Change `config/application.php` only if you need another behaviour.
