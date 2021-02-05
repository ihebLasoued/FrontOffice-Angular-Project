import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProduitService } from '../services/produit.service';
import * as $ from "jquery";
import 'jqueryui';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  product:Product;
  products:Product[];
  imagePath="http://127.0.0.1:8000/uploads/products/"
  constructor(private produitService:ProduitService) { }
initSilder()
{

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4";
  fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  $(document).ready(function() {
    (<any>$('#slideshow')).nivoSlider();
});
(function() {
  // store the slider in a local variable
  var $window = $(window),
      flexslider;

  // tiny helper function to add breakpoints
  function getGridSize() {
    return (window.innerWidth < 320) ? 1 :
		   (window.innerWidth < 600) ? 2 :
		   (window.innerWidth < 800) ? 3 :
           (window.innerWidth < 900) ? 4 : 5;
  }
  $window.on('load',function() {
    (<any>  $('#content .featured_carousel')).flexslider({
      animation: "slide",
      animationLoop: false,
	  slideshow: false,
      itemWidth: 210,
      minItems: getGridSize(), // use function to pull in initial value
      maxItems: getGridSize() // use function to pull in initial value
    });
  });
}());
(function() {
  // store the slider in a local variable
  var $window = $(window),
      flexslider;
  // tiny helper function to add breakpoints
  function getGridSize() {
    return (window.innerWidth < 320) ? 1 :
		   (window.innerWidth < 600) ? 2 :
		   (window.innerWidth < 800) ? 3 :
           (window.innerWidth < 900) ? 4 : 5;
  }
  $window.on('load',function() {
    (<any> $('#product-tab .featured_carousel_tab, #product-tab .latest_carousel_tab, #product-tab .bestseller_carousel_tab, #product-tab .special_carousel_tab')).flexslider({
      animation: "slide",
      animationLoop: false,
	  slideshow: false,
      itemWidth: 210,
      minItems: getGridSize(), // use function to pull in initial value
      maxItems: getGridSize(), // use function to pull in initial value
	  start: function(){
		  $("#product-tab .tab_content").addClass("deactive");
		  $("#product-tab .tab_content:first").removeClass("deactive"); //Show first tab content
		  } });
  });

$(document).ready(function() {
    //Default Action
    $("ul#tabs li:first").addClass("active").show(); //Activate first tab
    //On Click Event
    $("ul#tabs li").click(function() {
        $("ul#tabs li").removeClass("active"); //Remove any "active" class
        $(this).addClass("active"); //Add "active" class to selected tab
		$("#product-tab .tab_content").hide();
        var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
        $(activeTab).fadeIn(); //Fade in the active content
        return false;
    });
});}());
}
  ngOnInit(): void {
  /*  this.produitService.listeProduct().subscribe((data: Product[])=> {
      console.log(data);

      this.products = data;
    });*/
    this.initSilder()
  }


}
