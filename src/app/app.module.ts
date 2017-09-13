import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
// https://material.angular.io/
import { AppComponent } from './app.component';
import { BeneficiaryGridComponent } from './beneficiary/beneficiary-grid/grid.component';
import { BeneficiaryGridItemComponent } from './beneficiary/beneficiary-grid-item/beneficiary-grid-item.component';
import { MainComponent } from './main/main/main.component';
import { SignInComponent } from './main/sign-in/sign-in.component';
import { SignUpComponent } from './main/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { MentorGridComponent } from './mentor/mentor-grid/mentor-grid.component';
import { MentorGridItemComponent } from './mentor/mentor-grid-item/mentor-grid-item.component';
import { ScoreComponent } from './score/score.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ProviderComponent } from './provider/provider.component';
import { PhoneComponent } from './phone/phone.component';
import { AddBeneficiaryComponent } from './beneficiary/add-beneficiary/add-beneficiary.component';
// https://github.com/kekeh/mydatepicker#options-attribute
import { MyDatePickerModule } from 'mydatepicker';
import { CalendarModule } from 'angular-calendar';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: '' },
  { path: 'home', component: HomeComponent },
  { path: 'beneficiary', component: BeneficiaryGridComponent },
  { path: 'mentor', component: MentorGridComponent},
  { path: 'score', component: ScoreComponent},
  { path: 'calendar', component: CalendarComponent},
  { path: 'phone', component: PhoneComponent},
  { path: 'provider', component: ProviderComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    BeneficiaryGridComponent,
    BeneficiaryGridItemComponent,
    MainComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    MentorGridComponent,
    MentorGridItemComponent,
    ScoreComponent,
    CalendarComponent,
    ProviderComponent,
    PhoneComponent,
    AddBeneficiaryComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MyDatePickerModule,
    CalendarModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
