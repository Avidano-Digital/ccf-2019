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

    <?php endif; /* text_block | video_block | banner_block */ ?>

<?php endwhile; endif; /* article_content */ ?>