import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { UserService } from '../service/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isloggedIn: boolean;
  public userName: string;
  private password: string;

  constructor(private userService: UserService,private router: Router) {
    this.isloggedIn = false;
  }

  login(username: string, password: string) {

    //Assuming users are provided the correct credentials.
    //In real app you will query the database to verify.

    this.userName = username;
    this.password = password;
    this.userService.getUserbyid().subscribe((result) => {
      var userExists = result.filter(x => x.userid == username && x.password == password)[0];
      if (userExists) {
        this.isloggedIn = true;
        this.router.navigate( ['home']);
      }
      else{
        alert('User Invalid!');
      }

    });
    return of(this.isloggedIn);
  }

  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }

  isAdminUser(): boolean {
    if (this.userName == 'Admin') {
      return true;
    }
    return false;
  }

  logoutUser(): void {
    this.isloggedIn = false;
  }
}
