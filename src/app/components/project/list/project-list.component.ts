import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Project } from '../../../models/project';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  @Input() projects: Project[];

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getProjects(id)
      .subscribe(projects => this.projects = projects);
  }

}
