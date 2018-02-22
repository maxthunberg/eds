<?php
/* Template Name: Front Page Template */
?>


<?php get_header(); ?>

<!-- HERO -->

<?php include( get_template_directory() . '/phtml-components/hero/hero.phtml');?>

<!-- SERVICES -->
<?php include( get_template_directory() . '/phtml-components/services/services-lg.phtml');?>


<!-- ADVANTAGES -->
<?php include( get_template_directory() . '/phtml-components/advantages/advantages.phtml');?>

<!-- BLOG -->
<?php include( get_template_directory() . '/phtml-components/blog/blog.phtml');?>


<!-- MAP -->
<?php include( get_template_directory() . '/phtml-components/map/map.phtml');?>

<!-- QUOTE Fullwidth -->
<?php include( get_template_directory() . '/phtml-components/quote/quote--fullwidth.phtml');?>

<!-- Countries -->
<?php include( get_template_directory() . '/phtml-components/countries/countries.phtml');?>

<!-- Contact Form -->
<?php include( get_template_directory() . '/phtml-components/contact-form/contact-form.phtml');?>

<!-- To sendify-->
<?php include( get_template_directory() . '/phtml-components/tosendify/tosendify.phtml');?>

<?php // include( get_template_directory() . '/contact-form--logic.php');?>


<!-- Search -->

<!-- <div class="wrap">
	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main"> -->

			<?php //get_search_form(); ?>

		<!-- </main>
	</div>
</div> -->

<?php get_footer(); ?>
