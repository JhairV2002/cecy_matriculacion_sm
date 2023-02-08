import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormInscription, Observation } from '../interfaces/FormInscription';

@Injectable({
  providedIn: 'root',
})
export class ObservationService {
  constructor(private http: HttpClient) {}

  url: string = 'http://localhost:8082/api/formInscription/';

  saveObservations(form: FormInscription) {
    return this.http.post<FormInscription>(this.url, form);
  }
}
