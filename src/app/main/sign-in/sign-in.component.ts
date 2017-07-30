import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { UserService } from '../../../user-service';
/**
 * 
 */
@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  /** */
  signInForm: FormGroup;
  /** */
  email: string;
  
  /**
   * 
   * @param fb 
   */
  constructor(fb: FormBuilder, private userService: UserService ) { 
    this.signInForm = fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    }); //this.signInForm
  }//constructor

  /**
   * 
   * @param value 
   */
  onSignIn(value: string) {
    this.userService.setUser({
      name: 'user'
    });
  }//onSignIn

}//class
