import { Component, OnInit } from '@angular/core';
import { Mentor } from '../mentor.model';


@Component({
  selector: 'app-mentor-grid',
  template: `
  <div class="container">
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <!-- search and buttons  -->
        </div>
        <div *ngFor="let mentor of mentors" class="col-lg-3 col-md-4 col-sm-6 col-xs-6">
            <app-mentor-grid-item [mentor]="mentor"></app-mentor-grid-item>
        </div>
    </div>
  </div>
`,
  styleUrls: []
})
export class MentorGridComponent implements OnInit {

  mentors: Mentor[];

  constructor() {
    // this.mentors = [
    //   new Mentor('Lalo'),
    //   new Mentor('Rino'),
    //   new Mentor('Rino'),
    //   new Mentor('Rino'),
    //   new Mentor('Rino'),
    // ];
  }

  ngOnInit() {
  }

}
