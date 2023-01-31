import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../layout/material.model';
import { TableOverviewExample } from './table/table-overview-example';
import { SolicitudMatriculaComponent } from './solicitud-matricula/solicitud-matricula.component';
import { ListSolicitudMatriculasComponent } from './solicitud-matricula/list/list.component';
import { HeaderComponent } from './solicitud-matricula/header/header.component';
import { TabsComponent } from './solicitud-matricula/header/tabs/tabs.component';
import { BreadcrumbsComponent } from './solicitud-matricula/header/breadcrumbs/breadcrumbs.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { InscriptionComponent } from './inscription/inscription-form/inscription.component';
import { InscriptionListComponent } from './inscription/inscription-list/inscription-list.component';
import { InscriptionToolbarComponent } from './inscription/inscription-toolbar/inscription-toolbar.component';
import { InscriptionSearchComponent } from './inscription/inscription-search/inscription-search.component';
import { RequestsListComponent } from './requests/requests-list/requests-list.component';
import { RequestsSearchComponent } from './requests/requests-search/requests-search.component';
import { RequestsToolbarComponent } from './requests/requests-toolbar/requests-toolbar.component';
import { MatDialogModule } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SendRequestDialogComponent } from './requests/requests-list/requests-list.component';
import { DialogCancelComponent } from './inscription/inscription-form/inscription.component';
import { DialogSaveComponent } from './inscription/inscription-form/inscription.component';
import { ComboboxPublicityComponent } from './combobox-publicity/combobox-publicity.component';


@NgModule({
  declarations: [
    TableOverviewExample,
    SolicitudMatriculaComponent,
    ListSolicitudMatriculasComponent,
    HeaderComponent,
    TabsComponent,
    BreadcrumbsComponent,
    InscriptionComponent,
    InscriptionListComponent,
    InscriptionToolbarComponent,
    InscriptionSearchComponent,
    RequestsListComponent,
    RequestsSearchComponent,
    RequestsToolbarComponent,
    SendRequestDialogComponent,
    DialogCancelComponent,
    DialogSaveComponent,
    ComboboxPublicityComponent,
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule
  ],
})
export class FeatureModule {}
