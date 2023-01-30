import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carreras } from '../interfaces/carreers';

@Injectable({
  providedIn: 'root'
})
export class CarrersService {

  constructor(private http: HttpClient) { }

  carrerasUrl : string = "http://localhost:8083/visualizacion_carrera_cursos/"
  
  carreras(){
    return this.http.get<Carreras[]>(this.carrerasUrl)
  }

  curso(id: number){
    return this.http.get<Carreras>(`${this.carrerasUrl}${id}/`)
  }

  cursosNombreCarrera(nombreCarrera: string){
    return this.http.get<Carreras>(`${this.carrerasUrl}findByName/${nombreCarrera}/`)
  }
}
