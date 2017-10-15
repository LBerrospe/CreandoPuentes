import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMentorComponent } from './add-mentor.component';

describe('AddMentorComponent', () => {
  let component: AddMentorComponent;
  let fixture: ComponentFixture<AddMentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
