import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Course } from '../course-list/course';
import { Carreras, Curso } from '../interfaces/carreers';
import { CoursePageService } from './course-page.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css'],
})
export class CoursePageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private coursesPageService: CoursePageService
  ) {}

  cursos: Curso[] = [];
  panelOpenState: boolean = false;
  horarios = [{}];

  horaInicio: string = '';
  horaFin: string = '';

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      if (params.get('nombreCurso')) {
        this.findByNombreCarrera(params.get('nombreCurso')!);
      }
    });
  }

  findByNombreCarrera(nombre: string) {
    this.coursesPageService.getCoursesByCarrerName(nombre).subscribe((res) => {
      this.cursos = res;
      this.cursos[0].duracion = this.differenceDays(
        new Date(res[0].fechaInicio!),
        new Date(res[0].fechaFin)
      );

      this.horaInicio = res[0].horarios[0].horaInicio[0].descripcion;
      this.horaFin = res[0].horarios[0].horaFin[0].descripcion;
    });
  }

  differenceDays(date1: Date, date2: Date) {
    let differenceTime = date1.getTime() - date2.getTime();

    let differenceInDays = differenceTime / (1000 * 3600 * 24);

    return differenceInDays;
  }
}
