import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryComponentComponent } from './product-category-component.component';

describe('ProductCategoryComponentComponent', () => {
  let component: ProductCategoryComponentComponent;
  let fixture: ComponentFixture<ProductCategoryComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCategoryComponentComponent]
    });
    fixture = TestBed.createComponent(ProductCategoryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
