<?php
/* Template Name: Industry Solutions Template */

$title_hero_img = get_field('title_hero_img');
get_header(); ?>


    <div>
      <?php include( get_template_directory() . '/phtml-components/hero/hero--sm.phtml');?> <!--HERO IMAGE WITH ACF-->

      <div class="tab-content">

        <?php include( get_template_directory() . '/phtml-components/tabnav/industry-solutions/tabnav--industry-solutions.phtml');?>

        <?php include( get_template_directory() . '/phtml-components/tabnav/industry-solutions/automotive.phtml');?>
        <?php include( get_template_directory() . '/phtml-components/tabnav/industry-solutions/fashion-lifestyle.phtml');?>
        <?php include( get_template_directory() . '/phtml-components/tabnav/industry-solutions/healthcare.phtml');?>
        <?php include( get_template_directory() . '/phtml-components/tabnav/industry-solutions/hightech.phtml');?>
        <?php include( get_template_directory() . '/phtml-components/tabnav/industry-solutions/industrial.phtml');?>
        <?php include( get_template_directory() . '/phtml-components/tabnav/industry-solutions/maritime.phtml');?>
        <?php include( get_template_directory() . '/phtml-components/tabnav/industry-solutions/passport-visa.phtml');?>


      </div>

      <?php include( get_template_directory() . '/phtml-components/tosendify/tosendify.phtml');?> <!--HERO IMAGE WITH ACF-->

    </div>

<?php get_footer(); ?>
