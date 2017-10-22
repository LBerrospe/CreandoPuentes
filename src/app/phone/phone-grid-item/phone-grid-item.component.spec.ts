import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneGridItemComponent } from './phone-grid-item.component';

describe('PhoneGridItemComponent', () => {
  let component: PhoneGridItemComponent;
  let fixture: ComponentFixture<PhoneGridItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneGridItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
