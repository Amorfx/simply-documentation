---
sidebar_position: 1
---
# Introduction
WordPress and OOP... it's not really a love story even if it is improving gradually. We don't have Models strickly speaking.
Most of the time you will only handle 3 classes (excluding WP_Query) :
- WP_Post,
- WP_Term
- WP_User

But if you create a custom post types you don't have a custom model attached to the post type. You must manipulate WP_Post object with function to get post meta etc.

Simply will allow you to create a model for each post types (post and your custom post types).

Simply models only decorate WP_Post, WP_Term but it allows to have a real model to lean on in your project.
