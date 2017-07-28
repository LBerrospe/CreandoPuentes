import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridComponent } from './beneficiary/beneficiary-grid/grid.component';
import { BeneficiaryGridItemComponent } from './beneficiary/beneficiary-grid-item/beneficiary-grid-item.component';
import { MainComponent } from './main/main/main.component';
import { SignInComponent } from './main/sign-in/sign-in.component';
import { SignUpComponent } from './main/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    BeneficiaryGridItemComponent,
    MainComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
