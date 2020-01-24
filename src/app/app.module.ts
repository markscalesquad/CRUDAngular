import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectAddComponent } from './project-add/project-add.component';
import { ProjectGetComponent } from './project-get/project-get.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { ProjectsService } from './projects.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectAddComponent,
    ProjectGetComponent,
    ProjectEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ProjectsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
