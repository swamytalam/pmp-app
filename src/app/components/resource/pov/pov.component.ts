import { Component, OnInit, Input } from '@angular/core';
import { ResourcePOV } from 'src/app/models/resource-pov';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-resource-pov',
  templateUrl: './pov.component.html',
  styleUrls: ['./pov.component.css']
})
export class ResourcePovComponent implements OnInit {

  @Input() resourcePOV: ResourcePOV[];
  @Input() week_number: number;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  getResourcePOV() {
    console.log('POV Comopnent:: getResourcePOV :: week :: ' + this.week_number);
    this.dataService.getResourcePOV(this.week_number).subscribe(
      resourcePOV => this.resourcePOV = resourcePOV
    );

  }
}
