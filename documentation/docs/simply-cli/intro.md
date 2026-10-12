---
sidebar_position: 1
title: Simply CLI
---
# Use Simply CLI
The boilerplate provides `bin/console`, with the commands of [simply-maker](https://github.com/Amorfx/simply-maker) and of the Simply extensions.

```bash
php bin/console list simply
```

`bin/console` loads WordPress: the database must be reachable. With the [Docker environment](../getting-started/docker.md), run it in the container: `docker compose exec -u www-data web php bin/console ...`.

## Clear the cache
```bash
php bin/console simply:cache:clear
```
Run it when you deploy code changes that Composer does not see: see [cache and deployment](../getting-started/cache.md).

## Debug the hooks
```bash
php bin/console simply:debug:hook
php bin/console simply:debug:hook --hook_name=the_title
php bin/console simply:debug:hook --function_name=title
php bin/console simply:debug:hook --directory=my-plugin
```
Lists the registered WordPress hooks with, for each callback, its priority, its method or function, and its source file and line. Hooks declared with attributes are shown as `Class:method`, followed by the service id when it is not the class name.
- `--hook_name`: one hook. An unknown name lists every hook.
- `--function_name`: the callbacks whose method or function has this name.
- `--directory`: the callbacks whose source file is in a directory of this name.

## Generate code
| Command | Generates |
|---|---|
| `simply:make:plugin` | a [plugin](../getting-started/create-plugin.md): entry file, `config/`, `src/`, and prints the autoload line to add to `composer.json` |
| `simply:make:theme` | a [theme](../getting-started/create-theme.md): `functions.php`, `index.php`, `style.css`, `config/`, `src/`, `views/` |
| `simply:make:hook` | a [`HookableInterface` class](../wp-features/create-hook.mdx#with-hookableinterface) in `src/Hook/` and its YAML file |
| `simply:make:post-type` | a [post type](../wp-features/create-post-type.md) in `config/post-type/<slug>.yaml` |
| `simply:make:wpclicommand` | a [WP-CLI command](../wp-features/create-wp-cli-command.md) in `src/Command/` and its YAML file |
| `simply:make:controller` | a [controller](../advanced/mvc-pattern.md) in `src/Controller/` (with simply-mvc) |

The commands ask questions: answer them, or keep the default values between brackets.

## Contribute
You can add commands [in simply-maker](https://github.com/Amorfx/simply-maker). A Simply extension can also bring its own commands: every service extending Symfony's `Command` and named with `#[AsCommand]` is added to `bin/console`.
