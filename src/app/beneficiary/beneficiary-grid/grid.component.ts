import { Component, OnInit } from '@angular/core';
import { Beneficiary } from '../beneficiary.model';


@Component({
  selector: 'beneficiary-grid',
  template: `
  <div class="container">
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <!-- search and buttons  -->
        </div>
        <div *ngFor="let beneficiary of beneficiarys" class="col-lg-3 col-md-4 col-sm-6 col-xs-6">
            <beneficiary-grid-item [beneficiary]="beneficiary"></beneficiary-grid-item>
        </div>
    </div>
  </div>
`,
  styleUrls: []
})
export class BeneficiaryGridComponent implements OnInit {

  beneficiarys: Beneficiary[];

  constructor() {
    // this.beneficiarys = [
    //   new Beneficiary('Lalo'),
    //   new Beneficiary('Rino'),
    //   new Beneficiary('Rino'),
    //   new Beneficiary('Rino'),
    //   new Beneficiary('Rino'),
    // ];
  }

  ngOnInit() {
  }

}
