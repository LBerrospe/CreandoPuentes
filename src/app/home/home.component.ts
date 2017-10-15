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
            <i class="{{ opt.fa }}" aria-hidden="true"></i>
            <figcaption>{{ opt.opt }}</figcaption>
          </figure>
        </a> 
      </div>
    </div>
  </div>
  `,
  styleUrls: []
})
export class HomeComponent implements OnInit {
  options: Option[];

  constructor() {
    this.options = [
      new Option('#', 'fa fa-child', 'Beneficiario'),
      new Option('#', 'fa fa-male', 'Representante'),
      new Option('#', 'fa fa-bar-chart', 'Puntuacion'),
      new Option('#', 'fa fa-calendar', 'Calendario'),
      new Option('#', 'fa fa-phone', 'Telefonos'),
      new Option('#', 'fa fa-university', 'Prestadores'),
    ];
  }

  ngOnInit() {
  }

}
