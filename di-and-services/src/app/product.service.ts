import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts(): Array<Product> {
    var products: Array<Product> = [
      new Product('Bugatti Divo', 'Auto', 2000000),
      new Product('65 inch UHDTV', 'TV/Audio', 1800),
      new Product('Climbing shoes', 'Sports equipment', 90),
      new Product('Ice picks', 'Sports equipment', 150),
    ];
    return products;
  }
}
