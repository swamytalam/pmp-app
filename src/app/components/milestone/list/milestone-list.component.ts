import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Milestone } from '../../../models/milestone';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-milestone-list',
  templateUrl: './milestone-list.component.html',
  styleUrls: ['./milestone-list.component.css']
})
export class MilestoneListComponent implements OnInit {

  @Input() milestones: Milestone[];

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService) { }

  ngOnInit() {
    this.getMilestones();
  }

  getMilestones(): void {
     this.dataService.getMilestones()
      .subscribe(milestones => this.milestones = milestones);
  }

  getMilestonesByProjectId(): void {
    const project_id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getMilestonesByProjectId(project_id)
      .subscribe(milestones => this.milestones = milestones);
  }

}
