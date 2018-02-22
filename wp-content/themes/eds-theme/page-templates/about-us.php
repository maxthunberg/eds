<?php
/* Template Name: About us Template */
?>

<?php get_header(); ?>
<!-- HERO -->

<?php include( get_template_directory() . '/phtml-components/hero/hero--sm.phtml');?>

<?php include( get_template_directory() . '/phtml-components/contact-form/contact-form.phtml');?>
<?php include( get_template_directory() . '/phtml-components/map/map.phtml');?>



<!-- To Sendify -->
<?php include( get_template_directory() . '/phtml-components/tosendify/tosendify.phtml');?> <!--HERO IMAGE WITH ACF-->


<?php get_footer(); ?>
