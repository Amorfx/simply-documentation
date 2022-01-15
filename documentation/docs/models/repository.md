---
sidebar_position: 3
---
# Repositories

You create your models. Great ! But how can you get it from database ? The repositories classes are the answer. With these classes when you retrieve your data from the database you directly retrieve models and not WP_Posts.

## Not using WP_Query
The goal of these classes will be not to directly use the `WP_Query` class. Because WP_Query get only `WP_Post` object and if you want the model you must use ModelFactory or directly the constructor of your model.

## Create your repository
To create a Repository class you just have to implement the `RepositoryInterface` or extends `AbstractRepository`.
The abstract class only add a `getReturnObject` function to transform WP_Post or other class to your Model.
:::caution
Extends **AbstractRepository** is only for Models with WordPress Object.
:::

Several classes exists for differents object type : 
- `PostRepository` to retrieve WP_Post object,
- `TermRepository` to retrieve WP_Term,
- `CategoryRepository` to retrieve categories,
- `TagRepository` to retrieve tags


Let's take the example of our project model. Create our Repository is simple because we juste have to extend PostRepository.
:::note
`PostRepository` implement `find` (to get by id), `findAll` (posts_per_page = -1), `findBy` to get by criteria.
:::

```php title='src/Repository/ProjectRepository.php'
<?php
use Simply\Core\Repository\PostRepository;

class ProjectRepository extends PostRepository {
    public function getClassName() {
        return Project::class;
    }
}
```
:::caution
You have to implement `getClassName` to know wich model to retrieve. The repository use WP_Query and the model give the post type information.
:::

And that's it you can retrieve Project using ProjectRepository class and not have WP_Query in your code !
