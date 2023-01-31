import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CatalogueService } from './catalogue.service';
import { Catalogue } from './catalogue';

@Component({
  selector: 'app-combobox-publicity',
  templateUrl: './combobox-publicity.component.html',
})
export class ComboboxPublicityComponent implements OnInit {
  constructor(private catalogueService: CatalogueService){}

  publicities: Catalogue[] = [];
  @Output() idEmitter = new EventEmitter<number>();
  @Input() id: number = 0;
  roles: string = 'roles'

  ngOnInit(): void {
      this.findAll();
  }

  public findAll():void{
    this.catalogueService.findAll().subscribe(
      (response) =>
        this.publicities = response
    )
  }

  public onSelect(id: string ){
    console.log("El id de la ciudad es:" + id);
    this.idEmitter.emit(parseInt(id));
  }

}
