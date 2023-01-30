import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carreras } from '../interfaces/carreers';

@Injectable({
  providedIn: 'root',
})
export class CourseListService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:8083/visualizacion_carrera_cursos/findByName/';

  getCoursesByCarrerName(term: string) {
    return this.http.get<Carreras[]>(`${this.url}${term}/`);
  }
}
