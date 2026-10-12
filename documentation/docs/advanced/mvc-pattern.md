---
sidebar_position: 1
---
# Use the MVC pattern
With [models](../models/create-model.md) and [views](../views/use-twig.md), the missing piece is the controller. Simply, [because of its philosophy](../intro.md#philosophy), does not impose it: the [simply-mvc](https://github.com/Amorfx/simply-mvc) extension brings Symfony-like controllers to WordPress.

## Install the extension
```bash title="In the project directory"
composer require clementdecou/simply-mvc
```
It is installed in `web/content/mu-plugins/simply-mvc`. Load it in `config/extensions.php`:
```php title='config/extensions.php'
<?php

return [
    '/simply-maker/entrypoint.php',
    '/simply-mvc/entrypoint.php',
];
```

Without the boilerplate, require its entry point in your mu-plugin loader, after the framework:
```php title='wp-content/mu-plugins/load.php'
<?php
/*
 * Plugin Name: Load Simply framework
 */
require __DIR__ . '/simply-framework/simply-framework.php';
require __DIR__ . '/simply-mvc/entrypoint.php';
```

## Routes follow the template hierarchy
:::note
simply-mvc does not add URLs: a route answers a request that WordPress already resolved, at the moment it would load a template. A route condition is a name of the [WordPress template hierarchy](https://developer.wordpress.org/themes/basics/template-hierarchy/): `single-project` replaces the `single-project.php` template of a theme.
:::

## Example: the page of a project
Create a controller in the `src/Controller/` directory of a [registered plugin](../getting-started/create-plugin.md):

```php title='src/Controller/ProjectController.php'
<?php

namespace MyPlugin\Controller;

use Simply\Core\Query\SimplyQuery;
use Simply\Mvc\Attribute\Route;
use Simply\Mvc\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class ProjectController extends AbstractController
{
    #[Route('single-project')]
    public function single(): Response
    {
        return $this->render('single/project.html.twig', [
            'project' => SimplyQuery::getCurrentObject(),
        ]);
    }
}
```
A controller action **must return a `Response`**: an action that returns nothing fails with an explicit `LogicException`. `render()` returns a `Response` with the rendered template; `renderView()` returns only the HTML string.

Any `Response` works, for example `new JsonResponse(['project' => $id])`.

Extending `AbstractController` registers the controller automatically. Without it, tag the service with `simply.controller` and `controller.service_arguments`.

Generate a controller with `php bin/console simply:make:controller`.

## Route attribute
```text
Route(string $wpCondition, array $methods = ['GET', 'POST'], string|false $customCondition = false)
```
- `wpCondition`: a WordPress condition (`404`, `archive`, `attachment`, `author`, `category`, `front`, `home`, `page`, `search`, `single`, `singular`, `tag`, `tax`) or any name of the template hierarchy (`single-project`, `taxonomy-project_tag`...). `front` stands for `front-page`, and `tax` for `taxonomy`.
- `methods`: the accepted HTTP methods. A `HEAD` request is answered by the `GET` routes.
- `customCondition`: the name of a callable that receives the `Request` and returns a boolean, to match only some requests.

When several routes match, a route whose custom condition matches wins; otherwise, the most specific template of the hierarchy wins.

## Action arguments
Like [Symfony argument resolvers](https://symfony.com/doc/current/controller/argument_value_resolver.html), the arguments of an action are resolved automatically:
- the request: `Symfony\Component\HttpFoundation\Request`, or `Simply\Mvc\Request` which also gives `getSimplyQuery()`;
- services, by their class;
- the main query: a parameter typed `WP_Query`, or named `$wp_query`;
- request attributes, the session, default values and variadic arguments.

```php
<?php

namespace MyPlugin\Controller;

use Simply\Mvc\Attribute\Route;
use Simply\Mvc\Controller\AbstractController;
use Simply\Mvc\Request;
use Symfony\Component\HttpFoundation\Response;

class ProjectArchiveController extends AbstractController
{
    #[Route('archive-project')]
    public function archive(\WP_Query $wp_query, Request $request): Response
    {
        return $this->render('archive/project.html.twig', ['projects' => $wp_query->posts]);
    }
}
```
