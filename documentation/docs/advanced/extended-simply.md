---
sidebar_position: 2
---

# Extend Simply
Simply relies on the [Symfony DependencyInjection component](https://symfony.com/doc/current/components/dependency_injection.html), which is extensible. An extension can:
- register a container extension, with its own configuration;
- add compiler passes;
- register services, parameters and tags.

:::note
Read the [compiling section](https://symfony.com/doc/current/components/dependency_injection/compilation.html) of the Symfony documentation to know more.
:::

A complete example is [simply-mvc](https://github.com/Amorfx/simply-mvc).

## Create your extension class
Implement `Simply\Core\Contract\PluginInterface`, and register what you need in `build()`:

```php
<?php

namespace MyExtension;

use Simply\Core\Contract\PluginInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;

class MyExtensionPlugin implements PluginInterface
{
    public function build(ContainerBuilder $container): void
    {
        $extension = new MyContainerExtension();
        $container->registerExtension($extension);
        $container->loadFromExtension($extension->getAlias());

        $container->addCompilerPass(new MyCompilerPass());
    }
}
```
With Symfony 7.4, a configuration class declares `getConfigTreeBuilder(): TreeBuilder`, and an extension `load(array $configs, ContainerBuilder $container): void`.

## Register your extension
Call `Simply::registerSimplyPlugin()` before the framework builds its container (on `after_setup_theme`):

```php title="entrypoint.php"
<?php

Simply::registerSimplyPlugin(new MyExtension\MyExtensionPlugin());
```
With the boilerplate, add the entry point to `config/extensions.php`, as a path relative to `web/content/mu-plugins/`:
```php title="config/extensions.php"
<?php

return [
    '/simply-maker/entrypoint.php',
    '/my-extension/entrypoint.php',
];
```
Adding an extension changes the [cache fingerprint](../getting-started/cache.md): the container is rebuilt.

To replace or complete the container extensions of the framework (post types, taxonomies, navigation menus), use the `simply/config/container_extensions` filter.
