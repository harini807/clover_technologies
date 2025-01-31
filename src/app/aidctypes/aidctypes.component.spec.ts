import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIDCTypesComponent } from './aidctypes.component';

describe('AIDCTypesComponent', () => {
  let component: AIDCTypesComponent;
  let fixture: ComponentFixture<AIDCTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AIDCTypesComponent]
    });
    fixture = TestBed.createComponent(AIDCTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
