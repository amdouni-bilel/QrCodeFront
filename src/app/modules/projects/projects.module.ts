import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { AddProjectComponent } from './add-project/add-project.component';
import { HomeProjectComponent } from './home-project/home-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    AddProjectComponent,
    HomeProjectComponent,
    EditProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class ProjectsModule { }
