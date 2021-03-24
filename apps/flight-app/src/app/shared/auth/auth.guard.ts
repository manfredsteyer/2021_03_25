
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, RoutesRecognized } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!this.authService.userName) {
            // this.router.navigate(['home', { needsLogin: true }])
            /// return false;
            return this.router.createUrlTree(['home', { needsLogin: true }]);
        }
        return true;
    }
}

 // J: true (3)
 // N: false (2)
 // Redirect: url-tree (1)