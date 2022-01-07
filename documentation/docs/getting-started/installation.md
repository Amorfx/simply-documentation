---
sidebar_position: 1
---
# Installation
Simply can be install like a WordPress plugin or via Composer. Even though simply is not really a plugin it can be installed as such.
Or if you don't install WordPress at all you can install it with [the boilerplate](https://github.com/Amorfx/simply).

The only tool you required is Composer.

## Install with the boilerplate (recommended)
Only one command is required to install a complete WordPress.
```bash
composer create-project clementdecou/simply your-project
```

The boilerplate does not just allow you to install a WordPress and the framework but brings some additional features:
- The use of .env files
- Management of WordPress, plugins and theme via Composer
- Add CLI to create some WordPress features (Hooks, plugins, themes...)

### Tree of your main project folder
```
.
├── your-project
│   ├── vendor
│   ├── wordpress
│   ├── composer.json
│   ├── composer.lock
│   └── README.md
└──
```

## You have a WordPress environment already installed
- [Download the latest release](https://github.com/Amorfx/simply-framework/releases) of the framework
- Unzip into your mu-plugins directory and rename the directory to "simply-framework"
- To load the framework create a PHP file at the root of mu-plugins directory

```php title='wp-content/mu-plugins/load.php'
<?php
/*
 * Plugin Name: Load Simply framework
 */
require __DIR__ . '/simply-framework/simply-framework.php';
```

Your mu-plugins folder should have a structure like this : 
```
.
├── mu-plugins
│   ├── simply-framework
│   └── load.php
└──
```

- Go into the simply-framework directory and exec `composer install`
- That's it :confetti_ball:

## Next
Now you need to [configure your WordPress](getting-started/config-wordpress.md).
