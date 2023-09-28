import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhonesRoutingModule } from './phones-routing.module';
import { HomePhoneComponent } from './home-phone/home-phone.component';
import { EditPhoneComponent } from './edit-phone/edit-phone.component';
import { AddPhoneComponent } from './add-phone/add-phone.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import { AffectPhoneToEmployeeComponent } from './affect-phone-to-employee/affect-phone-to-employee.component';


@NgModule({
  declarations: [
    HomePhoneComponent,
    EditPhoneComponent,
    AddPhoneComponent,
    AffectPhoneToEmployeeComponent
  ],
  imports: [
    CommonModule,
    PhonesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class PhonesModule { }
