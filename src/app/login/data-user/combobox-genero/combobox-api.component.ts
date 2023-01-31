import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiCatalogueService } from './api-catalogue.service';
import { ApiCatalogue } from './api-catalogue';

@Component({
  selector: 'app-combobox-api',
  templateUrl: './combobox-api.component.html',
})
export class ComboboxApiComponent implements OnInit {
  constructor(private apiCatalogueService: ApiCatalogueService){}

  generos: ApiCatalogue[] = [];
  @Output() idEmitter = new EventEmitter<number>();
  @Input() id: number = 0;

  ngOnInit(): void {
      this.findAll();
  }

  public findAll():void{
    this.apiCatalogueService.findAll().subscribe(
      (response) =>
        this.generos = response
    )
  }

  public onSelect(id: string ){
    console.log("El id de la ciudad es:" + id);
    this.idEmitter.emit(parseInt(id));
  }

}
