import { Component, OnInit } from '@angular/core';
import { Option } from './option.model';

@Component({
  selector: 'app-home',
  template: `
  <div class="container">
    <div class="row">
      <div *ngFor="let opt of options" class="col-lg-4 col-md-6 col-sm-6 col-xs-6">
        <a href="{{ opt.href }}">  
          <figure>
            <img src="{{ opt.img }}" alt="{{ opt.alt }}">
            <figcaption>{{ opt.figCaption }}</figcaption>
          </figure>
        </a> 
      </div>
    </div>
  </div>
  `,
  styleUrls: []
})
export class HomeComponent implements OnInit {
  IMGS_URL = '../../assets/imgs/';
  options: Option[];

  constructor() {
    this.options = [
      new Option('#', this.IMGS_URL + '', 'A', 'Fig caption (:'),
      new Option('#', this.IMGS_URL + '', 'B', 'Fig caption (:'),
      new Option('#', this.IMGS_URL + '', 'C', 'Fig caption (:'),
      new Option('#', this.IMGS_URL + '', 'D', 'Fig caption (:'),
      new Option('#', this.IMGS_URL + '', 'E', 'Fig caption (:'),
      new Option('#', this.IMGS_URL + '', 'F', 'Fig caption (:'),
    ];
  }

  ngOnInit() {
  }

}
