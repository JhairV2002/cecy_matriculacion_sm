import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitudMatriculaComponent } from '../feature/solicitud-matricula/solicitud-matricula.component';
import { ListSolicitudMatriculasComponent } from '../feature/solicitud-matricula/list/list.component';
import { InscriptionComponent } from '../feature/inscription/inscription-form/inscription.component';
import { InscriptionListComponent } from '../feature/inscription/inscription-list/inscription-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from '../login/login/login-form/login.component';
import { RequestsListComponent } from '../feature/requests/requests-list/requests-list.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },

      {
        path: 'solicitudes-matriculas',
        children: [
          { path: '', redirectTo: 'list', pathMatch: 'full' },
          { path: 'list', component: ListSolicitudMatriculasComponent },
        ],
      },
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
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
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
