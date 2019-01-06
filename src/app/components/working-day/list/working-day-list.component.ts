import { Component, OnInit } from '@angular/core';
import { WorkingDay } from '../../../models/working-day';
import { DataService } from './../../../services/data.service';

@Component({
  selector: 'app-working-day-list',
  templateUrl: './working-day-list.component.html',
  styleUrls: ['./working-day-list.component.css']
})
export class WorkingDayListComponent implements OnInit {

  workingDays: WorkingDay[];
  totalCount: number;

  constructor(private dataService: DataService) { }

  ngOnInit() {
      this.getHolidays();
  }

  getHolidays(): void {
    this.dataService.getWorkingDays()
      .subscribe(workingDays => this.workingDays = workingDays);
  }

}
