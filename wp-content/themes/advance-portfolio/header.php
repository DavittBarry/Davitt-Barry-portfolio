<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div class="content-ts">
 *
 * @package advance-portfolio
 */

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
  <?php if ( function_exists( 'wp_body_open' ) ) {
    wp_body_open();
  } else {
    do_action( 'wp_body_open' );
  } ?>
  <div class="main-menu <?php if( get_theme_mod( 'advance_portfolio_sticky_header', false) != '' || get_theme_mod( 'advance_portfolio_responsive_sticky_header', false) != '') { ?> sticky-header"<?php } else { ?>close-sticky <?php } ?>">
    <header role="banner">
      <?php if(get_theme_mod('advance_portfolio_preloader_option',true)!= '' || get_theme_mod('advance_portfolio_responsive_preloader', true) != ''){ ?>
        <div id="loader-wrapper" class="w-100 h-100">
          <div id="loader"></div>
          <div class="loader-section section-left"></div>
          <div class="loader-section section-right"></div>
        </div>
      <?php }?>
      <a class="screen-reader-text skip-link" href="#maincontent"><?php esc_html_e( 'Skip to content', 'advance-portfolio' ); ?></a>
      <div id="header" class="py-3">
        <div class="container">
          <div class="row m-0">
            <div class="logo col-lg-4 col-md-4 col-9 m-0 align-self-center">
              <?php if ( has_custom_logo() ) : ?>
                <div class="site-logo"><?php the_custom_logo(); ?></div>
              <?php endif; ?>
              <?php $blog_info = get_bloginfo( 'name' ); ?>
              <?php if ( ! empty( $blog_info ) ) : ?>
                <?php if( get_theme_mod('advance_portfolio_site_title',true) != ''){ ?>
                  <?php if ( is_front_page() && is_home() ) : ?>
                    <h1 class="site-title text-uppercase p-0 m-0 text-start"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
                  <?php else : ?>
                    <p class="site-title text-uppercase p-0 m-0 text-start"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
                  <?php endif; ?>
                <?php }?>
              <?php endif; ?>
              <?php
              $description = get_bloginfo( 'description', 'display' );
              if ( $description || is_customize_preview() ) :
                ?>
                <?php if( get_theme_mod('advance_portfolio_tagline',true) != ''){ ?>
                  <p class="site-description m-0">
                    <?php echo esc_html($description); ?>
                  </p>
                <?php }?>
              <?php endif; ?>
            </div>
            <div class="col-lg-8 col-md-8 col-3 align-self-center">
              <?php 
                if(has_nav_menu('primary')){ ?>
                <div class="toggle-menu responsive-menu">
                  <button role="tab" class="mobiletoggle"><i class="fas fa-bars"></i><span class="screen-reader-text"><?php esc_html_e('Open Menu','advance-portfolio'); ?></span></button>
                </div>
              <?php }?>
              <div id="menu-sidebar" class="nav sidebar">
                <nav id="primary-site-navigation" class="primary-navigation" role="navigation" aria-label="<?php esc_attr_e( 'Top Menu', 'advance-portfolio' ); ?>">
                  <?php
                    if(has_nav_menu('primary')){  
                      wp_nav_menu( array( 
                        'theme_location' => 'primary',
                        'container_class' => 'main-menu-navigation clearfix' ,
                        'menu_class' => 'clearfix',
                        'items_wrap' => '<ul id="%1$s" class="%2$s mobile_nav">%3$s</ul>',
                        'fallback_cb' => 'wp_page_menu',
                      ) );
                    }
                  ?>
                  <div id="contact-info">
                    <?php get_search_form();?>
                  </div>
                  <a href="javascript:void(0)" class="closebtn responsive-menu"><i class="far fa-times-circle"></i><span class="screen-reader-text"><?php esc_html_e('Close Menu','advance-portfolio'); ?></span></a>
                </nav>
              </div>
            </div>
          </div>
          <hr class="horizontal m-0">
        </div>
        <div class="clearfix"></div>
      </div>
    </header>
  </div>