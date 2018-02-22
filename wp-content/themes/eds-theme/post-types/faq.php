<?php

declare(strict_types=1);

add_action('init', function () {
    register_post_type('Faq', [
        'has_archive' => false,
        'labels' => [
            'add_new_item' => __('Add New Faq'),
            'edit_item' => __('Edit Faq'),
            'name' => __('Faq'),
            'search_items' => __('Search Faq'),
            'singular_name' => __('Faq'),
        ],
        'menu_icon' => 'dashicons-lightbulb',
        'menu_position' => 7,
        'public' => true,

        'show_in_nav_menus' => true,
        // 'rewrite' => array( 'slug' => 'Faq'),
        'supports' => array('title', 'thumbnail', 'excerpt'),
        // 'supports' => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'trackbacks', 'custom-fields', 'comments', 'revisions', 'post-formats' ),


    ]);
});
