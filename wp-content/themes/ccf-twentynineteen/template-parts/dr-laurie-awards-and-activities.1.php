<?php if( have_rows('awards_and_activities_content') ):

    while ( have_rows('awards_and_activities_content') ) : the_row();

    $headline = get_sub_field('headline');

    ?>

    <section id="awards-and-honors" class="mb-5 mb-xl-6">

        <div class="narrow mb-5 mb-xl-6">

            <h3 class="h2 mb-4"><?php echo $headline; ?></h3>

            <?php if( have_rows('description_list') ): while( have_rows('description_list') ): the_row();

            $date = get_sub_field('date');
            $description = get_sub_field('description');

            ?>

            <dl class="row no-gutters border-top py-2 mb-0 fs-md">
                
                <dt class="col-sm-3"><?php echo $date; ?></dt>

                <dd class="col-sm-9">

                    <?php if( have_rows('description') ): while( have_rows('description') ): the_row();

                    $text = get_sub_field('text');

                    ?>

                    <p class="f-sans-serif"><?php echo $text; ?></p>

                    <?php endwhile; endif; /* description */ ?>

                </dd>

            </dl>
        
        <?php endwhile; endif; /* description_list */ ?>

        </div>
        <!-- .narrow -->

    </section>

<?php endwhile; endif; /* awards_and_activities_content */ ?>