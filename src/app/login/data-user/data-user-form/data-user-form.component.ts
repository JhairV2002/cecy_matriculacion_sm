import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent, DialogFalseComponent } from '../../restart/restart.component';
import { DataUserService } from '../data-user.service';
import { DataUser } from '../data-user';
import { PersonCecy } from '../../restart/person-cecy';

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

    initialForm: PersonCecy = {
      id: 0,
      nombres: '',
      apellidos: '',
      cedula: '',
      fechaNacimiento: new Date(),
      direccion: '',
      convencional: '',
      celular: '',
      email: '',
      sexoId: {
        "id":0,
        "code" : "",
        "value": ""},
      institucionId: 0,
      etniaId: {
        "id":0,
        "code" : "",
        "value": ""},
      tipoPersonaId: {
        "id":0,
        "code" : "",
        "value": ""},
      instruccionId: {
        "id":0,
        "code" : "",
        "value": ""},
        aceptado: false
    };

  ngOnInit(): void{
    this.dialog.open(DialogFalseComponent);
  };

  saveUser(): void{
    console.table(this.initialForm)
    this.dataUserService.save(this.initialForm).subscribe(() => {
      this.initialForm = {
        id: 0,
        nombres: '',
        apellidos: '',
        cedula: '',
        fechaNacimiento: new Date(),
        direccion: '',
        convencional: '',
        celular: '',
        email: '',
        sexoId: {
          "id":0,
          "code" : "",
          "value": ""},
        institucionId: 0,
        etniaId: {
          "id":0,
          "code" : "",
          "value": ""},
        tipoPersonaId: {
          "id":0,
          "code" : "",
          "value": ""},
        instruccionId: {
          "id":0,
          "code" : "",
          "value": ""},
          aceptado: false
      };
      this.router.navigate(['/login/login']);
      this.dialog.open(DialogComponent);
    })
  }
}
