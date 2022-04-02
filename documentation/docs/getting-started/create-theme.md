---
sidebar_position: 4
title: Create your first theme
---
# Create your first theme using Simply
:::note
A Simply theme is only a WordPress theme with some filters.
:::
## Plugin Tree
With Simply you only must have a config directory if you want to use the Symfony dependency injection.
```
.
├── your-theme
│   ├── config
.   .
.   .
│   └── functions.php
└──
```
- `config`: add your yaml or php config files into this folder,
- `functions.php`: add some configuration code.

## Theme configuration
Simply look into some directories to load configuration file for the Symfony dependency injection.
In `function.php` you have to add some filters to add your config directory into the lists of configuration files.

But to automatize all the things (add class to service container, configure hooks) add only one line :

```php title='functions.php'
<?php

Simply::registerTheme(__DIR__, 'MyCustomTheme');
```
It informs the framework :
- that all classes into the namespace are services by default
- autoconfigure hooks classes, controllers and other WordPress features that Simply can understand
- add config directory to the list of directories for the service container
- add views directory to the list for TemplateEngineClass

## Create theme with the CLI
In your project directory
```bash
php bin/console simply:make:theme
```

Then respond to all the questions to finalize theme creation.
