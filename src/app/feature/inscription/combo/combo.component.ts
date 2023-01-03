import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
//import { RolesService } from '../../role/roles.service';
//import { Rol } from '../../role/roles';

@Component({
  selector: 'app-combo',
  templateUrl: './combo.component.html',
})
export class ComboComponent implements OnInit {

   constructor(
  ) {}
  roles = ["Propaganda en TV", "Un amigo me conto" ];

  ngOnInit(): void {
  }
  public onSelect(id: string ){
  }
}
