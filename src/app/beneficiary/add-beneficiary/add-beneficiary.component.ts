import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IMyDpOptions } from 'mydatepicker';

@Component({
  selector: 'app-add-beneficiary',
  templateUrl: './add-beneficiary.component.html',
  styleUrls: ['./add-beneficiary.component.css']
})
export class AddBeneficiaryComponent implements OnInit {
  /** */
  private beneficiaryForm: FormGroup;
  private dateOpts: IMyDpOptions = {
    dateFormat: 'dd/mm/yyyy',
    indicateInvalidDate: true,
  };

  constructor(fb: FormBuilder) {
    this.beneficiaryForm = fb.group({
      name: [], 
      lastName: [], 
      nickname: [],
      curp: [], 
      birthday: [null, Validators.required],
      gender: ['female', Validators.required],
      neighborhood: [],
      street: [],
      numberExt: [],
      numberInt: [],
      betweenOne: [],
      betweenTwo: [],      
      schedule: ['morning', Validators.required],
      dinningRoom: [],
      status: ['active', Validators.required],
      shirt: [],
      pants: [],
      shoes: [],
    });
  }

  ngOnInit() {
  }

  onAddBeneficiary(value: string) {
    console.log('you submitted value: ', value);
  }// onSignUp

}
