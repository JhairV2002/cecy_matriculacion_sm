import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { DataUserService } from '../data-user/data-user.service';
import { DataUser } from '../data-user/data-user';
import { PersonCecyService } from './person-cecy.service';
import { Catalogue } from 'src/app/feature/combobox-publicity/catalogue';
import { PersonCecy } from './person-cecy';
import { User } from './user';
import { flatMap } from 'rxjs';
import { UserService } from './user.service';


@Component({
  selector: 'app-restart',
  templateUrl: './restart.component.html',
})
export class RestartComponent {



  constructor(
    private router:Router,
    public dialog: MatDialog,
    public dataUserService: DataUserService,
    public personCecyService: PersonCecyService,
  ) {}

  exist: number = 0;
  captureCedula: String = ""
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

  send(cedula: String): void{
    {
      this.personCecyService.findByCedula(cedula).subscribe(
        (response) => {
          if(response != null){
            console.log(response)
            this.router.navigate(['/login/login']);
            this.dialog.open(DialogComponent);
          } else {
            console.log("error")
            this.dataUserService.findByCedula(cedula).subscribe(
              (res) => {
                if (res.length >= 1) {
                  console.log(res[0])
                  this.initialForm.nombres= res[0].nombres,
                  this.initialForm.apellidos= res[0].apellidos,
                  this.initialForm.cedula= res[0].cedula,
                  this.initialForm.fechaNacimiento= res[0].fechaNacimiento,
                  this.initialForm.direccion= res[0].direccion,
                  this.initialForm.convencional= res[0].convencional,
                  this.initialForm.celular= res[0].celular,
                  this.initialForm.email= res[0].email,
                  this.initialForm.sexoId.id = res[0].sexoId
                  this.initialForm.institucionId = res[0].institucionId
                  this.initialForm.etniaId.id = res[0].etniaId
                  this.initialForm.tipoPersonaId.id = res[0].tipoPersonaId
                  this.initialForm.instruccionId.id = 1
                  console.log(this.initialForm)
                  this.saveUser(this.initialForm)
                  console.log("guardao")
                } else {
                  console.log("llenar form")
                  this.router.navigate(['/login/data-user-form'])
                }
              }
            )
          }
        }
      )
    }
  }

  saveUser(form : PersonCecy): void{
    console.table(form)
    this.personCecyService.save(form).subscribe(() => {
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
