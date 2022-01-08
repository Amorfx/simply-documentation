---
sidebar_position: 1
title: Twig
---
# Template Engine
The second main feature of Simply is the use of the [Twig](https://twig.symfony.com/) template engine via the class `TemplateEngine`.

## Documentation
All the documentation for twig is [available here](https://twig.symfony.com/doc/3.x/). Read it carefully to understand how to use it in the framework.

## Custom functions added to twig
### fn/function
To call specific function into twig template you can use fn or function twig function.
Here an example to call [`comments_template`](https://developer.wordpress.org/reference/functions/comments_template/) function.
```twig
<div class="comments">
    {{ fn('comments_template') }}
</div>
```

And another example with parameters :
```twig
<a href="{{ fn('get_author_posts_url', aPost.post.post_author) }}">
    ...
</a>
```
## Add custom twig configuration
You can add custom functions or globals with the `simply_template_configuration` filter :
```php
add_filter('simply_template_configuration', function (\Twig\Environment $twig) {
    $twig->addFunction(new \Twig\TwigFunction('isLive', ThemeSettings::class . '::isLive'));
    $twig->addGlobal('theme', new ThemeUtils());
    return $twig;
});
```
:::caution
The name of the hook will change in future version of Simply Framework because of nomenclature. It will be `simply/template/configuration`.
:::
## Register custom views directories
To tell Twig where search template files you have to use `simply_views_directory` filter :
```php
add_filter('simply_views_directory', function(array $viewsDirectory) {
    $viewsDirectory[] = realpath(__DIR__ . '/views');
    return $viewsDirectory;
});
```
:::caution
The name of the hook will change in future version of Simply Framework because of nomenclature. It will be `simply/template/directories`.
:::
