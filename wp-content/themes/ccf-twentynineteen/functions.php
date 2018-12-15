<?php 

    namespace Cheetah\Twentynineteen;
    
    ////////////////////////////////////////
    // Enqueue CSS and JS
    ////////////////////////////////////////

    require_once( __DIR__ . '/lib/enqueue-assets.php' );

    ////////////////////////////////////////
    // Theme Support
    ////////////////////////////////////////

    require_once( __DIR__ . '/lib/theme-support.php' );

    ////////////////////////////////////////
    // ACF Theme Options
    ////////////////////////////////////////

    // require_once( __DIR__ . '/lib/acf-theme-options.php' );

    ////////////////////////////////////////
    // ACF Custom WYSIWYG
    ////////////////////////////////////////

    require_once( __DIR__ . '/lib/acf-custom-wysiwyg.php' );

    ////////////////////////////////////////
    // ACF 5 Early Access
    ////////////////////////////////////////

    define('ACF_EARLY_ACCESS', '5');

?>