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
      this.findByCode();
  }

  public findAll():void{
    this.catalogueService.findAll().subscribe(
      (response) =>
        this.publicities = response
    )
  }

  public findByCode(): void {
    this.catalogueService.findAll().subscribe(
      (response) =>
      response.forEach((t) => {
        if (t.code == 'publicidad') {
          this.publicities.push(t)
        }
      })
    )
  }

  public onSelect(id: string ){
    this.idEmitter.emit(parseInt(id));
  }

}
