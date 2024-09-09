<?php
/**
 * Plugin name: My block
 * Plugin URI: https://www.google.com/
 * Description: Guttenberg block
 * Author: Vasil Stryzheus
 * Author URI: https://www.google.com/
 */

 function zoduaks_myblock_init () {
	register_block_type_from_metadata( __DIR__ );
 }
 add_action('init', 'zoduaks_myblock_init');