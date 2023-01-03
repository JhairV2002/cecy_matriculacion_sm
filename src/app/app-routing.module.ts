import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentsComponent } from './students/students.component';


const routes: Routes = [
  {
    path: 'courses',
    component: CourseListComponent,
  },

  {
    path: 'courses/:id',
    component: CoursePageComponent,
  },
  {
    path: 'students',
    component: StudentsComponent,
  },
  {
    path: 'students/:id',
    component: StudentFormComponent,
  },
  // {
  //   path: '',
  //   redirectTo: '/layout/dashboard', pathMatch: 'full' },

    {
      path: '',
      redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'layout',
    loadChildren: () =>
      import('./layout/layout.module').then((m) => m.LayoutModule),
  },
  {
    path: 'feature',
    loadChildren: () =>
      import('./feature/feature.module').then((m) => m.FeatureModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'layout-admin',
    loadChildren: () =>
      import('./layout-admin/layout-admin.module').then((m) => m.LayoutAdminModule),
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
