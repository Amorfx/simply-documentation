---
sidebar_position: 8
---
# Cache and deployment
Simply compiles the service container and the Twig templates, and caches them. In production, nothing is checked for changes on each request: that is what makes the container fast.

## Where the cache lives
In `web/content/mu-plugins/simply-framework/cache/<fingerprint>/` (the `SIMPLY_CACHE_DIRECTORY` constant): `container.php` for the container, `twig/` for the templates.

The **fingerprint** identifies what the cache was built from:
- the installed Composer packages (versions and references);
- the configuration directories;
- the registered plugins and theme, and the Simply extensions;
- `WP_DEBUG`;
- the PHP version (`major.minor`): a container compiled with PHP 8.4 cannot be read by PHP 8.2.

When one of them changes, the next request builds a new cache in a new directory. Updating a package with Composer, switching theme or activating a Simply plugin rebuilds the cache automatically. Caches of other fingerprints are removed on the next rebuild once they have not been modified for an hour, so several contexts can live side by side (WP-CLI and the web server with different PHP versions, one theme per site on a multisite).

The cache is also cleared when a plugin is activated or deactivated.

## Deploying
With `APP_DEBUG=false` (`WP_DEBUG` false), files are never checked for changes. When you deploy changes that Composer does not see (your services, YAML configuration, Twig templates), clear the cache as part of the deployment:

```bash
php bin/console simply:cache:clear
```

Clearing is safe while the site is serving requests: the cache directories are renamed before being removed, and a request that loses its container rebuilds it.

With `APP_DEBUG=true`, the container is rebuilt when one of the files it was built from changes, and Twig templates are not cached. Keep `APP_DEBUG=false` in production.

## Permissions
The web server and the user running `bin/console` or `wp` must both be able to write in the cache directory. Run the commands as the web server user (see the [Docker environment](docker.md)).
