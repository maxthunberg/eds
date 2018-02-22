<?php
/*
Template Name: Single Template
*/

get_header(); ?>

<?php
$post = $wp_query->post;

if ( in_category( 'transportation' ) ) {
  include( TEMPLATEPATH.'/single-services-transportation.php' );
}
else if  ( in_category( 'transportation' ) ) {
  include( TEMPLATEPATH.'/single-services-industrysolutions.php' );
}
else {
  include( TEMPLATEPATH.'/single-learn.php' );
}
?>


<?php get_footer(); ?>
