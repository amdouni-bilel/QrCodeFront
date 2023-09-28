import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeProjectComponent} from "../projects/home-project/home-project.component";
import {AddProjectComponent} from "../projects/add-project/add-project.component";
import {EditProjectComponent} from "../projects/edit-project/edit-project.component";
import {HomePhoneComponent} from "./home-phone/home-phone.component";
import {AddPhoneComponent} from "./add-phone/add-phone.component";
import {EditPhoneComponent} from "./edit-phone/edit-phone.component";
import {AffectPhoneToEmployeeComponent} from "./affect-phone-to-employee/affect-phone-to-employee.component";

const routes: Routes = [
  {path:'all' , component:HomePhoneComponent },
  {path:'add' , component:AddPhoneComponent},
  {path:'edit/:id' , component:EditPhoneComponent},
  {path:'affect-phone-to-employee/:id' , component:AffectPhoneToEmployeeComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhonesRoutingModule { }
