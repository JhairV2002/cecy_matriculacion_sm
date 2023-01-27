import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Inscription } from '../inscription';
import { InscriptionService } from '../inscription.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
})
export class InscriptionComponent implements OnInit {
  constructor(
    private inscriptionService: InscriptionService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {}

  initialForm: Inscription = {
    id: 0,
    userId: 1,
    courseId: 1,
    publicity: 1,
    otherCourses: 1,
    requirements: 1,
    sponsoredCourse: false,
    institutionContact: ""
  };

  ngOnInit(): void {

  }
  save(): void {
    console.table(this.initialForm);
    this.inscriptionService.save(this.initialForm).subscribe(() => {
      this.initialForm = {
        id: 0 ,
        userId: 0,
        courseId: 0,
        publicity: 0,
        otherCourses: 0,
        requirements: 0,
        sponsoredCourse: false,
        institutionContact: ""
      };
      this.router.navigate(['/layout/inscription-list']);
      this.dialog.open(DialogSaveComponent);
    });
  }

  cancelar(): void {
    this.dialog.open(DialogCancelComponent);
  }

}


@Component({
  selector: 'app-dialog-save',
  templateUrl: './dialog-save.component.html',
})
export class DialogSaveComponent{

}
@Component({
  selector: 'app-dialog-cancel',
  templateUrl: './dialog-cancel.component.html',
})
export class DialogCancelComponent{

}
