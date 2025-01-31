import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  // product?: Product;

  // constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {}

  // ngOnInit(): void {
  //   const productId = Number(this.route.snapshot.paramMap.get('id'));
  //   this.product = this.productService.getProductById(productId);
  // }
}
