import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { CarrersService } from '../carreers/carrers.service';
import { CoursePageService } from '../course-page/course-page.service';
import { Carreras } from '../interfaces/carreers';
import { Course } from './course';
import { CourseListService } from './course-list.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent {
  constructor(
    private route: ActivatedRoute,
    private courseListService: CourseListService
  ) {}

  value: string = '';
  checked_gratis: boolean = false;
  checked_pago: boolean = false;

  nombreCarrera$ = this.route.paramMap.pipe(
    map((params) => params.get('nombreCarrera'))
  );

  cursos: Carreras[] = [];

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      if (params.get('nombreCarrera')) {
        this.findByNombreCarrera(params.get('nombreCarrera')!);
      }
    });
  }

  findByNombreCarrera(nombre: string) {
    this.courseListService.getCoursesByCarrerName(nombre).subscribe((res) => {
      this.cursos = res;
    });
  }
}
