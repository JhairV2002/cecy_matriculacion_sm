import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { ParseSourceFile } from '@angular/compiler';

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

    user: string = ''
    initialForm =  {
    username :'',
    password :''
    }

  ngOnInit(): void {}

  login(){
    // console.log("logears")
    // this.userService.login(this.initialForm).subscribe(
    //   response => {
    //     let result = response.json();
    //     if (result > 0){
    //       console.log("si logea")
    //       let token = response.headers.get("Authorization")
    //       this.router.navigate(['/layout/inscription-list']);
    //     }
    //   }
    // );
    if (this.user == "admin") {
      this.router.navigate(['/layout/dashboard'])
    }else{
      this.router.navigate(['/layout/inscription-form']);
    }
  }
  restart(): void {
    this.router.navigate(['/login/restart'])
  }
}
