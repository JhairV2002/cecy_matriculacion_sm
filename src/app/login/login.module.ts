import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RestartComponent,
         DialogComponent,
         DialogFalseComponent } from './restart/restart.component';
import { MatDialogModule } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button';
import { DataUserFormComponent } from './data-user-form/data-user-form.component';

@NgModule({
  declarations: [
    LoginComponent,
    RestartComponent,
    DialogComponent,
    DialogFalseComponent,
    DataUserFormComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule
  ],
})
export class LoginModule {}
