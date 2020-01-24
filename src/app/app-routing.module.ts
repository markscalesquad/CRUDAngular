import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectAddComponent } from './project-add/project-add.component';
import { ProjectGetComponent } from './project-get/project-get.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';

const routes: Routes = [
  {
    path: 'project/create',
    component: ProjectAddComponent
  },
  {
    path: 'edit/:id',
    component: ProjectEditComponent
  },
  {
    path: 'projects',
    component: ProjectGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
