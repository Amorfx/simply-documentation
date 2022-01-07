---
sidebar_position: 2
title: Create a custom post type
---
# Create a custom post type
You can create a post type using [`register_post_type`](https://developer.wordpress.org/reference/functions/register_post_type/) function.
Simply also allows you to directly configure your post types in the config folder like this :
```yml title='config/post-types/project.yaml'
post_type:
  project:
    public: true
    labels:
      name: Projets
      singular_name: Projet
    supports:
      - thumbnail
      - editor
      - title
```
:::note
All the available parameters are the same of [`register_post_type`](https://developer.wordpress.org/reference/functions/register_post_type/) function.
:::

## Using translation method in Yaml files
You can translate using `trans(words, domain)`, Simply translate it to [`__()`](https://developer.wordpress.org/reference/functions/__/) function.
```yml title='config/post-types/project.yaml'
post_type:
  project:
    public: true
    labels:
      name: trans(Projects, mydomain)
      singular_name: trans(Project, mydomain)
    supports:
      - thumbnail
      - editor
      - title
```

## Using CLI
```bash
php bin/console simply:make:post-type
```
Respond to all the question and the yaml will be created.
