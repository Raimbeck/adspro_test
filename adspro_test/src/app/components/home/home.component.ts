import { Component, OnInit, OnDestroy } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { User } from '../../interfaces/user';
import { Observable, Subscription } from 'rxjs';
import { Customer } from '../../interfaces/customer';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
    user: User;
    customer$: Observable<Customer>;
    inProgress: boolean = true;

    userSub: Subscription;

    constructor(private customerService: CustomerService, private userService: UserService) { }

    ngOnInit() {
        let id = localStorage.getItem('userId');
        if (id) {
            this.userSub = this.userService.getUser(id).subscribe(user => {
                this.inProgress = true;

                this.user = user;
                if (user.customerId)
                    this.customer$ = this.customerService.getCustomer(user.customerId);

                this.inProgress = false;
            });
        }
        else this.inProgress = false;
    }

    ngOnDestroy() {
        if (this.userSub) this.userSub.unsubscribe();
    }

}
