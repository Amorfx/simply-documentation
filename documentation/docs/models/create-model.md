---
sidebar_position: 2
---
# Create your custom models
:::note
Each models has a constructor with the object it decorates. `WP_Post` for `PostTypeObject`, `WP_Term` for `TermObject` etc.
:::

## For Post types
### Post
Simply provides you with a basic model for type `post` : `PostTypeObject`. It provides some basic function like `getTitle`, `getPermalink` etc. But you can extends or replace this model with your model if you want. Read [how register your model](#register-your-model-into-simply) to know how to do this.

### Custom Post types
After [creating your custom post type](wp-features/create-post-type.md) you will have to create a corresponding model.
Let's take the example again with project post type.
My project post type has multiple metas : 
- Project subtitle,
- Grid position in my portfolio
- A grid size

In basic WordPress development you have to write this code into your theme (multiple times or create a dedicated function) :
```php
<?php

global $post;

if ($post->post_type === 'project') {
    $size = get_post_meta($post->ID, 'grid_size', true); // or get_field if you use ACF plugin
}
```

But in your project we want a Project model to do this : 
```php
<?php

global $post;

$project = new Project($post);
$size = $project->getGridSize();
```

Let's create our Model : 
```php title='src/Model/Project.php'
<?php

class Project {
    private WP_Post $post;
    
    public function __construct(WP_Post $post) {
        $this->post = $post;
    }
    
    public function getGridSize() {
        return get_post_meta($this->post->ID, 'grid_size', true);
    }
}
```

This is a simple class that decorate WP_Post. But here Simply can not reconize which post type the model is related. To do that you have to implement `ModelInterface` with the function `getType` which will return the linked post type.

So let's update our class : 
```php {16-18} title='src/Model/Project.php'
<?php

use Simply\Core\Contract\ModelInterface;

class Project implements ModelInterface {
    private WP_Post $post;
    
    public function __construct(WP_Post $post) {
        $this->post = $post;
    }
    
    public function getGridSize() {
        return get_post_meta($this->post->ID, 'grid_size', true);
    }
    
    public static function getType() {
        return 'project';
    }
}
```

If you want to have basic function like `getTitle` etc. let's extends `PostTypeObject` : 
```php {5} title='src/Model/Project.php'
<?php

use Simply\Core\Model\PostTypeObject;

class Project extends PostTypeObject {
    private WP_Post $post;
    
    public function __construct(WP_Post $post) {
        $this->post = $post;
    }
    
    public function getGridSize() {
        return get_post_meta($this->post->ID, 'grid_size', true);
    }
    
    public static function getType() {
        return 'project';
    }
}
```

## For Taxonomies
After [creating your custom taxonomy](wp-features/create-taxonomy.md) its the same thing like Post type but you have to extends the abstract class `TermObject` :
```php title='src/Model/ProjectTag.php'
<?php

use Simply\Core\Model\TermObject;

class ProjectTag extends TermObject {
    public static function getType() {
        return 'project_tag';
    }
}
```
### Category
Simply provides you with a basic model for `category` : `CategoryObject`.

### Tag
Simply provides you with a basic model for `tag` : `TagObject`.

## For Users
Coming soon. But the basic model registered is `UserObject`;
