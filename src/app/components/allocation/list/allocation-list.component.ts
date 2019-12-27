import { Component, OnInit, Input } from '@angular/core';
import { Allocation } from '../../../models/allocation';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-allocation-list',
  templateUrl: './allocation-list.component.html',
  styleUrls: ['./allocation-list.component.css']
})
export class AllocationListComponent implements OnInit {

  @Input() allocations: Allocation[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getAllocations();
  }

  getAllocations(): void {
    this.dataService.getAllocations()
      .subscribe(allocations => this.allocations = allocations);
  }

}
