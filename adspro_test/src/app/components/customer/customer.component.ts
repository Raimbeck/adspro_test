import { Component, OnInit, OnDestroy } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../interfaces/customer';
import { Email } from '../../interfaces/email';
import { Address } from '../../interfaces/address';
import { Phone } from '../../interfaces/phone';
import { Subscription, Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material';
import { HistoryComponent } from '../history/history.component';
import * as _ from 'underscore';
import { Change } from '../../interfaces/change';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit, OnDestroy {
    customer: Customer;
    userId: string;
    customerSub: Subscription;
    editCustomerSub: Subscription;
    dialogSub: Subscription;
    adminSub: Subscription;
    isAdmin: boolean;
    inProgress: boolean = true;
    id: string;

    constructor(private service: CustomerService, private router: Router, private route: ActivatedRoute, private userService: UserService, private dialog: MatDialog) { }

    ngOnInit() {
        this.customer = new Customer();
        this.userId = localStorage.getItem('userId'); 
        this.id = this.route.snapshot.paramMap.get('id');

        this.adminSub = this.userService.isInRole(this.userId, 'Admin').subscribe(response => this.isAdmin = response);

        if (this.id)
            this.customerSub = this.service.getCustomer(this.id).subscribe(customer => {
                this.inProgress = true;

                this.customer = customer;
                this.customer.userId = this.customer.issuerId = this.userId;         

                this.inProgress = false;
            });
        else {
            this.inProgress = false;

            let queryId = this.route.snapshot.queryParamMap.get('userId');
            this.addAddress();
            this.addEmail();
            this.addPhone();
            this.customer.userId = queryId ? queryId : this.userId;
            this.customer.issuerId = this.userId;
        }
    }

    submit() {
        this.editCustomerSub = this.id
            ? this.service.updateCustomer(this.id, this.customer).subscribe(response => {
                if (response)
                    this.isAdmin ? this.router.navigate(['/admin/customers']) : this.router.navigate(['/']);
            })
            : this.service.createCustomer(this.customer).subscribe(response => {
                if (response)
                    this.isAdmin ? this.router.navigate(['/admin/customers']) : this.router.navigate(['/']);
            });
    }

    addAddress() {
        this.customer.addresses.push(new Address());
    }

    addPhone() {
        this.customer.phones.push(new Phone());
    }

    addEmail() {
        this.customer.emails.push(new Email());
    }

    deleteEmail(email: Email) {
        let index = this.customer.emails.indexOf(email);
        if (index > -1)
            this.customer.emails.splice(index, 1);
    }

    deleteAddress(address: Address) {
        let index = this.customer.addresses.indexOf(address);
        if (index > -1)
            this.customer.addresses.splice(index, 1);
    }

    deletePhone(phone: Phone) {
        let index = this.customer.phones.indexOf(phone);
        if (index > -1)
            this.customer.phones.splice(index, 1);
    }

    deleteProfile() {
        const dialogRef = this.dialog.open(ModalComponent, {
            width: '400px',
            data: { title: 'Delete profile', content: 'Are you sure you want to delete this profile?'}
        });

        this.dialogSub = dialogRef.afterClosed().subscribe(result => {
            if (result)
                this.service.deleteCustomer(this.customer.id).subscribe(response => {
                    if (response)
                        this.router.navigate(['/admin/customers']);
                })
        });
    }

    viewHistory() {
        if (!this.isAdmin)
            this.customer.changes = _.reject(this.customer.changes, function (item: Change) {
                return item.isAdminChange == true;
            });

        const dialogRef = this.dialog.open(HistoryComponent, {
            width: '600px',
            data: this.customer.changes
        });
    }

    ngOnDestroy() {
        if (this.customerSub) this.customerSub.unsubscribe();
        if (this.editCustomerSub) this.editCustomerSub.unsubscribe();
        if (this.dialogSub) this.dialogSub.unsubscribe();
        if (this.adminSub) this.adminSub.unsubscribe();
    }

}
