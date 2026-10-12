---
sidebar_position: 2
---
# Create a model
A model is a class that decorates a WordPress object, declared with an attribute that tells which type it handles and which [repository](repository.md) retrieves it.

## Models provided by Simply
| Model | WordPress object | Type |
|---|---|---|
| `Simply\Core\Model\PostTypeObject` | `WP_Post` | `post` |
| `Simply\Core\Model\CategoryObject` | `WP_Term` | `category` |
| `Simply\Core\Model\TagObject` | `WP_Term` | `post_tag` |
| `Simply\Core\Model\UserObject` | `WP_User` | users |

`PostTypeObject` provides `getID()`, `getTitle()`, `getContent()`, `getExcerpt()`, `getPermalink()`, `getDate()`, `getThumbnailUrl()`, `getCategories()`, `getTags()` and `getMeta()`. The decorated object is in the public `$post` property. `TermObject` (the parent of `CategoryObject` and `TagObject`) provides `getTitle()`, `getSlug()`, `getLink()` and `getMeta()`, with the term in `$term`.

## Model of a custom post type
Extend `PostTypeObject`, and declare the post type and the repository with the `#[PostTypeModel]` attribute:

```php title='src/Model/Project.php'
<?php

namespace MyPlugin\Model;

use MyPlugin\Repository\ProjectRepository;
use Simply\Core\Attributes\PostTypeModel;
use Simply\Core\Model\PostTypeObject;

#[PostTypeModel(type: 'project', repositoryClass: ProjectRepository::class)]
class Project extends PostTypeObject
{
    public function getGridSize(): mixed
    {
        return $this->getMeta('grid_size', true);
    }
}
```

```php title='src/Repository/ProjectRepository.php'
<?php

namespace MyPlugin\Repository;

use Simply\Core\Repository\PostRepository;

class ProjectRepository extends PostRepository
{
}
```

:::caution
Do not redeclare the `$post` property nor the constructor: they come from `PostTypeObject`.
:::

The model and its repository must be services: put them in the `src/` directory of a [registered plugin or theme](../getting-started/create-plugin.md). The framework then injects the post type and the model class into the repository.

## Model of a taxonomy
Extend `TermObject` and use `#[TermModel]`, with a repository extending `TermRepository`:

```php title='src/Model/ProjectTag.php'
<?php

namespace MyPlugin\Model;

use MyPlugin\Repository\ProjectTagRepository;
use Simply\Core\Attributes\TermModel;
use Simply\Core\Model\TermObject;

#[TermModel(type: 'project_tag', repositoryClass: ProjectTagRepository::class)]
class ProjectTag extends TermObject
{
}
```

```php title='src/Repository/ProjectTagRepository.php'
<?php

namespace MyPlugin\Repository;

use Simply\Core\Repository\TermRepository;

class ProjectTagRepository extends TermRepository
{
}
```

## Replace a model provided by Simply
Declare your own model for `post`, `category` or `post_tag`: it replaces the one provided by Simply.

```php
#[PostTypeModel(type: 'post', repositoryClass: ArticleRepository::class)]
class Article extends PostTypeObject
{
}
```

## Users
`UserObject` decorates `WP_User`, with the user in `$user`. The `#[UserModel]` attribute exists, but `ModelFactory` always returns a `UserObject`: a custom user model is only used through its repository.

## Get the model of a WordPress object
```php
use Simply\Core\Model\ModelFactory;

$project = ModelFactory::fromObject(get_post($id));   // a Project
```
`ModelFactory` is also a public service, with a `create($object)` method, if you prefer to inject it.

A `WP_Post` whose post type has no model gives a `PostTypeObject`. A `WP_Term` whose taxonomy has no model throws an exception.

In templates, `Simply\Core\Query\SimplyQuery::getCurrentObject()` returns the model of the queried object (post, term or user), or `false`.
