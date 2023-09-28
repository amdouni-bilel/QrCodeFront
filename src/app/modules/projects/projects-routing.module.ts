import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeProjectComponent} from "./home-project/home-project.component";
import {EditProjectComponent} from "./edit-project/edit-project.component";
import {AddProjectComponent} from "./add-project/add-project.component";

const routes: Routes = [
  {path:'all' , component:HomeProjectComponent},
  {path:'add' , component:AddProjectComponent},
  {path:'edit/:id' , component:EditProjectComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
