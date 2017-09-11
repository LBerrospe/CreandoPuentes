import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorGridItemComponent } from './mentor-grid-item.component';

describe('MentorGridItemComponent', () => {
  let component: MentorGridItemComponent;
  let fixture: ComponentFixture<MentorGridItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorGridItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
