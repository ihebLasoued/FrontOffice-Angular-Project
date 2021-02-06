import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../Product';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http: HttpClient) { }
  listeProduct() {
    return this.http.get<Product[]>("http://127.0.0.1:8000/api/allProduct");
  }
}
