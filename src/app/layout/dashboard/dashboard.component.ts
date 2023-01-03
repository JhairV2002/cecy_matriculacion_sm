import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) {
  }

  ngOnInit(): void {

  }

  newFormLogin(): void {

  }

  isRequired(field: AbstractControl): boolean {
    return field.hasValidator(Validators.required);
  }

  onSubmit() {
  }

  login(): void{
    this.router.navigate(['/layout/inscription-form']);
  }

  requestPasswordReset() {
  }

  requestUserUnlock() {
  }

  redirect() {

  }

  redirectRegistration() {

  }
}
