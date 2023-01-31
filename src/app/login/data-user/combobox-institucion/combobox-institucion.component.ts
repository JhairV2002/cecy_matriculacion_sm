import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InstitucionService } from './institucion.service';
import { Institucion } from './institucion';

@Component({
  selector: 'app-combobox-institucion',
  templateUrl: './combobox-institucion.component.html',
})
export class ComboboxInstitucionComponent implements OnInit {
  constructor(private institucionService: InstitucionService){}

  instituciones: Institucion[] = [];
  @Output() idEmitter = new EventEmitter<number>();
  @Input() id: number = 0;

  ngOnInit(): void {
      this.findAll();
  }

  public findAll():void{
    this.institucionService.findAll().subscribe(
      (response) =>
        this.instituciones = response
    )
  }

  public onSelect(id: string ){
    console.log("El id de la ciudad es:" + id);
    this.idEmitter.emit(parseInt(id));
  }

}
