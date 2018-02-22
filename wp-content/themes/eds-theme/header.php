<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta charset="<?php bloginfo('charset'); ?>">
  <link id="favicon" rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri(); ?>/favicon--dark.png" />
  <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">
  <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700" rel="stylesheet">
  <?php wp_head(); ?>

</head>

  <?php if ( is_page(507) ) :?>
      <body class="preload-image--transportation">
  <?php elseif ( is_page(517) ) :?>
      <body class="preload-image--industry">
  <?php else :?>
      <body>
  <?php endif;?>


  <?php //var_dump($post);?>
  <?php include( get_template_directory() . '/phtml-components/navbar/navbar.phtml');?>

  <?php include( get_template_directory() . '/phtml-components/navbar/navbar--mobile.phtml');?>

  <?php include( get_template_directory() . '/phtml-components/sidenav/sidenav.phtml');?>


  <?php include( get_template_directory() . '/phtml-components/preloader/preloader.phtml');?>
  <div class="content hide">
