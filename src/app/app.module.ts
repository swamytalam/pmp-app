import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormBuilder } from '@angular/forms';
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
import { WorkingDayListComponent } from './components/working-day/list/working-day-list.component';
import { HolidayListComponent } from './components/holiday/list/holiday-list.component';
import { TitleListComponent } from './components/title/list/title-list.component';
import { AllocationListComponent } from './components/allocation/list/allocation-list.component';
import { ResourcePlanComponent } from './components/resource/plan/resource-plan.component';

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
    TaskDetailsComponent,
    WorkingDayListComponent,
    HolidayListComponent,
    TitleListComponent,
    AllocationListComponent,
    ResourcePlanComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
