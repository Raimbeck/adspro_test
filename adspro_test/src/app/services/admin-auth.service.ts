import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService implements CanActivate {

    constructor(private userService: UserService, private router: Router) { }

    canActivate(): Observable<boolean> {
        let userId = localStorage.getItem('userId');

        if (userId)
            return this.userService.isInRole(userId, 'Admin');

        this.router.navigate(['/'])
        return of(false);
    }
}
