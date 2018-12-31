import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { AppComponent } from './app.component';
import { DepartmentListComponent } from './components/department/list/department-list.component';
import { ResourceListComponent } from './components/resource/list/resource-list.component';
import { ProjectListComponent } from './components/project/list/project-list.component';
import { MilestoneListComponent } from './components/milestone/list/milestone-list.component';
import { TaskListComponent } from './components/task/list/task-list.component';
import { ProjectDetailsComponent } from './components/project/details/project-details.component';
import { TaskplannerComponent } from './components/task/taskplanner/taskplanner.component';
import { ResourcePovComponent } from './components/resource/pov/pov.component';
import { TaskDetailsComponent } from './components/task/details/task-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DepartmentListComponent,
    ResourceListComponent,
    ProjectListComponent,
    MilestoneListComponent,
    TaskListComponent,
    HeaderComponent,
    ProjectDetailsComponent,
    TaskplannerComponent,
    ResourcePovComponent,
    TaskDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
