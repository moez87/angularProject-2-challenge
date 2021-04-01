import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AddCantactComponent } from './add-cantact/add-cantact.component';
import { UpdateCantactComponent } from './update-cantact/update-cantact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [DashboardComponent, AddCantactComponent, UpdateCantactComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class DashboardModule { }
