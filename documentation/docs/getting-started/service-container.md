---
sidebar_position: 7
---
# Service container
Simply brings the [Symfony dependency injection container](https://symfony.com/doc/current/components/dependency_injection.html) to WordPress. Read its documentation to make the most of it.

## Where services come from
- **The classes of `src/`** of the registered [plugins](create-plugin.md) and [theme](create-theme.md): every class is a service, autowired and autoconfigured. These services are **private**: inject them in other services.
- **The configuration directories**: the `config/` directory of the framework, of each registered plugin and of the registered theme. Every `*.yaml`, `*.yml` and `*.php` file is loaded, recursively. A PHP file must return a [configurator](https://symfony.com/doc/current/service_container.html#explicitly-configuring-services-and-arguments).

Add other configuration directories with a filter:
```php
add_filter('simply/config/directories', function (array $directories): array {
    $directories[] = __DIR__ . '/config';
    return $directories;
});
```

## Get a service
Prefer constructor injection. Outside of services, `Simply::get($id)` returns a **public** service, and `Simply::getContainer()` returns the container.

```php
$templateEngine = Simply::get('framework.template_engine');
```

## Autoconfiguration
- A class implementing `Simply\Core\Contract\HookableInterface` gets the `wp.hook` tag (see [hooks](../wp-features/create-hook.mdx)).
- A class implementing `Symfony\Contracts\Service\ServiceSubscriberInterface` gets the `container.service_subscriber` tag.

## When the container is built
The container is built on the `after_setup_theme` action. The `simply/core/after_bootstrap` action is triggered once the framework is ready.

The `kernel.debug` parameter is the value of `WP_DEBUG`.

The container is compiled and cached: see [cache and deployment](cache.md).

## Container extensions
Symfony extensions (post types, taxonomies, navigation menus) can be replaced or completed with the `simply/config/container_extensions` filter. To add your own extension, see [extend Simply](../advanced/extended-simply.md).
