import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

// import { UserService } from '../../../user-service';
/**
 * 
 */
@Component({
  selector: 'app-sign-in',
  template: `
  <div class="sign-in">
    <form [formGroup]="signInForm" (ngSubmit)="onSignIn(signInForm.value)">
        <div class="form-group">
            <label for="email-sign-in">Correo</label>
            <input id="email-sign-in" type="email" class="form-control" placeholder="Correo" [formControl]="signInForm.get('email')" [(ngModel)]="email">
        </div>
        <div class="form-group">
            <label for="password-sign-in">Contraseña</label>
            <input [formControl]="signInForm.get('password')" [(ngModel)]="password" type="password" class="form-control" id="password-sign-in" placeholder="Contraseña">
        </div>
        <button type="submit" class="btn btn-success">Continuar</button>
    </form>
  </div>
  `,
  styleUrls: []
})
export class SignInComponent {
  /** */
  signInForm: FormGroup;
  /** */
  email: string;
  password: string;
  
  /**
   * 
   * @param fb 
   * @param userService 
   */
  constructor(fb: FormBuilder) { 
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
    console.log('you submitted value: ', value);
  }//onSignIn

}//class
