import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorGridComponent } from './mentor-grid.component';

describe('MentorGridComponent', () => {
  let component: MentorGridComponent;
  let fixture: ComponentFixture<MentorGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
