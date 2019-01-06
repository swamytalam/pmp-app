import { Component, OnInit, Input } from '@angular/core';
import { Milestone } from '../../../models/milestone';
import { Department } from '../../../models/department';
import { Resource } from '../../../models/resource';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../../../services/data.service';
import { Task } from '../../../models/task';

@Component({
  selector: 'app-task-planner',
  templateUrl: './taskplanner.component.html',
  styleUrls: ['./taskplanner.component.css']
})
export class TaskplannerComponent implements OnInit {

  @Input() milestones: Milestone[];
  @Input() departments: Department[];
  @Input() resources: Resource[];
  @Input() project_id: number;

  model: Task = new Task();
  submitted = false;

  constructor(private dataService: DataService) {
    //  this.taskForm = this.createTaskFormGroup();
  }

  ngOnInit() {
  }

  createTask() {
    this.model.project_id = this.project_id;
    console.log(this.model.name);
    console.log(this.model.project_id);
    console.log(this.model.milestone_id);
    console.log(this.model.resource_id);
    console.log(this.model.planned_start_date);
    console.log(this.model.planned_end_date);
    console.log(this.model.status);

    this.dataService.createTask(this.model);

  }
}
