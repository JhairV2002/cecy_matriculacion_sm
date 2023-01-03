import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
})
export class StudentFormComponent {
  constructor(private route: ActivatedRoute) { }

  id$ = this.route.paramMap.pipe(map((params) => params.get('id')));

  observations: string[] = [
    'La cedula se ve borrosa',
    'Se pidio acta de grado, no certificado',
  ];
}
