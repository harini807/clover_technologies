import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../Services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

constructor(private router: Router) {}

redirectToProduct(): void {
  this.router.navigate(['/products']); // Replace 'target-route' with your desired route
}
}
