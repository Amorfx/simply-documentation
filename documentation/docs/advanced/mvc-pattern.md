---
sidebar_position: 1
---
# Use MVC pattern
With model and View (with template engine) all that's missing is the controller.
Simply, [because of its philosophy](intro.md#philosophy), does not directly allow you to use the pattern.
But an extension has been created in order to have the magic of the Symfony controller in Simply.

## Install the extension

### Using Composer
```bash title="Into your project main directory"
composer require clementdecou/simply-mvc
```

### Manually
- Unzip into your mu-plugins directory and rename the directory to "simply-mvc"

## Load the extension with boilerplate
To load the extension go to the extension.php file and add the following code `/simply-mvc/entrypoint.php` :
```php title='/config/extensions.php'
<?php
/**
 * This file return an array of Simply plugin to extend the framework.
 * It is not a file to load WordPress plugins.
 * See how install WordPress plugin with composer if you want to do that
 */
return [
    '/simply-maker/entrypoint.php',
    '/simply-mvc/entrypoint.php',
];
```
## Load the extension without boilerplate (not recommended)
To load the extension modify your muplugin load file :
```php title='wp-content/mu-plugins/load.php'{6}
<?php
/*
 * Plugin Name: Load Simply framework
 */
require __DIR__ . '/simply-framework/simply-framework.php';
require __DIR__ . '/simply-mvc/entrypoint.php';
```

And that's it the extension will be loaded !

## MVC with example
Let's explain how routes work with one more example.
We have our projects post type. But i want to develop the project page (single-project.php int a WordPress theme) using the MVC pattern. So i want a `ProjectController` and a `single-project.html.twig` view. 

### Create your Controller
To auto register a Controller let's create a `ProjectController.php` into our `src` directory of your plugin and extends the `AbstractController` to have directly twig injected.
And add a `single` method. It will be main entrypoint for a single project page.
```php title='your-plugin/src/Controller/ProjectController'
<?php
namespace MyPlugin;

use Simply\Mvc\Controller\AbstractController;

class ProjectController extends AbstractController {
    public function single() {
    }
}
```

### Create your first Route
:::note
Routing in Simply MVC use the WordPress template hierarchy. Added Route with custom url is impossible because of the philosophy of the framework.
Read the documention of WordPress template hierarchy to understand. So [read the full WordPress documentation about the template hierarchy to understant routing with Simply](https://developer.wordpress.org/themes/basics/template-hierarchy/).
All possible routes are all possible template-hierarchy.
:::

We want a route for `single project page`. To correspond of the template hierarchy we see that in theme we normally use `single-project.php` template file. But here, with Simply, the route corresponding of the hierarchy is `single-project`. So let's apply it into our file.
```php title='your-plugin/src/Controller/ProjectController' {8}
<?php
namespace MyPlugin;

use Simply\Mvc\Attribute\Route;
use Simply\Mvc\Controller\AbstractController;

class ProjectController extends AbstractController {
    #[Route('single-project')]
    public function single() {

    }
}
```

### Argument Resolver
Simply add argument resolver into its Controller. It's like [Symfony argument resolver](https://symfony.com/doc/current/controller/argument_value_resolver.html).
- Passing Service into method arguments
- Passing Request object into arguments
- And more coming soon (like directly models etc.)

### Return Response and render view
Back to our example. We have a controller and the route. So let's return a response. For example a simple JSON.
```php title='your-plugin/src/Controller/ProjectController' {11}
<?php
namespace MyPlugin;

use Simply\Mvc\Attribute\Route;
use Simply\Mvc\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

class ProjectController extends AbstractController {
    #[Route('single-project')]
    public function single() {
        return new JsonResponse(array('a project'));
    }
}
```

Or a twig template
```php title='your-plugin/src/Controller/ProjectController' {13-15}
<?php
namespace MyPlugin;

use Simply\Core\Query\SimplyQuery;
use Simply\Mvc\Attribute\Route;
use Simply\Mvc\Controller\AbstractController;
use Simply\Mvc\Request;

class ProjectController extends AbstractController {
    #[Route('single-project')]
    public function single(Request $request) {
        // Do your thing with $request
        $this->renderView('single/project.html.twig', [
            'project' => SimplyQuery::getCurrentObject()
            // ...
        ]);
    }
}
```
And that's it. You add MVC pattern into your WordPress project without theme templating !

## Advanced
### Route attribute
Route attribute has several arguments : 
- `wpCondition` : it's the main condition of your route, see [Template hierarchy section](#create-your-first-route)
- `methods` : HTTP method condition of your route (default is array with `GET` and `POST`)
- `customCondition` : php function called to add condition of your route. Example you want a route only if a post has a meta with specific value.

### Register your controller without extends AbstractController
If you don't want to extends AbstractController you can register your controller by add your class into the service container with `simply.controller` tag.
