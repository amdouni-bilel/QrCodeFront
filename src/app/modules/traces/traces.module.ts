import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TracesRoutingModule } from './traces-routing.module';
import { TraceComponent } from './trace/trace.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import { ModalCarteComponent } from './modal-carte/modal-carte.component';


@NgModule({
  declarations: [
    TraceComponent,
    ModalCarteComponent
  ],
  imports: [
    CommonModule,
    TracesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class TracesModule { }
