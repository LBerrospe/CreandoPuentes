import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/**
 * 
 */
@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  /** */
  signUpForm: FormGroup;
  /** */
  readonly days = [
    '1','2','3','4'
  ];
  readonly months = [
    'Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio',
    'Agosto','Septiembre','Octubre','Noviembre','Diciembre'
  ];
  readonly years = [
    '1990','1991'
  ];
    
  constructor(fb: FormBuilder) { 
    this.signUpForm = fb.group({
      'name': [],
      'lastName': [],
      'email': [],
      'password': [],
      'day': [],
      'month': [],
      'year': [],
      'gender': []
    });
  }//constructor

  onSignUp(value: string) {
    console.log('you submitted value: ', value);
  }//onSignUp

}
