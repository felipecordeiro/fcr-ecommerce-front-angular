import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MegaMenuModule } from 'primeng/megamenu';
import { PanelModule } from 'primeng/panel';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    MegaMenuModule,
    PanelModule
  ],
  exports: [
    ButtonModule,
    MegaMenuModule,
    PanelModule
  ]
})
export class PrimeNgModule { }
