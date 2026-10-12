---
sidebar_position: 4
---
# Docker development environment
The boilerplate ships a development environment: PHP 8.4 with Apache, MariaDB 11.4 and WP-CLI.

## Start
In `.env`, set:
```bash title='.env'
WP_HOME=http://localhost:8080
DB_HOST=db
```
The database is created with the `DB_NAME`, `DB_USER` and `DB_PASSWORD` of `.env`.

Then:
```bash
docker compose up -d --build
docker compose exec -u www-data web bash docker/setup.sh
```
`docker/setup.sh` replaces the placeholder salts, runs `composer install`, installs WordPress (admin account `admin`/`admin`) and sets pretty permalinks. It is safe to run again. The site is on http://localhost:8080.

## Run commands
Run the commands in the container, as `www-data`, so that the files they create belong to you:
```bash
docker compose exec -u www-data web php bin/console list simply
docker compose exec -u www-data web wp plugin list
```
With `DB_HOST=db`, `bin/console` and `wp` can only reach the database from the container.

## Settings
As environment variables or in `.env`:
- `HTTP_PORT`: port of the site (default `8080`);
- `PHP_VERSION`: `8.2`, `8.3` or `8.4` (default), then `docker compose up -d --build`;
- `USER_ID` / `GROUP_ID`: on Linux, your uid/gid when they are not 1000 (`id -u`, `id -g`). Apache runs with them, so that it can write in the project.

Compose reads only `.env`, not `.env.local`: keep the `DB_*` values there.

## Reset
```bash
docker compose down -v
```
removes the containers and the database. Do it after changing the database credentials in `.env`, otherwise `setup.sh` cannot connect.

## Limits
- The site is only reachable from your machine (`127.0.0.1`), with an `admin`/`admin` account and errors displayed: this environment is for development only.
- On macOS, two PHP requests rebuilding the Simply cache at the very same time can fail once: reload the page.
