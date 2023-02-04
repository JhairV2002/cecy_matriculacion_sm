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
  constructor(
    private requestService: RequestService,
    public sendDialog: MatDialog
  ) {}

  requestsList: Request[] = [];

  allComplete: boolean = false;

  modifiedData: Request[] = [];

  change(request: Request) {
    if (this.modifiedData.includes(request)) {
      let index = this.modifiedData.indexOf(request);
      this.modifiedData.splice(index, 1);
    } else {
      this.modifiedData.push(request);
    }
    console.log(this.modifiedData);
  }

  updateAllComplete() {
    this.allComplete =
      this.requestsList != null && this.requestsList.every((t) => t.aceptado);
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
    this.requestsList.forEach((t) => (t.aceptado = enabled));
  }

  save() {
    this.modifiedData.forEach((request) => {
      this.requestService.update(request.id, request).subscribe((res) => {
        this.requestsList = this.requestsList.filter((req) =>
          req.id === res.id ? res : req
        );
      });
    });
    this.sendDialog.open(SendRequestDialogComponent);
  }
  ngOnInit(): void {
    this.findAll();
  }

  /**
   * findAll
   */
  public findAll() {
    this.requestService
      .findAll()
      .subscribe((response) => (this.requestsList = response));
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
export class SendRequestDialogComponent {}
