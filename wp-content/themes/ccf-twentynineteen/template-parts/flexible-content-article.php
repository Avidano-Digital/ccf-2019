<section class="mb-7">

    <?php if( have_rows('article_content') ): while ( have_rows('article_content') ) : the_row(); ?>

    <?php if( get_row_layout() == 'text_block' ):

    $wysiwyg = get_sub_field('wysiwyg');
    
    ?>

    <div class="narrow mb-5">
        <?php echo $wysiwyg; ?>
    </div>

    <?php elseif( get_row_layout() == 'video_block' ):

    $video = get_sub_field( 'video');
    $post_object = $video;

    ?>

    <?php if( $post_object ): 

    // override $post
    $post = $post_object;
    setup_postdata( $post ); 

    $video_url = get_field('video_url');
    $video_id = substr( strrchr( $video_url, '/' ), 1 );

    ?>

    <div class="video-block medium my-6">

        <div class="bg-dark">

            <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/<?php echo $video_id;?>" frameborder="0" allowTransparency="true" allowfullscreen="true"></iframe>
            </div>

        </div>
        <!-- .wide -->

    </div>
    <!-- .video_block -->

    <?php endif; wp_reset_postdata(); /* post_objects */ ?>

    <?php elseif( get_row_layout() == 'banner_block' ):  

    $type = get_sub_field('type');
    $image = get_sub_field('image');
    $caption = get_sub_field('caption');

    $page_summary = get_sub_field('page_summary');

    $page_summary_headline = $page_summary['headline'];
    $page_summary_text = $page_summary['text'];
    $page_summary_link = $page_summary['link'];

    $quote = get_sub_field('quote');
    
    $quote_text = $quote['text'];
    $quote_credit_name = $quote['credit_name'];
    $quote_credit_title = $quote['credit_title'];

    ?>

    <div class="offset-gutter-x my-7">

        <figure class="figure w-100">

            <div class="featured-panel responsive-xl figure-info">

                <div class="card bg-info">

                    <?php if( $image ): ?>
                        <div class="overlay-gradient-y-black-tall">
                            <img class="card-img" src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt'] ?>">
                        </div>
                    <?php else : ?>
                        <div class="overlay-gradient-y-black-tall">
                            <img class="card-img" src="https://via.placeholder.com/1200x800" alt="Placeholder">
                        </div>
                    <?php endif; ?>

                    <div class="card-img-overlay d-flex">
                        <div class="align-self-end">
                            <div class="container px-0 py-3">
                                <div class="narrow text-shadow">

                                    <?php if( $type == 'Page Summary' ) : ?>

                                        <h3 class="text-primary">
                                            <?php echo $page_summary_headline; ?>
                                        </h3>

                                        <div class="text-white">

                                            <div class="fs-lg mb-2">
                                                <?php echo $page_summary_text; ?>
                                            </div>

                                            <a class="link text-primary" href="<?php echo $link['url']; ?>">
                                                <?php echo $page_summary_link['title']; ?>
                                            </a>

                                        </div>

                                    <?php elseif( $type == 'Quote' ) : ?>

                                        <blockquote class="blockquote text-white">

                                            <span class="fs-xl text-primary mb-2"><span class="fas fa-quote-left"></span></span>

                                            <?php echo $quote_text; ?>

                                            <footer class="blockquote-footer text-white">
                                                <?php echo $quote_credit_name; ?> <cite title="Source Title">
                                                    <?php echo $quote_credit_title; ?></cite>
                                            </footer>

                                        </blockquote>

                                    <?php endif; ?>

                                </div>
                                <!-- .narrow -->
                            </div>
                            <!-- .container -->
                        </div>
                        <!-- .align-self-center -->
                    </div>
                    <!-- .card-img-overlay -->
                </div>
                <!-- .card -->

            </div>
            <!-- .featured-panel -->

            <div class="container">
                <div class="narrow">
                    <figcaption class="figure-caption">
                        <?php echo $caption; ?>
                    </figcaption>
                </div>
            </div>
        </figure>
        <!-- figure -->

    </div>
    <!-- .offset-gutter-x -->

    <?php elseif( get_row_layout() == 'figure_block' ):  

    $figure = get_sub_field('figure');
    $enlarge = $figure['enlarge'];

    $image = $figure['image'];
    $caption = $figure['caption'];
    
    ?>

    <div class="medium my-6">
        <figure class="figure my-0">

            <?php if( $enlarge ): ?>

            <a class="figure-img enlarge" href="<?php echo $image['url']; ?>" title="<?php echo $caption; ?>" data-toggle="lightbox" data-footer="<?php echo $caption; ?>">
                <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt'] ?>">
                <span class="fas fa-expand"></span>
            </a>
                
            <?php else : ?>

            <img class="figure-img" src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt'] ?>">
            
            <?php endif; ?>

            <?php if( $caption ): ?>

            <figcaption class="figure-caption"><?php echo $caption; ?></figcaption>
            
            <?php endif; ?>
        
        </figure>
    </div>
    <!-- .medium -->
    
    <?php elseif( get_row_layout() == 'two_figure_block' ): 

    $figure_a = get_sub_field('figure_a');

    $image_a = $figure_a['image'];
    $caption_a = $figure_a['caption'];
    $enlarge_a = $figure['enlarge'];

    $figure_b = get_sub_field('figure_b');

    $image_b = $figure_b['image'];
    $caption_b = $figure_b['caption'];
    $enlarge_b = $figure['enlarge'];

    ?>

    <div class="two-figure-block offset-gutter-x my-6">

        <div class="row matrix-gutter">

            <div class="col-sm-6">

                <figure class="figure my-0">

                    <?php if( $enlarge_a ): ?>

                    <a class="figure-img enlarge" href="<?php echo $image_a['url']; ?>" title="<?php echo $caption; ?>" data-toggle="lightbox" data-footer="<?php echo $caption_a; ?>">
                        <img src="<?php echo $image_a['url']; ?>" alt="<?php echo $image_a['alt'] ?>">
                        <span class="fas fa-expand"></span>
                    </a>
                        
                    <?php else : ?>

                    <img class="figure-img" src="<?php echo $image_a['url']; ?>" alt="<?php echo $image_a['alt'] ?>">

                    <?php endif; ?>

                    <?php if( $caption_a ): ?>

                    <figcaption class="figure-caption px-2"><?php echo $caption_a; ?></figcaption>

                    <?php endif; ?>

                </figure>

            </div>
            <!-- .col -->

            <div class="col-sm-6">

                <figure class="figure my-0">

                    <?php if( $enlarge_b ): ?>

                    <a class="figure-img enlarge" href="<?php echo $image_b['url']; ?>" title="<?php echo $caption; ?>" data-toggle="lightbox" data-footer="<?php echo $caption_b; ?>">
                        <img src="<?php echo $image_b['url']; ?>" alt="<?php echo $image_b['alt'] ?>">
                        <span class="fas fa-expand"></span>
                    </a>
                        
                    <?php else : ?>

                    <img class="figure-img" src="<?php echo $image_b['url']; ?>" alt="<?php echo $image_b['alt'] ?>">

                    <?php endif; ?>

                    <?php if( $caption_b ): ?>

                    <figcaption class="figure-caption px-2"><?php echo $caption_b; ?></figcaption>

                    <?php endif; ?>

                </figure>

            </div>
            <!-- .col -->

        </div>
        <!-- .row -->

    <?php endif; /* text_block | video_block | banner_block | figure_block | two_figure_block */ ?>

    <?php endwhile; endif; /* article_content */ ?>

</section>