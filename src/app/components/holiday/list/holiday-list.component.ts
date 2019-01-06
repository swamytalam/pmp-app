import { Component, OnInit } from '@angular/core';
import { Holiday } from '../../../models/holiday';
import { DataService } from './../../../services/data.service';

@Component({
  selector: 'app-holiday-list',
  templateUrl: './holiday-list.component.html',
  styleUrls: ['./holiday-list.component.css']
})
export class HolidayListComponent implements OnInit {
  holidays: Holiday[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getHolidays();
  }

  getHolidays(): void {
    this.dataService
      .getHolidays()
      .subscribe(holidays => (this.holidays = holidays));
  }
}
