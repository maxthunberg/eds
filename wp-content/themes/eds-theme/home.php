<?php
/*
Template Name: Learn Template
*/
$title_hero_img = get_field('title_hero_img');

get_header(); ?>



      <?php include( get_template_directory() . '/phtml-components/hero/hero--sm.phtml');?> <!--HERO IMAGE WITH ACF-->

      <div class="tab-content">

        <?php include( get_template_directory() . '/phtml-components/tabnav/learn/tabnav--learn.phtml');?>

        <?php include( get_template_directory() . '/phtml-components/tabnav/learn/most-recent.phtml');?>
        <?php include( get_template_directory() . '/phtml-components/tabnav/learn/news.phtml');?>
        <?php include( get_template_directory() . '/phtml-components/tabnav/learn/infographics.phtml');?>
        <?php include( get_template_directory() . '/phtml-components/tabnav/learn/webinars.phtml');?>
        <?php include( get_template_directory() . '/phtml-components/tabnav/learn/e-books.phtml');?>

      </div>

      <?php include( get_template_directory() . '/phtml-components/tosendify/tosendify.phtml');?> <!--HERO IMAGE WITH ACF-->



<?php get_footer(); ?>
