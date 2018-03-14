<?php
/*
Template Name: Learn Template
*/

$page_for_posts = get_option( 'page_for_posts' );
$title_hero_img = get_field('title_hero_img');

get_header();

getPostViews(get_the_ID());

?>


      <?php include( get_template_directory() . '/phtml-components/hero/hero--sm.phtml');?> <!--HERO IMAGE WITH ACF-->

      <div class="tab-content">

        <?php include( get_template_directory() . '/phtml-components/tabnav/tabnav.phtml');?>

        <?php include( get_template_directory() . '/phtml-components/tabnav/learn/news.phtml');?>


      </div>

      <?php include( get_template_directory() . '/phtml-components/tosendify/tosendify.phtml');?> <!--HERO IMAGE WITH ACF-->



<?php get_footer(); ?>
