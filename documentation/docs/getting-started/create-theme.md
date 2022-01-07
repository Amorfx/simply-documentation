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

```php title='function.php'
<?php

add_filter('simply_config_directories', function($arrayDirectories) {
    $arrayDirectories[] = __DIR__ . '/config';
    return $arrayDirectories;
});
```

## Create theme with the CLI
Coming soon.
