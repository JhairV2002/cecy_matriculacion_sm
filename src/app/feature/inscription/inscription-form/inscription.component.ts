import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Inscription } from '../inscription';
import { InscriptionService } from '../inscription.service';
import {MatDialog} from '@angular/material/dialog';
import { PersonCecyService } from 'src/app/login/restart/person-cecy.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
})
export class InscriptionComponent implements OnInit {
  constructor(
    private inscriptionService: InscriptionService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    public personCecyService: PersonCecyService,
  ) {}

  initialForm: Inscription = {
    id: 0,
    userId: 1,
    courseId: 1,
    publicity: {
      id: 0,
      code: "",
      value: ""
    },
    otherCourses: 1,
    sponsoredCourse: false,
    institutionContact: "",
    state: {
      id: 1,
      code: "",
      value: ""
    },
    personCecy : {
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
    }
  };

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }
  save(): void {
    this.personCecyService.findByCedula(sessionStorage.getItem('username')).subscribe((res) =>{
      console.log(res);
      this.initialForm.personCecy = res;
    })
    console.log(this.initialForm);
    this.inscriptionService.save(this.initialForm).subscribe(() => {
      this.initialForm = {
        id: 0 ,
        userId: 0,
        courseId: 0,
        publicity: {
          id: 0,
          code: "",
          value: ""
        },
        otherCourses: 0,
        sponsoredCourse: false,
        institutionContact: "",
        state: {
          id: 1,
          code: "",
          value: ""
        },
        personCecy :{
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
        }
      };
      this.router.navigate(['/layout/inscription-list']);
      this.dialog.open(DialogSaveComponent);
    });
  }

  cancelar(): void {
    this.dialog.open(DialogCancelComponent);
  }

}


@Component({
  selector: 'app-dialog-save',
  templateUrl: './dialog-save.component.html',
})
export class DialogSaveComponent{

}
@Component({
  selector: 'app-dialog-cancel',
  templateUrl: './dialog-cancel.component.html',
})
export class DialogCancelComponent{

}
