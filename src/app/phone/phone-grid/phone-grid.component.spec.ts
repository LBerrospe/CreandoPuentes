import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneGridComponent } from './phone-grid.component';

describe('PhoneGridComponent', () => {
  let component: PhoneGridComponent;
  let fixture: ComponentFixture<PhoneGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
