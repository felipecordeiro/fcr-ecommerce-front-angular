import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './page/product-list.component';
import { PrimeNgModule } from 'src/app/modules/prime-ng.module';


@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class ProductsModule { }
