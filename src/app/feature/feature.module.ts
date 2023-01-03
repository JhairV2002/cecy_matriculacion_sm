import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';
import { FormsModule } from '@angular/forms';
import { InscriptionComponent } from './inscription/inscription-form/inscription.component';
import { InscriptionListComponent } from './inscription/inscription-list/inscription-list.component';
import { InscriptionToolbarComponent } from './inscription/inscription-toolbar/inscription-toolbar.component';
import { ComboComponent } from './inscription/combo/combo.component';
import { InscriptionSearchComponent } from './inscription/inscription-search/inscription-search.component';
import { RequestsListComponent } from './requests/requests-list/requests-list.component';
import { RequestsSearchComponent } from './requests/requests-search/requests-search.component';
import { RequestsToolbarComponent } from './requests/requests-toolbar/requests-toolbar.component';
import { MatDialogModule } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SendRequestDialogComponent } from './requests/requests-list/requests-list.component';


@NgModule({
  declarations: [
  InscriptionComponent,
  InscriptionListComponent,
  InscriptionToolbarComponent,
  InscriptionSearchComponent,
  ComboComponent,
  RequestsListComponent,
  RequestsSearchComponent,
  RequestsToolbarComponent,
  SendRequestDialogComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule
  ],
})
export class FeatureModule {}
