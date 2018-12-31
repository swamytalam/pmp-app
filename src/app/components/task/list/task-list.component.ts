import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../../models/task';
import { DataService } from '../../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() tasks: Task[];

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.dataService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }

}
