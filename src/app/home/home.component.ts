import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProduitService } from '../shared/services/produit.service';
declare var jQuery : any;

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

  ngOnInit(): void {
  /*  this.produitService.listeProduct().subscribe((data: Product[])=> {
      console.log(data);

      this.products = data;
    });*/
    jQuery('#slideshow').nivoSlider();
  }


}
