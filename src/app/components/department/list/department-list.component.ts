import { Component, OnInit, Input } from '@angular/core';
import { Department } from '../../../models/department';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  @Input() departments: Department[];

  constructor(private route: ActivatedRoute,
    private dataService: DataService) {
  }

  ngOnInit() {
    this.getDepartments();
  }

  getDepartments(): void {
    this.dataService.getDepartments()
      .subscribe(departments => this.departments = departments);
  }

}
