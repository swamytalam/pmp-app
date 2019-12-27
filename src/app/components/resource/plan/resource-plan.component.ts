import { DataService } from './../../../services/data.service';
import { ResourcePlan } from './../../../models/resource-plan';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resource-plan',
  templateUrl: './resource-plan.component.html',
  styleUrls: ['./resource-plan.component.css']
})
export class ResourcePlanComponent implements OnInit {

  @Input() resourcePlan: ResourcePlan[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getResourcePlan();
  }

 getResourcePlan(): void {
    this.dataService.getResourcePlan().
    subscribe(resourcePlan => this.resourcePlan = resourcePlan)
  };

}
