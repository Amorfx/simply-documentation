---
sidebar_position: 1
---
# Requirements

| | Version |
|---|---|
| PHP | 8.2, 8.3 or 8.4 |
| Composer | 2 |
| WordPress | 6.1 or later (new projects created with the boilerplate install WordPress 7) |
| Database | MySQL 8+ or MariaDB 10.6+ |
| Web server | Any server whose document root can be set to the `web/` directory of the project |

Simply relies on [Symfony](https://symfony.com) 7.4 (DependencyInjection, Config, Finder, Yaml, Console) and [Twig](https://twig.symfony.com) 3.

## Package versions
The Simply packages are released together. Use these versions together:

| Package | Version | Role |
|---|---|---|
| [simply-framework](https://github.com/Amorfx/simply-framework) | 0.3 | The framework, installed as a must-use plugin |
| [simply-maker](https://github.com/Amorfx/simply-maker) | 0.4 | `bin/console` commands: code generators and cache |
| [simply-mvc](https://github.com/Amorfx/simply-mvc) | 0.3 | Optional controllers and routes |
| [simply](https://github.com/Amorfx/simply) (boilerplate) | 0.7 | The project template |

Coming from an older version? Read the [upgrade guide](../upgrading/0.2-to-0.3.md).
