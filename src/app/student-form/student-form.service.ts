import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormInscription } from '../interfaces/FormInscription';

@Injectable({
  providedIn: 'root',
})
export class StudentFormService {
  constructor(private htt: HttpClient) {}

  url = 'http://localhost:8082/api/formInscription/';

  findFormInscription(id: string) {
    return this.htt.get<FormInscription>(`${this.url}${id}`);
  }
}
