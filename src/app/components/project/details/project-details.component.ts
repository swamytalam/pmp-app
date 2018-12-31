import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../../models/project';
import { DataService } from 'src/app/services/data.service';
import { Milestone } from '../../../models/milestone';
import { Task } from '../../../models/task';
import { Resource } from '../../../models/resource';
import { Department } from '../../../models/department';
import { ResourcePOV } from '../../../models/resource-pov';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})

export class ProjectDetailsComponent implements OnInit {

  // Private properties for binding
  private sub: any;
  @Input() projects: Project[];

  milestones: Milestone[];
  tasks: Task[];
  resourcePOV: ResourcePOV[];

  project_id: number;
  today: Date = new Date();

  showMilestones: boolean = false;
  showTasks: boolean = false;
  showTaskPlanner: boolean = false;
  showResourcePOV: boolean = false;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    // Subscribe to route params
    this.sub = this.route.params.subscribe(params => {
      this.project_id = params['id'];
      // Retrieve Project with Id route param
      this.dataService.getProjectById(this.project_id).subscribe(
        projects => this.projects = projects
      );
    });

  }

  getMilestones() {
    this.showMilestones = true;
    this.showTasks = false;
    this.showTaskPlanner = false;
    this.showResourcePOV = false;
    this.dataService.getMilestonesByProjectId(this.project_id).subscribe(
      milestones => this.milestones = milestones
    );
  }

  getTasks() {
    this.showTasks = true;
    this.showMilestones = false;
    this.showTaskPlanner = false;
    this.showResourcePOV = false;
    this.dataService.getTasksByProjectId(this.project_id).subscribe(
      tasks => this.tasks = tasks
    );
  }

  enableTaskPlanner() {
    if (!this.milestones) {
      this.getMilestones();
    }

    this.showTaskPlanner = true;
    this.showMilestones = false;
    this.showTasks = false;
    this.showResourcePOV = false;
  }

  getResourcePOV(week: number) {
    this.showResourcePOV = true;
    this.showTaskPlanner = false;
    this.showMilestones = false;
    this.showTasks = false;
    // {{today | date:'w'}}

    this.dataService.getResourcePOV(week).subscribe(
      resourcePOV => this.resourcePOV = resourcePOV
    );

  }

}
