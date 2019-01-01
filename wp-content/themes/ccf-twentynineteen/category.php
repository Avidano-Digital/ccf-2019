<?php

/*
Template Name: Category
*/

get_header(); ?>

<main id="content">

    <section>

        <div class="card bg-dark">
            <img class="card-img opacity-30" src="<?php echo get_template_directory_uri(); ?>/images/hero/ccf-blog.jpg" alt="Card image">
            <div class="card-img-overlay d-flex">
                <div class="align-self-center container-fluid text-center py-2">
                    <h1 class="display-1 text-white">
                        News
                    </h1>
                    <ul class="extensible-list horizontal justify-content-center" id="news-menu">
                        <li>
                            <a class="active"href="#1">CCF Blog</a>
                        </li>
                        <li>
                            <a href="#1">Press Releases</a>
                        </li>
                        <li>
                            <a href="#1">Press Kits</a>
                        </li>
                    </ul>
                </div>
                <!-- .align-self-center -->
            </div>
        </div>

    </section>
    <!-- .banner -->

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

    <div class="container-fluid py-7">

        <div class="wide px-lg-2">
            <?php get_template_part('template-parts/featured-news'); ?>
        </div>

    </div>
    <!-- .container-fluid -->

</main>
<!-- #content -->

<?php get_footer(); ?>