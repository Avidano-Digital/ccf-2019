<?php get_header(); ?>

<main id="content">







<section class="container-fluid pt-7 pb-8">

  <header class="narrow text-center">
      <h1 class="display-4">
      <h1><?php the_archive_title(); ?></h1>
      <p><?php echo category_description(); ?></p>
      </h1>
  </header>

</section>


    
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

<?php get_template_part( 'template-parts/content-posts', get_post_format() ); ?>

<?php endwhile; else : ?>

<?php get_template_part( 'template-parts/content', 'none' ); ?>

<?php endif; ?>

<?php echo paginate_links(); ?>

<p>Template: category.php</p>







</main>
<!-- #content -->
    
<?php get_footer(); ?>