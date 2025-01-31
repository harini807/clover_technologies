import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductCategoryComponentComponent } from './product-category-component/product-category-component.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    ContactComponent,
    ProductsComponent,
    ProductDetailsComponent,
    ProductCategoryComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CollapseModule.forRoot(), 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
