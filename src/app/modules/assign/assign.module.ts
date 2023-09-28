import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignRoutingModule } from './assign-routing.module';
import { AssignPhoneToEmployeeComponent } from './assign-phone-to-employee/assign-phone-to-employee.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import { PhonesEmployeesComponent } from './phones-employees/phones-employees.component';
import { ProjectsEmployeesComponent } from './projects-employees/projects-employees.component';
import { AssignProjectToEmployeeComponent } from './assign-project-to-employee/assign-project-to-employee.component';
import {MatSelectModule} from "@angular/material/select";
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {AppModule} from "../../app.module";
import {MultiDropdownComponent} from "./multi-dropdown/multi-dropdown.component";
//import {NgxQRCodeModule} from "ngx-qrcode2";
//import { QRCodeModule } from 'angularx-qrcode';
//import {NgxQRCodeModule, QRCodeModule} from "ngx-qrcode2";


@NgModule({
  declarations: [
    AssignPhoneToEmployeeComponent,
    PhonesEmployeesComponent,
    ProjectsEmployeesComponent,
    AssignProjectToEmployeeComponent,
    MultiDropdownComponent

  ],
  imports: [
    CommonModule,
    AssignRoutingModule,

    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    // NgxQRCodeModule,
    //QRCodeModule,
    RouterModule,
    MatSelectModule,
    MDBBootstrapModule,
  ]
})
export class AssignModule { }
