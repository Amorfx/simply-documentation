---
sidebar_position: 3
title: Create a custom taxonomy
---
# Create a custom taxonomy
You can register a taxonomy with [`register_taxonomy`](https://developer.wordpress.org/reference/functions/register_taxonomy/), or declare it in a YAML file of a `config/` directory. Simply registers it on the `init` action.

```yaml title='config/taxonomy/project-tag.yaml'
taxonomy:
  project_tag:
    object_type: project
    args:
      label: Technologies
      labels:
        name: Technologies
        singular_name: Technology
```
- `object_type` (required): the post type, or a list of post types.
- `args`: the arguments of `register_taxonomy`, without restriction.

## Translations
`trans(text, domain)` is replaced by [`__()`](https://developer.wordpress.org/reference/functions/__/), but only for the values directly under `args` (like `label`), not inside `args.labels`:
```yaml
taxonomy:
  project_tag:
    object_type: project
    args:
      label: trans(Technologies, mydomain)
```
As for post types, spaces are removed from the text, and the translation is cached in the language active when the container is compiled.

To give the taxonomy a model, see [create a model](../models/create-model.md#model-of-a-taxonomy).
