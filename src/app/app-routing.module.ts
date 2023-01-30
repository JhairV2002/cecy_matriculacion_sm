import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarreersComponent } from './carreers/carreers.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CoursePageComponent } from './course-page/course-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'courses',
  },
  {
    path: 'courses/:nombreCarrera',
    component: CourseListComponent,
  },
  {
    path: 'carreers',
    component: CarreersComponent,
  },
  {
    path: 'courses/name/:nombreCurso',
    component: CoursePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
