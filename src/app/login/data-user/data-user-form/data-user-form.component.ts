import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from '../../restart/restart.component';
import { DataUserService } from '../data-user.service';
import { DataUser } from '../data-user';

@Component({
  selector: 'app-data-user-form',
  templateUrl: './data-user-form.component.html',
})
export class DataUserFormComponent implements OnInit {

  constructor(
    private router:Router,
    public dialog: MatDialog,
    public dataUserService: DataUserService,
    ) {}

    initialForm: DataUser = {
      id: 0,
      nombres: '',
      apellidos: '',
      cedula: '',
      fecha_nacimiento: new Date(),
      direccion: '',
      convencional: '',
      celular: '',
      email: '',
      sexo: 0,
      institucion: 0
    };

    ngOnInit(): void{};
    saveUser(): void{
    console.table(this.initialForm)
    this.dataUserService.save(this.initialForm).subscribe(() => {
      this.initialForm = {
        id: 0,
        nombres: '',
        apellidos: '',
        cedula: '',
        fecha_nacimiento: new Date(),
        direccion: '',
        convencional: '',
        celular: '',
        email: '',
        sexo: 0,
        institucion: 0
      };
      this.router.navigate(['/login/login']);
      this.dialog.open(DialogComponent);
    })
  }
}
