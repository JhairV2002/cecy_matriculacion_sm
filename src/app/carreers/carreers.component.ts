import { Component } from '@angular/core';
import { CarrersService } from './carrers.service';

@Component({
  selector: 'app-carreers',
  templateUrl: './carreers.component.html',
  styleUrls: ['./carreers.component.css']
})
export class CarreersComponent {

  constructor(private carreerService : CarrersService){}

  carrers$ = this.carreerService.carreras();

}
