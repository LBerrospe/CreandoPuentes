import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
  <div class="container">
    <div class="row">
        <div class="col-lg-4 col-md-5 col-sm-6 col-xs-6">
            <app-sign-in></app-sign-in>
        </div>
        <div class="col-lg-4 col-md-5 col-sm-6 col-xs-6">
            <app-sign-up></app-sign-up>
        </div>
    </div>
  </div>
  `,
  styleUrls: []
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
