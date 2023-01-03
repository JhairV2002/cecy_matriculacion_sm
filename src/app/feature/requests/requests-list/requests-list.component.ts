import { Component } from '@angular/core';
import { Request } from '../request';
import { RequestService } from '../request.service';
import { MatDialog } from '@angular/material/dialog';

export interface Task {
  enabled: boolean;
  subtaks?: Request[];
}

@Component({
  selector: 'app-requests-list',
  templateUrl: './requests-list.component.html',
})
export class RequestsListComponent {

  task: Task = {
    enabled: false,
    subtaks: [
      {requestId:1, names:'A Aa',cedula:'1725252694', lastnames:'AAA Aaa', institution:'Yavirac', enabled:false},
       {requestId:2, names:'B Bb',cedula:'1725252694', lastnames:'BBB Bbb', institution:'It', enabled:false},
       {requestId:3, names:'C Cc',cedula:'1725252694', lastnames:'CCC Ccc', institution:'Linkear', enabled:false},
       {requestId:4, names:'D Dd',cedula:'1725252694', lastnames:'DDD Ddd', institution:'Yavirac', enabled:false}
    ],
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.requestsList != null && this.requestsList.every(t => t.enabled);
  }

  someComplete(): boolean {
    if (this.requestsList == null) {
      return false;
    }
    return this.requestsList?.filter(t => t.enabled).length > 0 && !this.allComplete;
  }

  setAll(enabled: boolean) {
    this.allComplete = enabled;
    if (this.requestsList == null) {
      return;
    }
    this.requestsList.forEach(t => (t.enabled = enabled));
  }

  constructor(private requestService: RequestService, public sendDialog: MatDialog) {}

  requestsList: Request[] = [];

  save(){
    this.sendDialog.open(SendRequestDialogComponent);
  }
  ngOnInit(): void {
    this.findAll();
  }

  /**
   * findAll
   */
  public findAll(){
      this.requestsList = [{requestId:1, names:'A Aa',cedula:'1725252694', lastnames:'AAA Aaa', institution:'Yavirac', enabled:true},
  {requestId:2, names:'B Bb',cedula:'1725252694', lastnames:'BBB Bbb', institution:'It', enabled:true},
  {requestId:3, names:'C Cc',cedula:'1725252694', lastnames:'CCC Ccc', institution:'Linkear', enabled:true},
  {requestId:4, names:'D Dd',cedula:'1725252694', lastnames:'DDD Ddd', institution:'Yavirac', enabled:true}];
  }
  /**
   * findByName
   */
  public findByName(term: string): void {
    if (term.length >= 2) {
      this.requestService
        .findByName(term)
        .subscribe((response) => (this.requestsList = response));
    }
    if (term.length === 0) this.findAll();
  }
}

@Component({
  selector: 'app-send-requests-dialog',
  templateUrl: './send-requests-dialog.component.html',
})
export class SendRequestDialogComponent {
}
