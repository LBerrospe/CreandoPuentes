import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiaryGridItemComponent } from './beneficiary-grid-item.component';

describe('BeneficiaryGridItemComponent', () => {
  let component: BeneficiaryGridItemComponent;
  let fixture: ComponentFixture<BeneficiaryGridItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficiaryGridItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiaryGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
