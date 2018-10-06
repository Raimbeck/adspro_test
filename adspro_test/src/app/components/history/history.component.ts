import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Change } from '../../interfaces/change';

@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

    constructor(@Inject(MAT_DIALOG_DATA) public changes: Change[]) { }

    ngOnInit() {
    }

}
