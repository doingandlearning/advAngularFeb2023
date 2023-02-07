import { Component } from '@angular/core';
import { Product } from '../classes/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  // providers: [ProductService],
})
export class ProductListComponent {
  public products: Array<Product>;

  constructor(productService: ProductService) {
    this.products = productService.getProducts();
  }
}
