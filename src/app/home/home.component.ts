import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { UserService } from '../service/user.service';
import { AuthService } from '../service/auth.service';
import { User } from '../model/user';
import { JsonpClientBackend } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user : User;
  public users : User[];
  public userid :string;
  constructor(private authService:AuthService,private userService:UserService,private activatedRounte:ActivatedRoute) { }

  ngOnInit(): void {
    this.userid =this.authService.userName; //this.activatedRounte.snapshot.paramMap.get("userId");
    this.userService.getUserbyid().subscribe((result) =>{
    
      console.log(JSON.stringify(result));
      this.user = result.filter(x=>x.userid == this.userid)[0];
      this.user.profilepic = this.user.profilepic;
    } );
  }

}
