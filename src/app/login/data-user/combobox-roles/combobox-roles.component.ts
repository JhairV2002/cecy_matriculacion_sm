import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiCatalogueService } from '../combobox-genero/api-catalogue.service';
import { ApiCatalogue } from '../combobox-genero/api-catalogue';

@Component({
  selector: 'app-combobox-roles',
  templateUrl: './combobox-roles.component.html',
})
export class ComboboxRolesComponent {
  constructor(private apiCatalogueService: ApiCatalogueService){}

  roles: ApiCatalogue[] = [];
  @Output() idEmitter = new EventEmitter<number>();
  @Input() id: number = 0;

  ngOnInit(): void {
      this.findAll();
  }

  public findAll():void{
    this.apiCatalogueService.findAll().subscribe(
      (response) =>
      response.forEach((t) => {
        if (t.code == 'roles') {
          this.roles.push(t)
        }
      })
    )
  }

  public onSelect(id: string ){
    console.log("El id de la ciudad es:" + id);
    this.idEmitter.emit(parseInt(id));
  }

}
