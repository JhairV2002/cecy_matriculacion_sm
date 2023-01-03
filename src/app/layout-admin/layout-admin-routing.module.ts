import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainAdminComponent } from './main-admin/main-admin.component';
import { LoginComponent } from '../login/login/login.component';
import { RequestsListComponent } from '../feature/requests/requests-list/requests-list.component';

const routes: Routes = [
  {
    path: '',
    component: MainAdminComponent,
    children: [
      {
        path: '',
        component: RequestsListComponent
      },
      {
        path: 'requests-list',
        component: RequestsListComponent,
      },

    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutAdminRoutingModule {}
