import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productData } from '../models/product-data';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-product-category-component',
  templateUrl: './product-category-component.component.html',
  styleUrls: ['./product-category-component.component.scss']
})
export class ProductCategoryComponentComponent {
  categoryId: string = '';
  subcategoryId: string = '';
  products: any[] = [];
  invalidRoute: boolean = false;
  filteredProducts: any[] = [];
  brands: string[] = [];
  selectedBrands = new Set<string>();
  isFilterVisible = false;
  isMobileView = false;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { 
    this.updateViewMode();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoryId = params['categoryId'];
      this.subcategoryId = params['subcategoryId'];

      if (this.isValidCategoryAndSubcategory(this.categoryId, this.subcategoryId)) {
        this.loadProducts();
        this.invalidRoute = false;
      } else {
        this.invalidRoute = true;
        this.products = [];
        console.error(`Invalid category/subcategory: ${this.categoryId}/${this.subcategoryId}`);
        // Redirect to error page
        this.router.navigate(['/error']);
      }
    });

  }

  @HostListener('window:resize', [])
  onWindowResize() {
      this.updateViewMode(); // Update view mode on window resize
  }

  private updateViewMode() {
    this.isMobileView = window.innerWidth <= 768; // Set mobile view based on window width
  }

  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: MouseEvent) {
    const filterNavbar = document.querySelector('.filter-navbar');
    const filterToggleBtn = document.querySelector('.filter-toggle-btn');
    if (
      this.isMobileView &&
      this.isFilterVisible &&
      filterNavbar &&
      filterToggleBtn &&
      !filterNavbar.contains(event.target as Node) &&
      !filterToggleBtn.contains(event.target as Node)
    ) {
      this.isFilterVisible = false; // Close filter navbar
    }
  }


  toggleFilter() {
    this.isFilterVisible = !this.isFilterVisible;
  }

  isValidCategoryAndSubcategory(category: string, subcategory: string): boolean {
    const categoryData = productData[category as keyof typeof productData];
    if (!categoryData) return false; // Invalid category

    const subcategoryData = categoryData[subcategory as keyof typeof categoryData];
    return !!subcategoryData; // Check if subcategory exists
  }

  loadProducts(): void {
    const categoryData = productData[this.categoryId as keyof typeof productData];
    if (categoryData && categoryData[this.subcategoryId as keyof typeof categoryData]) {
      this.products = categoryData[this.subcategoryId as keyof typeof categoryData];
      this.filteredProducts = [...this.products];

      // Extract unique brands
      this.brands = [
        ...new Set(this.products.flatMap(product => product.brand))
      ];
    }
  }

  toggleBrand(brand: string): void {
    if (this.selectedBrands.has(brand)) {
      this.selectedBrands.delete(brand);
    } else {
      this.selectedBrands.add(brand);
    }
    this.applyFilters();
  }

  applyFilters(): void {
    if (this.selectedBrands.size > 0) {
      this.filteredProducts = this.products.filter(product =>
        product.brand.some((brand: string) => this.selectedBrands.has(brand))
      );
    } else {
      this.filteredProducts = [...this.products];
    }
  }





























}
