import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AffectPhoneToEmployeeComponent} from "../phones/affect-phone-to-employee/affect-phone-to-employee.component";
import {AssignPhoneToEmployeeComponent} from "./assign-phone-to-employee/assign-phone-to-employee.component";
import {PhonesEmployeesComponent} from "./phones-employees/phones-employees.component";
import {AssignProjectToEmployeeComponent} from "./assign-project-to-employee/assign-project-to-employee.component";
import {ProjectsEmployeesComponent} from "./projects-employees/projects-employees.component";

const routes: Routes = [
  {path:'assign-phone-to-employee/:id' , component:AssignPhoneToEmployeeComponent},
  {path:'phone-employees' , component:PhonesEmployeesComponent},
  {path:'assign-project-to-employee' , component:AssignProjectToEmployeeComponent},
  {path:'project-employees' , component:ProjectsEmployeesComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignRoutingModule { }
