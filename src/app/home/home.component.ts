import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Product';
import { Item } from '../shared/Item';
import { ProduitService } from '../shared/services/produit.service';
import { StorageService } from '../shared/services/storage.service';
import { UserService } from '../shared/services/user.service';
//import swal from 'sweetalert';


declare var jQuery : any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  product:Product;
  products:Product[];
item:Item;


  imagePath="http://127.0.0.1:8000/uploads/products/"
  constructor(private produitService:ProduitService,private userService:UserService,private storageService:StorageService, private router: Router ) { }

  ngOnInit(): void {
    this.item = new Item();
    console.log();

   this.produitService.listeProduct().subscribe((data: Product[])=> {


      this.products = data;
    });

    jQuery('#slideshow').nivoSlider();
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
      $window.load(function() {
        jQuery('#content .featured_carousel').flexslider({
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
      $window.load(function() {
        jQuery('#product-tab .featured_carousel_tab, #product-tab .latest_carousel_tab, #product-tab .bestseller_carousel_tab, #product-tab .special_carousel_tab').flexslider({
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
    (!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}});jQuery(document,"script","twitter-wjs");
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }
acheterProduct(id)
{
if(this.storageService.getUser()!==null)
  this.userService.acheterProduit(this.storageService.getUser().user.id,id,this.item).subscribe(data=> {
  //  swal("Good job!", "Product buyed", "success");


  });
  else{
    this.router.navigate(['/user/login']);
  }
}



}
