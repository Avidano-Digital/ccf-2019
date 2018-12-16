<?php

/*
Template Name: Category
*/

get_header(); ?>

<main id="content">

    <section class="featured-panel responsive-sm offset-gutter-x">

        <div class="card bg-dark">
            <div class="overlay-gradient-y-black">
                <img class="card-img" src="<?php echo get_template_directory_uri(); ?>/images/hero/ccf-blog.jpg" alt="Card image">
            </div>
            <div class="card-img-overlay d-flex">
                <div class="container align-self-center">
                    <div class="narrow text-white text-center">
                        <h1 class="mb-0">
                            <?php the_archive_title(); ?>
                        </h1>
                        <p>
                            <?php echo category_description(); ?>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <!-- .featured-panel -->

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


                <div class="bg-light py-3 offset-gutter-x">

                    <ul class="link-list horizontal justify-content-center">

                    <li class="w-25">
                        <select class="form-control" id="borough" required>
                            <option value="">Filter by Topic</option>
                            <option value="Bronx">Bronx</option>
                            <option value="Brooklyn">Brooklyn</option>
                            <option value="Manhattan">Manhattan</option>
                            <option value="Staten Island">Staten Island</option>
                            <option value="Queens">Queens</option>
                        </select> 
                    </li>
                    <li class="w-25">
                        <select class="form-control" id="borough" required>
                            <option value="">Filter by Topic</option>
                            <option value="Bronx">Bronx</option>
                            <option value="Brooklyn">Brooklyn</option>
                            <option value="Manhattan">Manhattan</option>
                            <option value="Staten Island">Staten Island</option>
                            <option value="Queens">Queens</option>
                        </select> 
                    </li>

                    </ul>


                    <!-- <ul class=" link-list horizontal justify-content-center text-center responsive-lg fs-md d-none">
                        <li>
                            <a class="text-info" href="#">Camera Traps</a>
                        </li>
                        <li>
                            <a class="text-info" href="#">Cheetahs in the News</a>
                        </li>
                        <li>
                            <a class="text-info" href="#">Conservation</a>
                        </li>
                        <li>
                            <a class="text-info" href="#">Education</a>
                        </li>
                        <li>
                            <a class="text-info" href="#">Life at CCF</a>
                        </li>
                        <li>
                            <a class="text-info" href="#">Science &amp; Research</a>
                        </li>
                        <li>
                            <a class="text-info" href="#">Success Stories</a>
                        </li>
                        <li>
                            <a class="text-info" href="#">Visitor Stories</a>
                        </li>
                    </ul> -->

                </div>

                <?php if ( have_posts() ) : ?>

                    <div class="container py-7">

                    <?php while ( have_posts() ) : the_post(); ?>

                        <div class="">

                            <div class="row align-items-center mb-5">

                                <div class="col-lg-6">
                                    <?php $featured_image = get_field('featured_image'); if( $featured_image ): ?>
                                        <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
                                            <img class="w-100" src="<?php echo $featured_image['image']; ?>" alt="<?php the_title(); ?>">
                                        </a>
                                    <?php endif; /* featured_image */ ?>
                                </div>
                                <!-- .col -->

                                <div class="col-lg-6">
                                    <p class="fs-md fs-muted mb-0"><?php the_date(); ?></p>
                                    <h2 class="font-weight-light"><?php the_title(); ?></h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione corrupti tempore quod!</p>
                                    <a  class="link fs-md text-body"  href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">Full Article</a>
                                </div>
                                <!-- .col -->

                            </div>

                        </div>
                        <!-- .col -->

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