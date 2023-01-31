import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login-form/login.component';
import { FormsModule } from '@angular/forms';
import { RestartComponent,
         DialogComponent,
         DialogFalseComponent } from './restart/restart.component';
import { MatDialogModule } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button';
import { DataUserFormComponent } from './data-user/data-user-form/data-user-form.component';
import { ComboboxInstitucionComponent } from './data-user/combobox-institucion/combobox-institucion.component';
import { ComboboxApiComponent } from './data-user/combobox-genero/combobox-api.component';

@NgModule({
  declarations: [
    LoginComponent,
    RestartComponent,
    DialogComponent,
    DialogFalseComponent,
    DataUserFormComponent,
    ComboboxInstitucionComponent,
    ComboboxApiComponent
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
