import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router:Router, private authService: AuthService){
  }

  canActivate(
    activatedRouteSnapshot: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
      if (!this.authService.isUserLoggedIn()) {
        alert('You are not allowed to view this page. You are redirected to login Page');
        this.router.navigate(["login"],{ queryParams: { retUrl: activatedRouteSnapshot.url} });
    } 

    return true;
  }
  
}
