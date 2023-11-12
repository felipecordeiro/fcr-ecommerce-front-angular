import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MegaMenuModule } from 'primeng/megamenu';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';



@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    MegaMenuModule,
    PanelModule,
    ToastModule,
    MessagesModule
  ],
  providers: [
    MessageService
  ],
  exports: [
    ButtonModule,
    MegaMenuModule,
    PanelModule,
    ToastModule,
    MessagesModule
  ]
})
export class PrimeNgModule { }
