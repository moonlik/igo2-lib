import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatButtonModule,
  MatIconModule
} from '@angular/material';

import { IgoLanguageModule } from '@igo2/core';
import { IgoPanelModule } from '@igo2/common';
import {
  IgoMapModule,
  IgoOverlayModule,
  IgoQueryModule,
  IgoFeatureModule
} from '@igo2/geo';

import { AppQueryComponent } from './query.component';
import { AppQueryRoutingModule } from './query-routing.module';

@NgModule({
  declarations: [AppQueryComponent],
  imports: [
    AppQueryRoutingModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    IgoPanelModule,
    IgoMapModule,
    IgoOverlayModule,
    IgoQueryModule,
    IgoFeatureModule,
    IgoLanguageModule.forRoot()
  ],
  exports: [AppQueryComponent]
})
export class AppQueryModule {}
