import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../service/auth.service';
@Component({
  selector:'app-login',
   templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit { 
 
    invalidCredentialMsg: string;
    username:string;
    password:string;
    retUrl:string="home";
 
    constructor(private authService: AuthService, 
                private router: Router, 
                private activatedRoute:ActivatedRoute) {
    }
 
    ngOnInit() {
        this.activatedRoute.queryParamMap.subscribe(params => {
            this.retUrl = params.get('retUrl'); 
            console.log('LoginComponent/ngOnInit '+ this.retUrl);
        });
    }
 
    onFormSubmit(loginForm) {
        if(loginForm.value.username=="" ||loginForm.value.password=="")
        {
            alert('Please enter username and password!');
            return;
        }

       this.authService.login(loginForm.value.username, loginForm.value.password)
    //    .subscribe(data => {
    //        console.log( 'return to '+ this.retUrl);
    //     //    if (this.retUrl!=null) {
    //     //         this.router.navigate( [this.retUrl]);
    //     //    } else {
    //     //         this.router.navigate( ['home']);
    //     //    }
    //     if(data)
    //     {
    //         this.router.navigate( ['home']);
    //     }
    //     // else{
    //     //     alert('Invalid User!');
    //     // }
    //    });
    }
} 
