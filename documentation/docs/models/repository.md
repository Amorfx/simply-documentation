---
sidebar_position: 3
---
# Model repositories

You create your models. Great ! But how can you get it from database ? The repositories classes are the answer. With these classes when you retrieve your data from the database you directly retrieve models and not WP_Posts.

## Not using WP_Query
The goal of these classes will be not to directly use the `WP_Query` class. Because WP_Query get only `WP_Post` object and if you want the model you must use ModelFactory or directly the constructor of your model.

## Create your repository
To create a Repository class you jsute have to implement the `RepositoryInterface` or extends `AbstractRepository`.
The abstract class only add a `getReturnObject` function to transform WP_Post or other class to your Model.
:::caution
Extends **AbstractRepository** is only for Models with WordPress Object.
:::

