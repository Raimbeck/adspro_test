import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private url: string = 'http://localhost:52073/api/users';

    constructor(private http: HttpClient) { }

    //HttpGet api/users/{id}
    public getUser(id: string): Observable<User> {
        return this.http.get<User>(`${this.url}/${id}`);
    }

    //HttpGet api/users/byRole/{roleName}
    public getUsersInRole(roleName: string): Observable<User[]> {
        return this.http.get<User[]>(`${this.url}/byRole/${roleName}`);
    }

    //HttpGet api/users/isInRole/{userId}/{roleName}
    public isInRole(userId: string, roleName: string): Observable<boolean> {
        return this.http.get<boolean>(`${this.url}/isInRole/${userId}/${roleName}`);
    }
}
