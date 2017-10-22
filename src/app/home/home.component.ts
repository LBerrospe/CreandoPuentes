import { Component, OnInit } from '@angular/core';
import { Option } from './option.model';

@Component({
  selector: 'app-home',
  template: `
  <div class="container">
    <div class="row">
      <div *ngFor="let opt of options" class="col-lg-4 col-md-6 col-sm-6 col-xs-6">
        <a href="{{ opt.href }}">  
          <div class="grid-item {{ opt.color }}">
            <i class="{{ opt.fa }}" aria-hidden="true"></i>
            <legend>{{ opt.opt }}</legend>
          </div>
        </a> 
      </div>
    </div>
  </div>
  `,
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  options: Option[];

  constructor() {
    this.options = [
      new Option('#', 'fa fa-child', 'Beneficiario', Option.GREEN),
      new Option('#', 'fa fa-male', 'Representante', Option.ORANGE),
      new Option('#', 'fa fa-bar-chart', 'Puntuacion', Option.AMBER),
      new Option('#', 'fa fa-calendar', 'Calendario', Option.PINK),
      new Option('#', 'fa fa-phone', 'Telefonos', Option.BROWN),
      new Option('#', 'fa fa-university', 'Prestadores', Option.BLUE),
    ];
  }

  ngOnInit() {
  }

}
