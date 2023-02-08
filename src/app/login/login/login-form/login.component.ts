import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { ConstantPool, ParseSourceFile } from '@angular/compiler';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private router:Router,
    private userService: UserService
    ) {}
    initialForm =  {
    "username" :'',
    "password" :''
    }

  ngOnInit(): void {}

  login(): void{
    this.userService.login(this.initialForm).subscribe(
      (response: HttpResponse<User>) => {
        if (response.headers.get('Authorization')!=null){
          sessionStorage.setItem("crm_token", String(response.headers.get('Authorization')));
          sessionStorage.setItem("username", this.initialForm.username);
        }
      }
    )
    //this.loggedIn = true;
    sessionStorage.setItem("loggedIn","true");
    console.log('logea')
    this.router.navigate(["layout"]);
  }
  restart(): void {
    this.router.navigate(['/login/restart'])
  }
}
