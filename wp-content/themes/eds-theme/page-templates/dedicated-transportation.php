<?php
/* Template Name: Dedicated Transportation Template */

get_header(); ?>


    <div>

      <?php include( get_template_directory() . '/phtml-components/hero/hero--sm.phtml');?> <!--HERO IMAGE WITH ACF-->
      <div class="tab-content">

        <?php include( get_template_directory() . '/phtml-components/tabnav/transportation/tabnav--transportation.phtml');?>

        <?php include( get_template_directory() . '/phtml-components/tabnav/transportation/dedicated-road.phtml');?>
        <?php include( get_template_directory() . '/phtml-components/tabnav/transportation/dedicated-air.phtml');?>
        <?php include( get_template_directory() . '/phtml-components/tabnav/transportation/dedicated-courier.phtml');?>


      </div>

      <?php include( get_template_directory() . '/phtml-components/tosendify/tosendify.phtml');?> <!--HERO IMAGE WITH ACF-->

    </div>

<?php get_footer(); ?>
