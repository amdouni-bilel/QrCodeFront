import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./layouts/home/home.component";
import {LoginComponent} from "./modules/auth/login/login.component";
import {RegisterComponent} from "./modules/auth/register/register.component";

const routes: Routes = [
  {path : 'login' , component:LoginComponent},
  {path : 'register' , component:RegisterComponent},
//  {path:'profile' , component:UserProfileComponent},

  {path:'', component:HomeComponent ,
    children: [
      {path:'project' , loadChildren:()=>import('./modules/projects/projects.module').then(p=>p.ProjectsModule)},
      {path:'phone' , loadChildren:()=>import('./modules/phones/phones.module').then(p=>p.PhonesModule)},
      {path:'employees' , loadChildren:()=>import('./modules/employees/employees.module').then(p=>p.EmployeesModule)},
      {path:'assign' , loadChildren:()=>import('./modules/assign/assign.module').then(p=>p.AssignModule)},
      {path:'traces' , loadChildren:()=>import('./modules/traces/traces.module').then(p=>p.TracesModule)},

    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
