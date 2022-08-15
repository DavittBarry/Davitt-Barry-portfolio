<?php

/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package PortfolioX Dark
 */

?>

<footer id="colophon" class="site-footer text-center">
  <button class="button-top">↑</button>
  <br/>
  <div style="list-style-type: none;">
    <br/>
        <div>
        <?php wp_nav_menu( array( 'theme_location' => 'new-menu' ) ); ?>
			<br/>
			<h3 class="site-info">Contact Info / Yhteystiedot:</h3>
        <a href = "mailto: davittbarry333@gmail.com">E-mail / sähköposti: davittbarry333@gmail.com</a>
    </div>
	<br>
    <!--row-->
    <ul class="list-inline">
      <li class="list-inline-item">
        <a href="https://www.linkedin.com/in/davitt-barry-840aa456/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" width="48" height="48" alt="LinkedIn"></a>
      </li>
      <li class="list-inline-item">
        <a href="https://github.com/DavittBarry" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/5968/5968896.png" width="48" height="48" alt="GitHub"></a>
      </li>
      
    </ul>
  </div>
  
  <!--container fluid-->
</footer>
</div><!-- #page -->

<?php wp_footer(); ?>

</body>

</html>