import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from '../restart/restart.component';

@Component({
  selector: 'app-data-user-form',
  templateUrl: './data-user-form.component.html',
})
export class DataUserFormComponent {

  constructor(private router:Router, public dialog: MatDialog) {}
  saveUser(){
    this.router.navigate(['/login/login']);
        this.dialog.open(DialogComponent);
  }
}
