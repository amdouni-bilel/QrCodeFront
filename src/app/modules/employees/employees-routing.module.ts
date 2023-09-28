import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePhoneComponent} from "../phones/home-phone/home-phone.component";
import {AddPhoneComponent} from "../phones/add-phone/add-phone.component";
import {EditPhoneComponent} from "../phones/edit-phone/edit-phone.component";
import {HomeEmployeeComponent} from "./home-employee/home-employee.component";
import {AddEmployeeComponent} from "./add-employee/add-employee.component";
import {EditEmployeeComponent} from "./edit-employee/edit-employee.component";

const routes: Routes = [
  {path:'all' , component:HomeEmployeeComponent },
  {path:'add' , component: AddEmployeeComponent },
  {path:'edit/:id' , component: EditEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
