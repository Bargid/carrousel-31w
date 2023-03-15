<?php

/**
 * Extension carrousel qui permet d'afficher dans une boite modale, les images d'une galerie
 * Package name : Carrousel
 * Version: 1.0.0
 */


 /**
  * Plugin name: Carrousel
  * Author: Louis Roby
  * Plugin URI: https:github.com/eddytuto/carrousel 
  * Description: Permet d'afficher dans une boite modale, les images d'une galerie avec un système de navigation
  */

  function carrousel_enqueue() {

    $version_css = filemtime(plugin_dir_path(__FILE__ ) . "style.css");
    $version_js = filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");
    
    wp_enqueue_style(   'em_plugin_carrousel_css',
    plugin_dir_url(__FILE__) . "style.css",
    array(),
    $version_css);
    
    wp_enqueue_script(   'em_plugin_carrousel_js',
    plugin_dir_url(__FILE__) ."js/carrousel.js",
    array(),
    $version_js,
    true);
  }

  add_action('wp_enqueue_scripts', 'carrousel_enqueue');


  function creation_carrousel() {

    return '<button class="boutonouvrir">Ouvrir</button>
            <div class="carrousel">
            <button class="boutonx">X</button>
            <figure class="carrouselfigure"></figure>
            <form class="carrouselform"></form>
            </div>';
  }

  add_shortcode('carrousel', 'creation_carrousel');
    
 ?>