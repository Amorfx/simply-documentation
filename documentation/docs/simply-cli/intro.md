# Use Simply CLI
The Simply boilerplate provides you a cli to save you time. It brings some pretty cool commands.

## Delete Cache
Delete all content of cache directory.
```bash
php bin/console simply:cache:clear
```

## Create Hook Class
If you don't want to use PHP attribute you can use this command to create a Class implement HookableInterface.
```bash
php bin/console simply:make:hook
```

## Create plugin boilerplate
```bash
php bin/console simply:make:plugin
```

## Create a custom post type
```bash
php bin/console simply:make:post-type
```

## Create a custom WP CLI command
Create a custom class extends `AbstractWordPressCommand` for WP CLI command.
```bash
php bin/console simply:make:wpclicommand
```

## Contribute
You can contribute (add some commands) [here](https://github.com/Amorfx/simply-maker).
