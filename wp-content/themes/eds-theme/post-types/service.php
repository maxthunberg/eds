<?php

declare(strict_types=1);

add_action('init', function () {
    register_post_type('service', [
        'has_archive' => false,
        'labels' => [
            'add_new_item' => __('Add New Service'),
            'edit_item' => __('Edit Service'),
            'name' => __('Service'),
            'search_items' => __('Search Service'),
            'singular_name' => __('service'),
        ],
        'menu_icon' => 'dashicons-awards',
        'menu_position' => 6,
        'public' => true,

        'show_in_nav_menus' => true,
        // 'rewrite' => array( 'slug' => 'services'),
        'supports' => array('title', 'thumbnail', 'excerpt'),
        // 'supports' => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'trackbacks', 'custom-fields', 'comments', 'revisions', 'post-formats' ),


    ]);
});
