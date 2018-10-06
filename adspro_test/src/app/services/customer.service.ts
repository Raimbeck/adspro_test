import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../interfaces/customer';
import { User } from '../interfaces/user';
import { Statistic } from '../interfaces/statistic';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
    private url: string = 'http://localhost:52073/api/customers';

    constructor(private http: HttpClient) { }

    //HttpGet api/customers
    public getCustomers(): Observable<Customer[]> {
        return this.http.get<Customer[]>(`${this.url}`);
    }

    //HttpGet api/customers/{id}
    public getCustomer(id: string): Observable<Customer> {
        return this.http.get<Customer>(`${this.url}/${id}`);
    }

    //HttpPost api/customers
    public createCustomer(customer: Customer): Observable<Customer> {
        return this.http.post<Customer>(`${this.url}`, customer);
    }

    //HttpPut api/customers/{id}
    public updateCustomer(id: string, customer: Customer): Observable<boolean> {
        return this.http.put<boolean>(`${this.url}/${id}`, customer);
    }

    //HttpDelete api/customers/{id}
    public deleteCustomer(id: string): Observable<boolean> {
        return this.http.delete<boolean>(`${this.url}/${id}`);
    }

    //HttpGet api/customers/statistics
    public getStatistics(): Observable<Statistic> {
        return this.http.get<Statistic>(`${this.url}/statistics`);
    }
}
