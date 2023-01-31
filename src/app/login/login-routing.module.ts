import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from '../feature/inscription/inscription-form/inscription.component';
import { InscriptionListComponent } from '../feature/inscription/inscription-list/inscription-list.component';
import { RequestsListComponent } from '../feature/requests/requests-list/requests-list.component';
import { LoginComponent } from './login/login-form/login.component';
import { RestartComponent } from './restart/restart.component';
import { DataUserFormComponent } from './data-user/data-user-form/data-user-form.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },

      {
        path: 'inscription-form',
        component: InscriptionComponent,
      },
      {
        path: 'inscription-form/:id',
        component: InscriptionComponent,
      },
      {
        path: 'inscription-list',
        component: InscriptionListComponent,
      },
      {
        path: 'requests-list',
        component: RequestsListComponent,
      },
    ],
  },
  {
    path: 'restart',
    component: RestartComponent,
  },
  {
    path: 'data-user-form',
    component: DataUserFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
