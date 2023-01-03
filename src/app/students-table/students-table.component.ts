import { Component } from '@angular/core';
import { Student } from '../students/student';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css'],
})
export class StudentsTableComponent {
  studentsDataSource: Student[] = [
    {
      id: 1,
      numMatricula: 'PP112',
      estadoMatricula: 'En proceso',
      nombre: 'Pepito',
      apellido: 'Perez',
      genero: 'Masculino',
      edad: 20,
      direccion: 'Chillogallo',
      tipoEstudiante: 'Interno',
      documentosRequeridos: ['Copia de cedula'],
      observaciones: ['Copia de cedula borrosa'],
      curso: {
        id: 1,
        nombre: 'Html5 Basico',
        responsable: 'Maria Martinez',
        cupos: 20,
        requisitos: [],
        gratuito: false,
      },
    },
    {
      id: 2,
      numMatricula: 'PP112',
      estadoMatricula: 'En proceso',
      nombre: 'Pepito',
      apellido: 'Perez',
      genero: 'Masculino',
      edad: 20,
      direccion: 'Chillogallo',
      tipoEstudiante: 'Interno',
      documentosRequeridos: ['Copia de cedula'],
      observaciones: ['Copia de cedula borrosa'],
      curso: {
        id: 1,
        nombre: 'Html5 Basico',
        responsable: 'Maria Martinez',
        cupos: 20,
        requisitos: [],
        gratuito: false,
      },
    },
    {
      id: 3,
      numMatricula: 'PP112',
      estadoMatricula: 'En proceso',
      nombre: 'Pepito',
      apellido: 'Perez',
      genero: 'Masculino',
      edad: 20,
      direccion: 'Chillogallo',
      tipoEstudiante: 'Interno',
      documentosRequeridos: ['Copia de cedula'],
      observaciones: ['Copia de cedula borrosa'],
      curso: {
        id: 1,
        nombre: 'Html5 Basico',
        responsable: 'Maria Martinez',
        cupos: 20,
        requisitos: [],
        gratuito: false,
      },
    },
  ];

  displayedColumns: string[] = [
    'nombre',
    'apellido',
    'tipoEstudiante',
    'acciones',
  ];
}
