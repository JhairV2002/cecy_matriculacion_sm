import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../interfaces/students';

@Injectable({
  providedIn: 'root',
})
export class StudentFormService {
  constructor(private htt: HttpClient) { }

  url = 'http://localhost:8000/api/persona/';

  findStudent(id: string) {
    return this.htt.get<Student>(`${this.url}${id}`);
  }
}
