import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { map, switchMap, tap } from 'rxjs';
import { FormInscription, Observation } from '../interfaces/FormInscription';
import { CourseService } from './course.service';
import { ObservationService } from './observation.service';
import { StudentFormService } from './student-form.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
})
export class StudentFormComponent {
  constructor(
    private route: ActivatedRoute,
    private studentService: StudentFormService,
    private courseService: CourseService,
    private observationService: ObservationService
  ) {}

  observation: Observation = {
    description: '',
    completado: false,
    fechaCreacion: moment().format('YYYY-MM-DD'),
    fechaModificacion: moment().format('YYYY-MM-DD'),
  };

  information!: FormInscription;
  observations!: Observation[];
  btnText: string = 'Agregar';

  student$ = this.route.params.pipe(
    switchMap((params) =>
      this.studentService.findFormInscription(params['id'])
    ),
    map((res) => (this.information = res))
  );

  course$ = this.student$.pipe(
    switchMap((res) => this.courseService.findCursoById(res.courseId))
  );

  requeriments$ = this.course$.pipe(map((res) => res.requerimientos));

  documents$ = this.student$.pipe(map((res) => res.documents));
  observations$ = this.student$.pipe(map((res) => res.observations));

  onChangeCheckbox(e: any) {
    console.log(e);
  }

  updateObservation(obs: Observation) {
    this.btnText = 'Actualizar';
    this.observation = obs;
  }

  sendObservations() {
    if (this.observation.description.length > 0 && !this.observation.id) {
      this.information.observations = [
        ...this.information.observations,
        this.observation,
      ];
      this.observationService
        .saveObservations(this.information)
        .subscribe((res) => {
          this.observation = {
            id: undefined,
            description: '',
            completado: false,
            fechaCreacion: moment().format('YYYY-MM-DD'),
            fechaModificacion: moment().format('YYYY-MM-DD'),
          };
          console.log(res);
        });
    } else {
      console.log('algo');
      this.observationService
        .saveObservations(this.information)
        .subscribe((res) => {
          this.observation = {
            id: undefined,
            description: '',
            completado: false,
            fechaCreacion: moment().format('YYYY-MM-DD'),
            fechaModificacion: moment().format('YYYY-MM-DD'),
          };
          console.log(res);
        });
    }

    this.btnText = 'Agregar';

    // if (this.observation.description.length > 0) {
    //   this.information.observations = [
    //     ...this.information.observations,
    //     this.observation,
    //   ];
    // } else {
    //   this.observationService
    //     .saveObservations(this.information)
    //     .subscribe((res) => {
    //       this.observation = {
    //         description: '',
    //         completado: false,
    //         fechaCreacion: moment().format('YYYY-MM-DD'),
    //         fechaModificacion: moment().format('YYYY-MM-DD'),
    //       };
    //       console.log(res);
    //     });
    //   console.log(this.information);
    // }
  }
}
