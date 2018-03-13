<?php

/*
Template Name: Single Template
*/


get_header();
?>
<progress value="0" id="progressBar">
  <div class="progress-container">
    <span class="progress-bar"></span>
  </div>
</progress>


<?php include( get_template_directory() . '/phtml-components/hero/hero--sm.phtml');?>

            <!--META INFORMATION-->
            <div class="bx--grid bg-03 section-0rem">
              <div class="bx--row">
                <div class="bx--col-xs-12 bx--col-sm-4 section-3col">
                  <div class="col--flexcenter cities">
                    <h6 class="revealer-0">CATEGORY</h6>
                    <h4 class="bx--type-epsilon meta-post revealer-100">
                      <?php
                        foreach((get_the_category()) as $category){
                            echo $category->name.' ';
                            }
                        ?>
                    </h4>
                  </div>
                </div>
                <div class="bx--col-xs-12 bx--col-sm-4 section-3col">
                  <div class="col--flexcenter cities">
                    <h6 class="bx-type-zeta revealer-0">AUTHOR</h6>

                      <?php
                        $author_id=$post->post_author;
                        echo '<h4 class="bx--type-epsilon meta-post revealer-100">';
                        echo the_author_meta('display_name', $author_id).'</h4>';
                      ?>
                  </h4>
                  </div>
                </div>
                <div class="bx--col-xs-12 bx--col-sm-4 section-3col">
                  <div class="col--flexcenter cities">
                    <h6 class="revealer-0">PUBLISHED</h6>
                    <h4 class="bx--type-epsilon meta-post revealer-100"><?php echo get_the_date(); ?></h4>
                  </div>
                </div>
              </div>
            </div>

            <!--CONTENT -->
            <div class="bx--grid section-default">
              <div class="bx--row row--center">
                <div class="bx--col-xs-12 bx--col-md-8 bx--col-lg-6 section-1col wysiwyg">
                  <?php
                  while(have_posts()) : the_post(); ?>
                    <?php the_field('wysiwyg_post');?>
                  <?php endwhile; ?>
                </div>
              </div>
            </div>

            <!--OTHER ARTICLES-->
            <div class="services bg-03 section-default">
              <div class="bx--col-xs-12 bx--col-md-12 bx--col-lg-12 section-1col"><h3 class="bx--type-beta">You might also like</h3></div>

                <div class="bx--grid">
                  <div class="bx--row">
                    <?php
                    $args = array(
                        'post_type' => 'post',
                        'orderby' => 'date',
                        'order'   => 'DESC',
                        'posts_per_page' => 3,
                        'post__not_in' => array($post->ID)
                    );

                    $child_query = new WP_Query( $args );
                    ?>

                    <?php while ( $child_query->have_posts() ) : $child_query->the_post();

                        include( get_template_directory() . '/phtml-components/cards/card-sm.phtml');

                    endwhile; ?>

                    <?php
                    wp_reset_postdata();?>



                  </div>

                </div>

            </div>



<?php get_footer(); ?>
