import { Component, OnInit, Input } from '@angular/core';
import { Resource } from '../../../models/resource';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent implements OnInit {

  @Input() resources: Resource[];

  constructor(private route: ActivatedRoute,
    private dataService: DataService) {
  }

  ngOnInit() {
    this.getResources();
  }

  getResources(): void {
    this.dataService.getResources()
      .subscribe(resources => this.resources = resources);
  }

}
