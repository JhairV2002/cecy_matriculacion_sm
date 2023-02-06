import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { StudentFormService } from './student-form.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
})
export class StudentFormComponent {
  constructor(
    private route: ActivatedRoute,
    private studentService: StudentFormService
  ) { }

  student$ = this.route.params.pipe(
    switchMap((params) => this.studentService.findStudent(params['id']))
  );
  // ngOnInit(): void {
  //   this.route.paramMap.subscribe((param) => {
  //     if (param.get('id')) {
  //       this.findStudent(param.get('id')!);
  //     }
  //   });
  // }
  //
  // findStudent(id: string) {
  //   this.studentService.findStudent(id).subscribe((res) => {
  //     this.student = res;
  //     console.log(this.student);
  //   });
  // }
}
