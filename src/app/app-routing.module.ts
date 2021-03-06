import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DepartmentListComponent } from './components/department/list/department-list.component';
import { ResourceListComponent } from './components/resource/list/resource-list.component';
import { ProjectListComponent } from './components/project/list/project-list.component';
import { MilestoneListComponent } from './components/milestone/list/milestone-list.component';
import { TaskListComponent } from './components/task/list/task-list.component';
import { ProjectDetailsComponent } from './components/project/details/project-details.component';
import { TaskDetailsComponent } from './components/task/details/task-details.component';
import { HolidayListComponent } from './components/holiday/list/holiday-list.component';
import { WorkingDayListComponent } from './components/working-day/list/working-day-list.component';
import { AllocationListComponent } from './components/allocation/list/allocation-list.component';
import { TitleListComponent } from './components/title/list/title-list.component';
import { ResourcePlanComponent } from './components/resource/plan/resource-plan.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'departments', component: DepartmentListComponent },
  { path: 'resources', component: ResourceListComponent },
  { path: 'projects', component: ProjectListComponent },
  { path: 'milestones', component: MilestoneListComponent },
  { path: 'tasks', component: TaskListComponent },
  { path: 'tasks/:id', component: TaskDetailsComponent },
  { path: 'projects/:id', component: ProjectDetailsComponent },
  { path: 'holidays', component: HolidayListComponent },
  { path: 'working-days', component: WorkingDayListComponent },
  { path: 'allocations', component: AllocationListComponent},
  { path: 'titles', component: TitleListComponent},
  { path: 'resource-plan', component: ResourcePlanComponent}
];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
