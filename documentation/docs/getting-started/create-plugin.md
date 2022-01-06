---
sidebar_position: 3
---
# Create your first plugin
> A Simply plugin is only a WordPress plugin with some filters.

You have two possibilities to create a plugin with Simply : 
- Register directly all the plugin to Simply and autoconfigure all files to services, hook, controller etc.
- Register only specifics files to simply with WordPress filters

## Plugin Tree
With Simply you only must have a config directory and a src directory if you want to use the Symfony dependency injection.
```
.
├── your-plugin
│   ├── config
│   ├── src
│   └── your-plugin.php
└──
```
- `config`: add your yaml files into this folder,
- `src`: add your other files for your plugin
- `your-plugin.php`: add some configuration code.

## Register your plugin to Simply and autoconfigure it



## Plugin entrypoint configuration
Simply look into some directories to load configuration file for the Symfony dependency injection.
In `your-plugin.php` you have to add some filters to add your config directory into the lists of configuration files.

```php title='plugins/your-plugin/your-plugin.php'
<?php

add_filter('simply_config_directories', function($arrayDirectories) {
    $arrayDirectories[] = __DIR__ . '/config';
    return $arrayDirectories;
});
```

## Create plugin with the Console
Coming soon.
