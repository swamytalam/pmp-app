import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { Task } from '../../../models/task';
import { TaskLog } from '../../../models/task-log';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  // Private properties for binding
  private sub: any;
  task_id: number;
  tasks: Task[];
  log: string = 'Fill the detaisl here !';

  showTaskLog: boolean = false;
  taskLog: TaskLog[];

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    // Subscribe to route params
    this.sub = this.route.params.subscribe(params => {
      this.task_id = params['id'];
      // Retrieve Task with Id route param
      this.dataService.getTaskById(this.task_id).subscribe(
        tasks => this.tasks = tasks
      );
    });
  }

  getTaskLog() {
    console.log('getTaskLog: ' + this.task_id);
    this.showTaskLog = true;
    this.dataService.getTaskLogById(this.task_id).subscribe(
      taskLog => this.taskLog = taskLog
    );
  }

  saveTaskLog() {
    console.log('save LOG : ' + this.log);
    const taskLogObj = new TaskLog();
    taskLogObj.created_date = new Date();
    taskLogObj.log = this.log;

    this.dataService.saveTaskLog(taskLogObj).subscribe(
      taskLog => this.taskLog = taskLog
    );
  }
}
