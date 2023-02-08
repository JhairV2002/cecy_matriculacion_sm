import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { User } from 'src/app/login/restart/user';
import { UserService } from 'src/app/login/restart/user.service';
import { PersonCecy } from 'src/app/login/restart/person-cecy';
import { PersonCecyService } from 'src/app/login/restart/person-cecy.service';

export interface Task {
  enabled: boolean;
  subtaks?: PersonCecy[];
}

@Component({
  selector: 'app-requests-list',
  templateUrl: './requests-list.component.html',
})
export class RequestsListComponent {


  constructor(
    private personCecyService: PersonCecyService,
    public sendDialog: MatDialog,
    private _liveAnnouncer: LiveAnnouncer,
    private userService: UserService
  ) {}

  displayedColumns: string[] = [
    'id',
    'nombres',
    'apellidos',
    'institucion',
    'activo',
  ];

  userForm: User =  {
    id: 0,
    password: "",
    name: "",
    username: "",
    looked: false,
    expired: false,
    enabled: false,
    roles: {
      id: 0,
    }
  };

  requestsList: PersonCecy[] = [];

  dataSource: MatTableDataSource<PersonCecy>;

  allComplete: boolean = false;

  modifiedData: PersonCecy[] = [];

  @ViewChild(MatSort, { static: false }) sort: MatSort;

  // ngAfterViewInit() {
  //   this.dataSource.sort = this.sort;
  // }

  ngOnInit(): void {
    this.findAll();

    console.log(this.dataSource);
  }

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  change(request: PersonCecy) {
    if (this.modifiedData.includes(request)) {
      let index = this.modifiedData.indexOf(request);
      this.modifiedData.splice(index, 1);
    } else {
      this.modifiedData.push(request);
    }
    console.log(request);
    console.log(this.modifiedData);
  }

  watchCheckbox(param: any) {
    console.log(param);
  }

  updateAllComplete(element: any) {
    this.allComplete =
      this.requestsList != null && this.requestsList.every((t) => t.aceptado);
    console.log(element);
  }

  someComplete(): boolean {
    if (this.requestsList == null) {
      return false;
    }
    return (
      this.requestsList?.filter((t) => t.aceptado).length > 0 &&
      !this.allComplete
    );
  }

  setAll(enabled: boolean) {
    this.allComplete = enabled;
    if (this.requestsList == null) {
      return;
    }
    this.requestsList.forEach((t) => {
      // si aceptado es diferente de enabled agregar al arreglo
      // y si ya esta ahi quitarlo

      if (t.aceptado != enabled) {
        if (this.modifiedData.includes(t)) {
          let index = this.modifiedData.indexOf(t);
          this.modifiedData.splice(index, 1);
        } else {
          this.modifiedData.push(t);
        }
      }
      t.aceptado = enabled;
    });
    console.log(this.modifiedData);
  }

  save() {
    this.modifiedData.forEach((request) => {
      if (request.aceptado) {
        this.userForm.password = request.cedula,
        this.userForm.name = request.cedula,
        this.userForm.username = request.cedula,
        this.userForm.enabled = request.aceptado,
        this.userForm.roles = request.tipoPersonaId
      }

      this.personCecyService.update(request.id, request).subscribe((res) => {
        this.requestsList = this.requestsList.filter((req) =>
          req.id === res.id ? res : req
        );
      });
    });

    this.modifiedData = [];
    this.sendDialog.open(SendRequestDialogComponent);
  }

  sendUser(user: User):void{
    this.userService.save(user).subscribe(()=>{
      this.userForm = {
        id: 0,
        password : "",
        name: "",
        username : "",
        looked: false,
        expired: false,
        enabled: false,
        roles: {
          id: 0
        }
      }
    })
  }

  /**
   * findAll
   */
  public findAll() {
    this.personCecyService.findAll().subscribe((response) => {
      this.requestsList = response;
      this.dataSource = new MatTableDataSource(this.requestsList);
      this.dataSource.sort = this.sort;
      console.log(this.personCecyService);
    });
  }
  /**
   * findByName
   */

}

@Component({
  selector: 'app-send-requests-dialog',
  templateUrl: './send-requests-dialog.component.html',
})
export class SendRequestDialogComponent {}
