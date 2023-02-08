import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiCatalogue } from '../combobox-genero/api-catalogue';
import { ApiCatalogueService } from '../combobox-genero/api-catalogue.service';

@Component({
  selector: 'app-combobox-instruccion',
  templateUrl: './combobox-instruccion.component.html',
})
export class ComboboxInstruccionComponent {
  constructor(private apiCatalogueService: ApiCatalogueService){}

  lvlsInstruccion: ApiCatalogue[] = [];
  @Output() idEmitter = new EventEmitter<number>();
  @Input() id: number = 0;

  ngOnInit(): void {
      this.findAll();
  }

  public findAll():void{
    this.apiCatalogueService.findAll().subscribe(
      (response) =>
      response.forEach((t) => {
        if (t.code == 'instruccion') {
          this.lvlsInstruccion.push(t)
        }
      })
    )
  }

  public onSelect(id: string ){
    console.log("El id de la ciudad es:" + id);
    this.idEmitter.emit(parseInt(id));
  }
}
