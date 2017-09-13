import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IMyDpOptions } from 'mydatepicker';
/**
 * asda
 */
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  /** */
  private signUpForm: FormGroup;
  private dateOpts: IMyDpOptions = {
    dateFormat: 'dd/mm/yyyy',
    indicateInvalidDate: true,
  };

  constructor(fb: FormBuilder) {
    this.signUpForm = fb.group({
      'name': [],
      'lastName': [],
      'email': [],
      'password': [],
      'password2': [],
      'birthday': [null, Validators.required],
      'gender': ['female', Validators.required]
    });
  }// constructor

  onSignUp(value: string) {
    console.log('you submitted value: ', value);
  }// onSignUp

}
