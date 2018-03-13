<?php
/*
Template Name: Learn Template
*/
$page_for_posts = get_option( 'page_for_posts' );
$title_hero_img = get_field('title_hero_img');




get_header();


$args = array(
    'post_type' => 'post',
    'orderby' => 'date',
    'order'   => 'DESC',
    'posts_per_page' => 3,
    'post__not_in' => array($post->ID)
);

$child_query = new WP_Query( $args );


?>


      <?php include( get_template_directory() . '/phtml-components/hero/hero--sm.phtml');?> <!--HERO IMAGE WITH ACF-->

      <div class="tab-content">

        <?php include( get_template_directory() . '/phtml-components/tabnav/tabnav.phtml');?>

        <?php //include( get_template_directory() . '/phtml-components/tabnav/learn/most-recent.phtml');?>
        <?php include( get_template_directory() . '/phtml-components/tabnav/learn/news.phtml');?>
        <?php //include( get_template_directory() . '/phtml-components/tabnav/learn/infographics.phtml');?>
        <?php //include( get_template_directory() . '/phtml-components/tabnav/learn/webinars.phtml');?>
        <?php //include( get_template_directory() . '/phtml-components/tabnav/learn/e-books.phtml');?>

      </div>

      <?php include( get_template_directory() . '/phtml-components/tosendify/tosendify.phtml');?> <!--HERO IMAGE WITH ACF-->



<?php get_footer(); ?>
