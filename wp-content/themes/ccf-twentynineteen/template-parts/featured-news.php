<div class="row matrix-border">

    <?php
    global $post;
    $args = array( 'category' => 'news', 'posts_per_page' => 3, 'orderby' => 'date' );
    $postslist = get_posts( $args );
    foreach ( $postslist as $post ) :
    setup_postdata( $post ); ?>

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

    <?php
    endforeach; 
    wp_reset_postdata();
    ?>

</div>
<!-- .matrix-border -->
