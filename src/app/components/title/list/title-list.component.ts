import { DataService } from './../../../services/data.service';
import { Component, OnInit, Input } from '@angular/core';
import { Title } from '../../../models/title';

@Component({
  selector: 'app-title-list',
  templateUrl: './title-list.component.html',
  styleUrls: ['./title-list.component.css']
})
export class TitleListComponent implements OnInit {

  @Input() titles: Title[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getTitles();
  }

  getTitles(): void {
    this.dataService.getTitles()
      .subscribe(titles => this.titles = titles);
  }

}
