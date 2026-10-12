---
sidebar_position: 2
---
# Installation
Check the [requirements](requirements.md) first.

## Install with the boilerplate (recommended)
```bash
composer create-project clementdecou/simply my-project
```

The boilerplate installs WordPress, the framework and [simply-maker](../simply-cli/intro.md) with Composer, and brings:
- the configuration of WordPress in a `.env` file (see [configuration](configuration.md));
- WordPress, plugins and themes managed with Composer;
- `bin/console`, to generate code (plugins, themes, hooks...) and clear the cache;
- a [Docker development environment](docker.md).

Then:
1. edit `.env`: `WP_HOME` and the database settings at least;
2. point your web server to the `web/` directory, or start the [Docker environment](docker.md);
3. install WordPress from the browser or with WP-CLI (`wp core install`).

### Project structure
```
my-project
├── bin/console                       Simply commands
├── config
│   ├── application.php               WordPress configuration, read from .env
│   └── extensions.php                Simply extensions to load
├── docker/  compose.yaml             Docker development environment
├── vendor/
├── web                               document root
│   ├── wp/                           WordPress core (installed by Composer, not versioned)
│   ├── content
│   │   ├── mu-plugins
│   │   │   ├── load.php              loads the framework and the extensions
│   │   │   ├── simply-framework/
│   │   │   └── simply-maker/
│   │   ├── plugins/
│   │   ├── themes/
│   │   └── uploads/
│   ├── index.php
│   └── wp-config.php
├── .env  .env.example
├── composer.json  composer.lock
└── wp-cli.yml
```
- `config/application.php` turns the `.env` variables into WordPress constants. You should not need to modify it.
- `config/extensions.php` lists the Simply extensions to load, as paths relative to `web/content/mu-plugins/` (for example `/simply-maker/entrypoint.php`).
- `web/content/mu-plugins/load.php` loads the framework, then every extension listed in `config/extensions.php`.

## Install in an existing WordPress
Without the boilerplate, you get the framework only: no `.env` configuration, no `bin/console` nor code generators.

- [Download the latest release](https://github.com/Amorfx/simply-framework/releases) of the framework.
- Unzip it into your `mu-plugins` directory and rename the directory to `simply-framework`.
- Run `composer install` in the `simply-framework` directory: the framework loads its own `vendor/` when it exists.
- Create a PHP file at the root of the `mu-plugins` directory to load it:

```php title='wp-content/mu-plugins/load.php'
<?php
/*
 * Plugin Name: Load Simply framework
 */
require __DIR__ . '/simply-framework/simply-framework.php';
```

```
mu-plugins
├── simply-framework/
└── load.php
```

## Next
[Configure WordPress](configuration.md), then [create your first plugin](create-plugin.md).
