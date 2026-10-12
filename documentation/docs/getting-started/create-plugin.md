---
sidebar_position: 5
---
# Create your first plugin
:::note
A plugin created with Simply is a regular WordPress plugin that registers itself to the framework.
:::

## Plugin tree
```
your-plugin
├── config/           YAML or PHP configuration of the service container
├── src/              your classes, registered as services
└── your-plugin.php   WordPress entry point
```

## Register the plugin
```php title='web/content/plugins/your-plugin/your-plugin.php'
<?php
/*
Plugin Name: My custom plugin
Description: Description of my plugin
Author: John Doe
Version: 1.0
*/

Simply::registerPlugin(__DIR__, 'MyCustomPlugin');
```
With a namespace, the framework:
- registers every class of `src/` as a service, with autowiring and autoconfiguration;
- loads the configuration files of `config/` (every `*.yaml`, `*.yml` and `*.php` file, recursively);
- registers the hooks declared with `#[Action]` and `#[Filter]`, the controllers and the other features it understands.

Without a namespace, `src/` is not registered: only `config/` is loaded.

The plugin must be active, like any WordPress plugin.

### Autoload the classes
:::caution
The classes of `src/` must be autoloadable: if Composer cannot load them, the service container cannot be built and the whole site fails.
:::
Add the namespace to the `autoload.psr-4` section of the project `composer.json`:
```json title='composer.json'
{
    "autoload": {
        "psr-4": {
            "MyCustomPlugin\\": "web/content/plugins/your-plugin/src/"
        }
    }
}
```
then run `composer dump-autoload`.

## Create a plugin with the CLI
```bash
php bin/console simply:make:plugin
```
Answer the questions: the command creates `web/content/plugins/<slug>/` with `<slug>.php`, `config/` and `src/`, and prints the line to add to `composer.json`.

To load only some configuration directories without registering a whole plugin, use the `simply/config/directories` filter (see [service container](service-container.md)).
