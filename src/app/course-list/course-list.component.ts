import { Component } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent {
  courses: Course[] = [
    {
      id: 1,
      title: 'Html Basico',
      description: 'Curso de html basico para desarrollo web',
      responsables: ['Ing. Pablo Tamayo', 'Ing. Yogledis Herrera'],
      content: ['Que es el hipertexto', 'Principales tags'],
      preRequirements: ['Ningun pre requisito necesario'],
      requirements: ['Copia de Cedula'],
      schedule: ['Lun-Vier 13:00 - 15:00'],
    },

    {
      id: 2,
      title: 'CSS Basico',
      description: 'Curso de CSS basico para desarrollo web',
      responsables: ['Ing. Pablo Tamayo', 'Ing. Yogledis Herrera'],

      content: [
        'Que es el estilo en cascada',
        'Principales formas de aplicar estilo',
      ],
      preRequirements: ['HTML Basico'],
      requirements: ['Copia de Cedula', 'Certificado de Html basico'],
      schedule: ['Lun-Vier 13:00 - 15:00'],
    },

    {
      id: 3,
      title: 'Javascript Basico',
      description: 'Curso de javascript basico para desarrollo web',
      responsables: ['Ing. Pablo Tamayo', 'Ing. Yogledis Herrera'],

      content: ['Que es Javascript ', 'Manejo del DOM'],
      preRequirements: ['HTML Basico', 'CSS Basico'],
      requirements: [
        'Copia de Cedula',
        'Certificado de html basico',
        'Certificado de CSS basico',
      ],
      schedule: ['Lun-Vier 13:00 - 15:00'],
    },
  ];
}
