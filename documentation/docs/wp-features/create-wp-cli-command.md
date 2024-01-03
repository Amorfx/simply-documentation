---
sidebar_position: 5
title: Create a custom WP CLI command
---
# Create a custom WP CLI command
You can create a WP CLI command using [`WP_CLI::add_command`](https://make.wordpress.org/cli/handbook/commands-cookbook/#registering-a-command) function.
Simply also allows you to directly configure your commands by create a class extends AbstractWPCliCommand like this :
```php title='app/Commands/MyCommand.php'
<?php
use Simply\Core\Command\AbstractWordPressCommand;

class MyCommand extends AbstractWordPressCommand {
    static $commandName = 'app:mycommand';
    public function execute($args, $assoc_args) {
        // ...
    }
}
```
And add the tag `wp.command` to your class in `config/command/mycommand.yaml` file :
```yml title='config/commands.yaml'
services:
  Namespace\MyCommand:
    tags: ['wp.command']
```

## Using CLI
```bash
php bin/console simply:make:wpclicommand
```
