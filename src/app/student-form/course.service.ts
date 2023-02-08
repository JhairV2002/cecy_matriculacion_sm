import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from '../interfaces/Curso';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private http: HttpClient) {}

  url: string = 'http://localhost:8083/api/cursos';

  findCursoById(id: number) {
    return this.http.get<Curso>(`${this.url}/${id}/`);
  }
}
