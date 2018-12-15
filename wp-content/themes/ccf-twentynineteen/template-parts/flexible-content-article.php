<?php if( have_rows('article_content') ):

    while ( have_rows('article_content') ) : the_row(); ?>

        <?php if( get_row_layout() == 'section' ):  

        $id = get_sub_field('id');

        ?>

        <section class="mb-7">

            <?php if( have_rows('section_content') ): while( have_rows('section_content') ): the_row(); ?>

            <?php if( get_row_layout() == 'text_block' ):

                $wysiwyg = get_sub_field('wysiwyg'); ?>

                <div class="narrow mb-5">
                    <?php echo $wysiwyg; ?>
                </div>

            <?php elseif( get_row_layout() == 'figure_block' ): 

                $figure_inline_single = get_sub_field('figure_inline_single');

                $image = $figure_inline_single['image'];
                $caption = $figure_inline_single['caption'];
                
                ?>

                <div class="narrow mb-5">
                    <figure class="figure my-0">
                        <a href="<?php echo $image['url']; ?>" class="figure-img" title="A caption for the above image.">
                            <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt'] ?>">
                            <span class="fas fa-search-plus"></span>
                        </a>
                        <figcaption class="figure-caption"><?php echo $caption; ?></figcaption>
                    </figure>
                </div>
                <!-- .narrow -->

            <?php elseif( get_row_layout() == 'two_figure_block' ): 

                $figure_inline_single_a = get_sub_field('figure_inline_single_a');

                $image_a = $figure_inline_single_a['image'];
                $caption_a = $figure_inline_single_a['caption'];
                
                $figure_inline_single_b = get_sub_field('figure_inline_single_b');

                $image_b = $figure_inline_single_b['image'];
                $caption_b = $figure_inline_single_b['caption'];

                ?>

                <div class="narrow my-6">
                
                    <div class="row matrix-gutter">

                        <div class="col-sm-6 mb-4 mb-sm-0">
                            <figure class="figure my-0">
                                <a href="<?php echo $image_a['url']; ?>" class="figure-img" title="A caption for the above image.">
                                    <img class="w-100" src="<?php echo $image_a['url']; ?>" alt="<?php echo $image_a['alt'] ?>">
                                    <span class="fas fa-search-plus"></span>
                                </a>
                                <figcaption class="figure-caption"><?php echo $caption_a; ?></figcaption>
                            </figure>
                        </div>
                        <!-- .col -->

                        <div class="col-sm-6">
                            <figure class="figure my-0">
                                <a href="<?php echo $image_b['url']; ?>" class="figure-img" title="A caption for the above image.">
                                    <img class="w-100" src="<?php echo $image_b['url']; ?>" alt="<?php echo $image_b['alt'] ?>">
                                    <span class="fas fa-search-plus"></span>
                                </a>
                                <figcaption class="figure-caption"><?php echo $caption_b; ?></figcaption>
                            </figure>
                        </div>
                        <!-- .col -->

                    </div>
                    <!-- .row -->

                </div>
                <!-- .narrow -->

            <?php elseif( get_row_layout() == 'gallery_carousel_block' ): 
            
                $images = get_sub_field('images');

                $count_a = 0;
                $count_b = 0;
            
            ?>

            <?php if( $images ): ?>

                <div class="offset-gutter-x carousel slide my-7" 
                    data-ride="carousel" 
                    data-keyboard="true"
                    data-interval="false" 
                    id="carousel-gallery"
                    dir="ltr">

                    <div class="carousel-inner">

                    <?php foreach( $images as $image ): ?>

                        <div class="carousel-item <?php if($count_a == 0){ echo 'active'; } ?>">
                            <div class="overlay-gradient-y-black-shorty">
                            <img class="w-100" src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>">
                            </div>
                            <div class="carousel-caption bg-opacity-black-60">
                                <p><?php echo $image['caption']; ?></p>
                            </div>
                        </div>

                    <?php $count_a++; endforeach; ?>

                    </div>

                    <div class="row no-gutters align-items-center justify-content-between py-2">

                        <div class="col-auto text-left px-3">
                            <a class="no-btn-style" href="#carousel-gallery" role="button" data-slide="prev">
                                <span class="fas fa-chevron-left fa-lg" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                        </div>
                        <!-- .col -->

                        <div class="col-auto">

                            <ol class="carousel-indicators">

                            <?php foreach( $images as $image ): ?>

                                <li data-target="#carousel-gallery" class="<?php if($count_b == 0){ echo 'active'; } ?>" data-slide-to="<?php echo $count_b; ?>">
                                    <span class="sr-only">Slide 1</span>
                                </li>

                            <?php $count_b++; endforeach; ?>

                            </ol>
                        </div>
                        <!-- .col -->
                        
                        <div class="col-auto text-right px-3">
                            <a class="no-btn-style" href="#carousel-gallery" role="button" data-slide="next">
                                <span class="fas fa-chevron-right fa-lg" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                        <!-- .col -->

                    </div>
                    <!-- .row -->

                </div>
                <!-- #carousel-gallery -->

            <?php endif; ?>

            <?php endif; /* text_block | figure_block | two_figure_block | gallery_slider */ ?>

            <?php endwhile; endif; /* flexible_content */ ?>

        </section>

        <?php elseif( get_row_layout() == 'banner_with_quote' ):  

        $image = get_sub_field('image');
        $caption = get_sub_field('caption');
        $quote = get_sub_field('quote');
        
        $text = $quote['text'];
        $signature = $quote['signature'];
        $credit_name = $quote['credit_name'];
        $credit_title = $quote['credit_title'];
        
        ?>

        <div class="offset-gutter-x my-7">

            <figure class="figure w-100">

                <div class="featured-panel responsive-xl figure-info">

                    <div class="card bg-info">

                        <div class="overlay-gradient-y-black-tall">
                            <img class="card-img" src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt'] ?>">
                        </div>

                        <div class="card-img-overlay d-flex">
                            <div class="align-self-end">
                                <div class="container px-0 py-3">

                                    <div class="narrow text-white text-shadow">

                                        <blockquote class="blockquote ">
                                            
                                            <span class="fs-xl text-primary mb-2"><span class="fas fa-quote-left"></span></span>
                                            
                                            <?php echo $text; ?>
                                            
                                            <footer class="blockquote-footer">
                                                <?php echo $credit_name; ?> <cite title="Source Title"><?php echo $credit_title; ?></cite>
                                            </footer>

                                        </blockquote>

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
                        <figcaption class="figure-caption"><?php echo $caption; ?></figcaption>
                    </div>
                </div>
            </figure>
            <!-- figure -->

        </div>
        <!-- .offset-gutter-x -->

        <?php elseif( get_row_layout() == 'banner_with_page_summary' ):  

        $image = get_sub_field('image');
        $caption = get_sub_field('caption');
        $page_summary = get_sub_field('page_summary');

        $headline = $page_summary['headline'];
        $text = $page_summary['text'];
        $link = $page_summary['link'];

        ?>

        <div class="offset-gutter-x my-7">

            <figure class="figure w-100">

                <div class="featured-panel responsive-xl figure-info">

                    <div class="card bg-info">

                        <div class="overlay-gradient-y-black-tall">
                            <img class="card-img" src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt'] ?>">
                        </div>

                        <div class="card-img-overlay d-flex">
                            <div class="align-self-end">
                                <div class="container px-0 py-3">
                                    <div class="narrow text-shadow">

                                        <h3 class="text-primary"><?php echo $headline; ?></h3>
                                        
                                        <div class="text-white">

                                            <div class="fs-lg mb-2">
                                                <?php echo $text; ?>
                                            </div>

                                            <a class="link text-primary" href="<?php echo $link['url']; ?>"><?php echo $link['title']; ?></a>

                                        </div>

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
                        <figcaption class="figure-caption"><?php echo $caption; ?></figcaption>
                    </div>
                </div>
            </figure>
            <!-- figure -->

        </div>
        <!-- .offset-gutter-x -->

        <?php elseif( get_row_layout() == 'alternating_blocks' ):  

        $row = get_sub_field('row');

        ?>

        <?php if( have_rows('row') ): ?>

            <div class="my-7">
                    
            <?php while( have_rows('row') ): the_row();

            $image = get_sub_field('image');
            $headline = get_sub_field('headline');
            $text = get_sub_field('text');
            $link = get_sub_field('link');

            $i++;

            ?>

            <div class="row no-gutters offset-gutter-x bg-info <?php if($i % 2 == 0) echo 'bg-green' ?>">

                <div class="col-lg-6 col-xl-6 text-center <?php if($i % 2 != 0) echo 'order-lg-last' ?>">

                    <?php if ($image) : ?>
                        <img class="card-img" src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt'] ?>">
                    <?php else : ?>
                        <img class="card-img" src="http://via.placeholder.com/750x750/000000/333333/.jpg" alt="Placeholder">
                    <?php endif; ?>

                </div>
                <!-- .col -->

                <div class="col-lg-6 col-xl-6 d-flex <?php if($i % 2 != 0) echo 'order-lg-first' ?>">
                    <div class="narrow text-white text-center align-self-center p-4">
                        <h3 class="text-primary"><?php echo $headline; ?></h3> 
                        <?php echo $text; ?>
                    </div>
                </div>
                <!-- .col -->

            </div>
            <!-- .row -->

            <?php endwhile; ?>

            </div>
            <!-- .my-5 -->

        <?php endif; /* row */ ?>

        <?php elseif( get_row_layout() == 'stackable_banners' ):  

            $row = get_sub_field('row');

            ?>

            <?php if( have_rows('row') ): ?>

            <div class="offset-gutter-x my-7">
                    
            <?php while( have_rows('row') ): the_row();

            $image = get_sub_field('image');
            $headline = get_sub_field('headline');
            $text = get_sub_field('text');
            $link = get_sub_field('link');

            $i++;

            ?>

            <div class="featured-panel responsive-lg <?php if($i % 2 == 0): ?>bg-green<?php else: ?>bg-info<?php endif; ?>">

                <div class="card ">

                    <div class="overlay-gradient-y-black-tall">
                        <?php if ($image) : ?>
                            <img class="card-img shadow-lg" src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt'] ?>">
                        <?php else : ?>
                            <img class="card-img shadow-lg" src="http://via.placeholder.com/1500x1000/333333/000000/.jpg" alt="Placeholder">
                        <?php endif; ?>
                    </div>

                    <div class="card-img-overlay d-flex">
                        <div class="align-self-end">
                            <div class="container px-0 py-3">

                                <div class="narrow">

                                    <h3 class="h2 text-primary text-shadow"><?php echo $headline; ?></h3>
                                    
                                    <div class="fs-lg text-white text-shadow mb-3">

                                        <?php echo $text; ?>

                                    </div>

                                    <a class="link text-primary" href="#collapse-<?php echo $i; ?>" title="">Further Exploration</a>

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

                <div class="collapse" id="collapse-<?php echo $i; ?>">
                    <div class="narrow py-7 text-white">
                        <p>More Info</p>
                    </div>
                </div>

            </div>
            <!-- .featured-panel -->

            <?php endwhile; ?>

            </div>
            <!-- .my-5 -->

            <?php endif; /* row */ ?>

        <?php endif; /* section | banner_with_quote | banner_with_page_summary | alternating_blocks | stackable_banners */ ?>

<?php endwhile; endif; /* article_content */ ?>