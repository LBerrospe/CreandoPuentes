import { Component, OnInit, Input } from '@angular/core';
import { Beneficiary } from '../beneficiary.model';

@Component({
  selector: 'app-beneficiary-grid-item',
  templateUrl: './beneficiary-grid-item.component.html',
  styleUrls: ['./beneficiary-grid-item.component.css']
})
export class BeneficiaryGridItemComponent implements OnInit {

  @Input() beneficiary: Beneficiary;

  constructor() { }

  ngOnInit() {
  }

}
