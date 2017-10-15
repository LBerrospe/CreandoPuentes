import { Component, OnInit, Input } from '@angular/core';
import { Mentor } from '../mentor.model';

@Component({
  selector: 'app-mentor-grid-item',
  templateUrl: './mentor-grid-item.component.html',
  styleUrls: ['./mentor-grid-item.component.css']
})
export class MentorGridItemComponent implements OnInit {

  @Input() mentor: Mentor;

  constructor() { }

  ngOnInit() {
  }

}
