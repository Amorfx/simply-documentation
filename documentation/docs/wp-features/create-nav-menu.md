---
sidebar_position: 4
title: Create a custom navigation menu
---
# Create a custom navigation menu
You can register menu locations with [`register_nav_menus`](https://developer.wordpress.org/reference/functions/register_nav_menus/), or declare them in a YAML file of a `config/` directory. Simply registers them on the `init` action.

```yaml title='config/nav-menu/menus.yaml'
nav_menu:
  header: Header menu
  footer: trans(Footer menu, mydomain)
```
Each key is a menu location, each value its description. `trans(text, domain)` is replaced by [`__()`](https://developer.wordpress.org/reference/functions/__/).
