---
sidebar_position: 3
---
# Create your first plugin
:::note
A plugin created with Simply is only a WordPress plugin with some filters.
:::

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

## Plugin entrypoint configuration
Simply look into some directories to load configuration file for the Symfony dependency injection.
In `your-plugin.php` you have to add some filters to add your config directory into the lists of configuration files.

But to automatize all the things (add class to service container, configure hooks) add only one line :

```php title='plugins/your-plugin/your-plugin.php'
<?php
/*
Plugin Name: My custom plugin
Description: Description of my plugin
Author: John Doe
Version: 1.0
*/

// require your autoload here

Simply::registerPlugin(__DIR__, 'MyCustomPlugin');
```
It informs the framework :
- that all classes into the namespace are services by default
- autoconfigure hooks classes, controllers and other WordPress features that Simply can understand
- add config directory to the list of directories for the service container

## Create plugin with the CLI
In your project directory
```bash
php bin/console simply:make:plugin
```

Then respond to all the questions to finalize plugin creation.
