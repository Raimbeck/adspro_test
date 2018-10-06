import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from '../../interfaces/user';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../../services/user.service';
import { CustomerService } from '../../services/customer.service';
import { StatisticComponent } from '../statistic/statistic.component';
import { Statistic } from '../../interfaces/statistic';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-admin-customer',
  templateUrl: './admin-customer.component.html',
  styleUrls: ['./admin-customer.component.css']
})
export class AdminCustomerComponent implements OnInit, OnDestroy {
    displayedColumns: string[] = ['email', 'profile'];
    statistics: Statistic;
    usersSub: Subscription;
    statisticSub: Subscription;
    dataSource;

    constructor(private userService: UserService, private customerService: CustomerService, private dialog: MatDialog) { }

    ngOnInit() {
        this.usersSub = this.userService.getUsersInRole('Customer').subscribe(users => {
            this.dataSource = new MatTableDataSource<User>(users);
        });

        this.statisticSub = this.customerService.getStatistics().subscribe(response => this.statistics = response);
    }

    filter(input: HTMLInputElement) {
        if (this.dataSource)
            this.dataSource.filter = input.value.trim().toLowerCase();
    }

    viewStatistics() {
        const dialogRef = this.dialog.open(StatisticComponent, {
            width: '400px',
            data: this.statistics
        });
    }

    ngOnDestroy() {
        if (this.usersSub) this.usersSub.unsubscribe();
        if (this.statisticSub) this.statisticSub.unsubscribe();
    }

}
