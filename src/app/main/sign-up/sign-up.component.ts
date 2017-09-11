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
  
  /** */
  // readonly days = [
  //   '1', '2', '3', '4'
  // ];
  // readonly months = [
  //   'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
  //   'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  // ];
  // readonly years = [
  //   '1990', '1991'
  // ];

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
