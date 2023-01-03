import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-restart',
  templateUrl: './restart.component.html',
})
export class RestartComponent {



  constructor(private router:Router, public dialog: MatDialog) {}
  cedula: string = "";
  send(): void{
    {
      if(this.cedula == "1725252694"){
        this.router.navigate(['/login/login']);
        this.dialog.open(DialogComponent);
      }else {
        this.dialog.open(DialogFalseComponent);
        this.router.navigate(['/login/data-user-form'])
      }
    }

  }
}


@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.component.html',
})
export class DialogComponent {

}

@Component({
  selector: 'app-dialog-false',
  templateUrl: 'dialog-false.component.html',
})
export class DialogFalseComponent {

}
