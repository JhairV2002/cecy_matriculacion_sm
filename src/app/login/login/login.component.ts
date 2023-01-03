import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router:Router) {
  }
  user: string = ""



  ngOnInit(): void {}

  login(): void{
    if (this.user == "admin") {
      this.router.navigate(['/layout-admin/requests-list'])
    }else{
      this.router.navigate(['/layout/inscription-form']);
    }
  }
  restart(): void {
    this.router.navigate(['/login/restart'])
  }
}
