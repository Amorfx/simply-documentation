---
sidebar_position: 3
title: Create a custom taxonomy
---
# Create a custom taxonomy
You can create a taxonomy using [`register_taxonomy`](https://developer.wordpress.org/reference/functions/register_taxonomy/) function.
Simply also allows you to directly configure your taxonomies in the config folder like this :
```yml title='config/taxonomies/project-tag.yaml'
taxonomy:
  project_tag:
    object_type: project
    args:
      labels:
        name: Technologies
        singular_name: Technologie
```
:::note
All the available parameters are the same of [`register_taxonomy`](https://developer.wordpress.org/reference/functions/register_taxonomy/) function.
:::

## Using translation method in Yaml files
You can translate using `trans(words, domain)`, Simply translate it to [`__()`](https://developer.wordpress.org/reference/functions/__/) function.
```yml title='config/taxonomies/project-tag.yaml'
taxonomy:
  project_tag:
    object_type: project
    args:
      labels:
        name: Technologies
        singular_name: trans(Technologie, mydomain)
```

## Using CLI
Coming soon.
