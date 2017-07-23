import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { BeneficiaryGridItemComponent } from './beneficiary-grid-item/beneficiary-grid-item.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    BeneficiaryGridItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
