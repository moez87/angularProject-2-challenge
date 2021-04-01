import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCantactComponent } from './add-cantact/add-cantact.component';
import { DashboardComponent } from './dashboard.component';
import { UpdateCantactComponent } from './update-cantact/update-cantact.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'add', component: AddCantactComponent },
  { path: 'update/:id', component: UpdateCantactComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
