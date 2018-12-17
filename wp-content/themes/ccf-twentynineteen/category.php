<?php

/*
Template Name: Category
*/

get_header(); ?>

<main id="content">

    <section class="banner">

        <div class="card bg-white">
            <div class="overlay-gradient-y-black">
                <img class="card-img" src="<?php echo get_template_directory_uri(); ?>/images/hero/ccf-blog.jpg" alt="Card image">
            </div>
            <div class="card-img-overlay d-flex">
                <div class="align-self-end container-fluid py-2">
                    <h1 class="text-right text-secondary">
                        <?php the_archive_title(); ?>
                    </h1>
                </div>
                <!-- .align-self-center -->
            </div>
        </div>

    </section>
    <!-- .banner -->

    <div class="container-fluid">

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

                <div class="offset-gutter-x">

                    <div class="container-fluid bg-light py-3">

                        <div class="narrow">

                            <div class="row matrix-gutter">

                                <div class="col-md">
                                    <select class="form-control" id="borough" required>
                                        <option value="">Filter by Topic</option>
                                        <option value="Camera Traps">Camera Traps</option>
                                        <option value="Cheetahs in the News">Cheetahs in the News</option>
                                        <option value="Conservation">Conservation</option>
                                        <option value="Education">Education</option>
                                        <option value="Life at CCF">Life at CCF</option>
                                        <option value="Science &amp; Research">Science &amp; Research</option>
                                        <option value="Success Stories">Success Stories</option>
                                        <option value="Life at CCF">Life at CCF</option>
                                        <option value="Visitor Stories">Visitor Stories</option>
                                    </select> 
                                </div>
                                <!-- .col -->

                                <div class="col-md">
                                    <select class="form-control" id="borough" required>
                                        <option value="">Filter by Author</option>
                                        <option value="Bronx">Bronx</option>
                                        <option value="Brooklyn">Brooklyn</option>
                                        <option value="Manhattan">Manhattan</option>
                                        <option value="Staten Island">Staten Island</option>
                                        <option value="Queens">Queens</option>
                                    </select> 
                                </div>
                                <!-- .col -->

                            </div>
                            <!-- .row -->

                        </div>
                        <!-- .narrow -->

                    </div>
                    <!-- .container-fluid -->

                </div>
                <!-- .offset-gutter-x -->

                <?php if ( have_posts() ) : ?>

                    <div class="natural py-7">

                    <?php while ( have_posts() ) : the_post();
                    
                    $categories = get_the_category();
                    $category_first = $categories[0]->cat_name;
                    
                    ?>


                        <div class="row align-items-center mb-5">

                            <div class="col-lg-6 mb-3 mb-lg-0">
                                <?php $featured_image = get_field('featured_image'); if( $featured_image ): ?>
                                    <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"> 
                                        <img class="w-100" src="<?php echo $featured_image['image']; ?>" alt="<?php the_title(); ?>">
                                    </a>
                                <?php endif; /* featured_image */ ?>
                            </div>
                            <!-- .col -->

                            <div class="col-lg-6">
                                <p class="f-sans-serif fs-md fs-muted mb-0">
                                    <span><?php the_date(); ?></span> • <span><em><?php echo $category_first; ?></em></span>
                                </p>
                                <h2 class="font-weight-light"><?php the_title(); ?></h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione corrupti tempore quod!</p>
                                <a  class="link fs-md text-body"  href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">Full Article</a>
                            </div>
                            <!-- .col -->

                        </div>


                    <?php endwhile; /* have_posts */ ?>

                <?php endif; /* have_posts */ ?>

                <?php echo paginate_links(); ?>

            </div>
            <!-- .col -->

        </div>
        <!-- .row -->

    </div>
    <!-- .container-fluid -->

</main>
<!-- #content -->

<?php get_footer(); ?>