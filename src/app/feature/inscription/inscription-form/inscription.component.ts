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
    private acticatedRoute: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {}

  initialForm: Inscription = {
    inscriptionId: 0,
    name: '',
    lastname: '',
    phone: '',
    birthday: new Date(),
    enabled: false,
  };

  form: Inscription = this.initialForm;

  ngOnInit(): void {
    this.acticatedRoute.paramMap.subscribe((params) => {
      if (params.get('id')) {
        this.findById(parseInt(params.get('id')!));
      }
    });
  }
  save(): void {
    // console.log(this.form);
    // this.inscriptionService.save(this.form).subscribe(() => {
    //   this.form = this.initialForm;
    //   this.router.navigate(['/layout/inscription-list']);
    // });
    this.dialog.open(DialogSaveComponent);
  }

  cancelar(): void {
    this.dialog.open(DialogCancelComponent);
  }

  findById(id: number): void {
    this.inscriptionService.findByid(id).subscribe((res) => {
      this.form = res;
    });
  }

  deleteById(): void {
    this.inscriptionService.deleteByid(this.form.inscriptionId).subscribe(() => {
      console.log('borrado');
    });
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
