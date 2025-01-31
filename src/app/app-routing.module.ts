import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { ProductCategoryComponentComponent } from './product-category-component/product-category-component.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home',component:HomepageComponent},
  {path: 'about', component: AboutPageComponent },
  {path: 'contact', component: ContactComponent},
  { path: 'products', component: ProductsComponent },

  // For both category ID and subcategory ID path (example: barcode-scanners)
  { path: 'products/:categoryId/:subcategoryId', component: ProductCategoryComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
