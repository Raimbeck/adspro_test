import { Component, OnInit, Inject } from '@angular/core';
import { Statistic } from '../../interfaces/statistic';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {

    constructor(@Inject(MAT_DIALOG_DATA) public statistics: Statistic) { }

  ngOnInit() {
  }
}
