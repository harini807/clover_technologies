import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  // products: Product[] = [];

  // constructor(private productService: ProductService, private router: Router) {}

  // ngOnInit(): void {
  //   this.products = this.productService.getProducts();
  // }

  // viewProductDetails(productId: number): void {
  //   this.router.navigate(['/product-details', productId]);
  // }
}
