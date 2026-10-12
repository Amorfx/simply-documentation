---
sidebar_position: 6
title: Create your first theme
---
# Create your first theme using Simply
:::note
A Simply theme is a regular WordPress theme that registers itself to the framework.
:::

## Theme tree
```
your-theme
├── config/          YAML or PHP configuration of the service container
├── src/             your classes, registered as services
├── views/           Twig templates
├── functions.php
├── index.php
└── style.css
```

## Register the theme
```php title='functions.php'
<?php

Simply::registerTheme(__DIR__, 'MyCustomTheme');
```
Like a [plugin](create-plugin.md), the framework then registers the classes of `src/` as services, loads `config/` and registers the hooks. In addition, `views/` becomes the default directory of the [Twig templates](../views/use-twig.md).

Only one theme can be registered.

The classes of `src/` must be autoloadable: add `"MyCustomTheme\\": "web/content/themes/your-theme/src/"` to the `autoload.psr-4` section of the project `composer.json`, then run `composer dump-autoload`.

## Create a theme with the CLI
```bash
php bin/console simply:make:theme
```
Answer the questions: the command creates the theme above in `web/content/themes/<slug>/`. It does not print the autoload line: add it as explained above.
