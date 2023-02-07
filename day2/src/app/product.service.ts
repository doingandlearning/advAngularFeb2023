import { Injectable } from '@angular/core';
import { Product } from './classes/product';

@Injectable()
export class ProductService {
  constructor() {}
  // Calling out an API
  // Reaching to LocalStorage
  // WebSocket
  getProducts() {
    const products = [
      new Product('Climbing Shoes', 'Sports Equipment', 90),
      new Product('Ice picks', 'Sports Equipment', 100),
    ];
    return products;
  }
}
