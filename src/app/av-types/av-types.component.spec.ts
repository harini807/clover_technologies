import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvTypesComponent } from './av-types.component';

describe('AvTypesComponent', () => {
  let component: AvTypesComponent;
  let fixture: ComponentFixture<AvTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvTypesComponent]
    });
    fixture = TestBed.createComponent(AvTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
