import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeProjectComponent} from "../projects/home-project/home-project.component";
import {TraceComponent} from "./trace/trace.component";

const routes: Routes = [
  {path:'' , component:TraceComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TracesRoutingModule { }
