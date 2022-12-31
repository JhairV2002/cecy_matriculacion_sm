import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Course } from '../course-list/course';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css'],
})
export class CoursePageComponent implements OnInit {
  course!: Course;
  panelOpenState: boolean = false;

  constructor(private route: ActivatedRoute) { }

  id$ = this.route.paramMap.pipe(map((params) => params.get('id')));
  ngOnInit(): void {
    this.course = history.state;
    // console.log(this.course);
  }
}
