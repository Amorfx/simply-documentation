---
sidebar_position: 5
title: Create a WP-CLI command
---
# Create a WP-CLI command
Simply registers [WP-CLI](https://wp-cli.org/) commands declared as services: run them with `wp <name>`.

:::note
These are WP-CLI commands (`wp ...`). The commands of `bin/console` are Symfony commands: see [the CLI](../simply-cli/intro.md).
:::

## The command class
Extend `Simply\Core\Command\AbstractWordPressCommand`:

```php title='src/Command/ImportProjects.php'
<?php

namespace MyPlugin\Command;

use Simply\Core\Command\AbstractWordPressCommand;

class ImportProjects extends AbstractWordPressCommand
{
    public static string $commandName = 'myplugin:import';

    /** Associative arguments that must be given (--file=...) */
    public static array $requiredArgs = ['file'];

    /**
     * @param array<int, string> $args
     * @param array<string, string> $assoc_args
     */
    public function execute(array $args, array $assoc_args): void
    {
        $this->confirm('Import ' . $assoc_args['file'] . '?', $assoc_args);
        // ...
        $this->showColorMessage('Done', '%g');
    }
}
```
- `$commandName`: the name given to `wp`.
- `$requiredArgs`: the associative arguments that must be given; the command stops with a message when one is missing.
- Helpers: `showColorMessage($message, $color)` (see [WP-CLI colors](https://make.wordpress.org/cli/handbook/references/internal-api/wp-cli-colorize/)), `confirm($question, $assoc_args)` and `runCommand($command, $options)`.

## Register the command
The `wp.command` tag is required: add it in a YAML file of a `config/` directory.

```yaml title='config/command/importprojects.yaml'
services:
  MyPlugin\Command\ImportProjects:
    autowire: true
    tags: ['wp.command']
```
:::caution
Keep `autowire: true`: this definition replaces the one Simply creates for the class of `src/`, and without it the dependencies of the constructor are not injected. A command that cannot be built breaks every `wp` command.
:::
Commands are registered on the `cli_init` action. Then:
```bash
wp myplugin:import --file=projects.csv
```

## With the CLI
```bash
php bin/console simply:make:wpclicommand
```
Answer the questions: the command creates the class in `src/Command/` and the YAML file in `config/command/`. Add `autowire: true` to the generated YAML file if the command has constructor dependencies.
