---
sidebar_position: 2
---

# Extended Simply Framework
By adding your own extension to Simply you can add your own features to the framework.

How it works ? Simply use the [Symfony Dependency Injection component](https://symfony.com/doc/current/components/dependency_injection.html) which is directly extensible.
It means : 
- You can add Container Extension
- You can add custom Compiler Pass
- You can add custom configuration to register services, parameters, tags etc.

:::note
To know more about the Symfony Dependency Injection component extension, you can read the [compiling section](https://symfony.com/doc/current/components/dependency_injection/compilation.html) of Symfony documentation.
:::
## Create your own extension
A full example of extension is available with the [Simply MVC Extension](https://github.com/Amorfx/simply-mvc).

### Create your extension class
Create a class which implements `Simply\Core\Contract\PluginInterface` and add the method `build` to register your container extension, compiler pass, services etc.

```php
class MyPlugin implements PluginInterface {
    public function build(ContainerBuilder $container): void {
        $extension = new MyExtension();
        $container->registerExtension($extension);
        $container->loadFromExtension($extension->getAlias());

        $container->addCompilerPass(...);
        // ...
    }
}
```

### Register your extension
To register your extension you have to call the method `Simply::registerSimplyPlugin` with your extension instance as parameter.

```php title="entrypoint.php"
Simply::registerSimplyPlugin(new MyPlugin());
```

And that's it ! Your extension is now registered into Simply.
