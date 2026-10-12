---
sidebar_position: 2
title: Create a custom post type
---
# Create a custom post type
You can register a post type with [`register_post_type`](https://developer.wordpress.org/reference/functions/register_post_type/), or declare it in a YAML file of a `config/` directory. Simply registers it on the `init` action.

```yaml title='config/post-type/project.yaml'
post_type:
  project:
    public: true
    label: Projects
    labels:
      name: Projects
      singular_name: Project
    supports:
      - thumbnail
      - editor
      - title
    has_archive: true
    rewrite:
      slug: projects
```

## Accepted keys
The keys are those of `register_post_type`, limited to this list (an unknown key stops the build of the container):

`label`, `labels`, `description`, `public` (default `false`), `hierarchical`, `exclude_from_search`, `publicly_queryable`, `show_ui`, `show_in_menu`, `show_in_nav_menus`, `show_in_admin_bar`, `show_in_rest`, `rest_base`, `rest_controller_class`, `menu_position` (integer), `menu_icon`, `capability_type`, `capabilities`, `map_meta_cap`, `supports`, `register_meta_box_cb`, `taxonomies`, `has_archive`, `rewrite`, `query_var`, `can_export`, `delete_with_user`.

`rewrite` must be a map with `slug`, `with_front`, `feeds`, `pages` and `ep_mask` (`rewrite: false` is not accepted).

For the other arguments of `register_post_type` (`template`, `rest_namespace`, `embeddable`...), register the post type in PHP.

## Translations
`trans(text, domain)` is replaced by [`__()`](https://developer.wordpress.org/reference/functions/__/):
```yaml
post_type:
  project:
    label: trans(Projects, mydomain)
```
:::caution
`trans()` only works on the keys directly under the post type (like `label` or `description`), not inside `labels`, and spaces are removed from its text (`trans(My projects, mydomain)` becomes `__('Myprojects', 'mydomain')`). The translation happens when the container is compiled: it is cached in the language active at that moment. For multilingual sites, register the labels in PHP.
:::

## With the CLI
```bash
php bin/console simply:make:post-type
```
Answer the questions: the command writes `config/post-type/<slug>.yaml` with `public`, `labels.name` and `supports`.

To give the post type a model, see [create a model](../models/create-model.md).
