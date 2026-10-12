---
sidebar_position: 3
---
# Repositories
Repositories retrieve [models](create-model.md) from the database: you get `Project` objects instead of `WP_Post`, without writing `WP_Query` calls.

## Repositories provided by Simply
- `PostRepository`: posts of a post type;
- `TermRepository` (abstract): terms of a taxonomy, extend it for your taxonomies;
- `CategoryRepository` and `TagRepository`;
- `UserRepository`.

## Create a repository
Extend the repository of the WordPress object type, and reference it in the attribute of your model:

```php title='src/Repository/ProjectRepository.php'
<?php

namespace MyPlugin\Repository;

use Simply\Core\Repository\PostRepository;

class ProjectRepository extends PostRepository
{
    /**
     * @return array<\MyPlugin\Model\Project>
     */
    public function findFeatured(int $limit = 3): array
    {
        return $this->findBy(['meta_key' => 'featured', 'meta_value' => '1'], ['date' => 'DESC'], $limit);
    }
}
```
The framework injects the type (`project`) and the model class from the `#[PostTypeModel]` attribute of the model: there is nothing else to configure.

:::caution
Never use a repository provided by Simply (`PostRepository::class`...) as the `repositoryClass` of your model: always create your own class.
:::

## Methods
| Method | Returns |
|---|---|
| `find(mixed $id)` | the model, or `null` when nothing is found or when the object has another type |
| `findAll()` | every object of the type |
| `findBy(array $criteria, array\|string\|null $orderBy = null, ?int $limit = null, ?int $offset = null)` | the matching models. `$criteria` takes the arguments of `WP_Query` (posts), `get_terms` (terms) or `get_users` (users). |
| `findOneBy(array $criteria)` | the first matching model, or `null` |

`$orderBy` accepts:
- a field: `'title'`;
- a field and a direction: `['title' => 'DESC']`;
- the WordPress keys: `['orderby' => 'title', 'order' => 'ASC']`;
- a meta value: `['meta_key' => 'price', 'orderby' => 'meta_value_num']`.

## Use a repository
Your repositories are private services: inject them.

```php
use MyPlugin\Repository\ProjectRepository;

class ProjectList
{
    public function __construct(private ProjectRepository $projects)
    {
    }

    public function render(): void
    {
        foreach ($this->projects->findFeatured() as $project) {
            echo esc_html($project->getTitle());
        }
    }
}
```
The repositories provided by Simply are public: `Simply::get(\Simply\Core\Repository\CategoryRepository::class)`.
