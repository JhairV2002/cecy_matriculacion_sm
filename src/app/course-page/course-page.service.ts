import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carreras, Curso } from '../interfaces/carreers';

@Injectable({
  providedIn: 'root',
})
export class CoursePageService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:8083/api/cursos/findByName/';

  getCoursesByCarrerName(term: string) {
    return this.http.get<Curso[]>(`${this.url}${term}/`);
  }
}
