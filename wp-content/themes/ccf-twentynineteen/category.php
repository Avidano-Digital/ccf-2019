<?php get_header(); ?>

<main id="content">

    <article class="container-fluid blog">

        <div class="row">

            <div class="col-xl-3 bg-dark">

                <div class="sticky-top py-xl-5">

                    <div class="btn-toggle d-xl-none offset-gutter-x">

                        <a class="btn btn-lg btn-block btn-primary" data-toggle="collapse" href="#aside-nav" aria-expanded="false" aria-controls="collapseExample">
                            <span class="title">Jump To</span>
                        </a>

                    </div>

                    <?php get_template_part('template-parts/aside-global'); ?>

                </div>
            </div>
            <!-- .col -->

            <div class="col-xl-9">

            <section class="featured-panel responsive-sm offset-gutter-x mb-6">

              <div class="card bg-dark">
                  <img class="card-img opacity-40 show-on-mobile" src="<?php echo get_template_directory_uri(); ?>/images/hero/ccf-blog.jpg" alt="Card image">
                  <div class="card-img-overlay d-flex">
                      <div class="container align-self-center">
                          <div class="narrow text-white text-center">
                            <h1><?php the_archive_title(); ?></h1>
                            <p><?php echo category_description(); ?></p>
                          </div>
                      </div>
                  </div>
              </div>

              </section>
              <!-- .featured-panel -->

                <div class="row matrix-border">

                <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

                <div class="col-md-4 mb-4 mb-md-0">

                    <a class="featured-article" href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">

                      <div>

                        <span><?php the_date(); ?></span>

                        <?php $featured_image = get_field('featured_image');	
                        
                        if( $featured_image ): ?>
                        
                        <img class="w-100" src="<?php echo $featured_image['image']; ?>" alt="<?php the_title(); ?>" />
                        
                        <?php endif; /* featured_image */ ?>

                      </div>

                      <h5><?php the_title(); ?></h5>
                    </a>
                </div>
                <!-- .col -->

                </div>
                <!-- .matrix-border -->

<?php endwhile; else : ?>

<?php get_template_part( 'template-parts/content', 'none' ); ?>

<?php endif; ?>

<?php echo paginate_links(); ?>


            </div>
            <!-- .col -->

        </div>
        <!-- .row -->

    </article>

</main>
<!-- #content -->

<?php get_footer(); ?>