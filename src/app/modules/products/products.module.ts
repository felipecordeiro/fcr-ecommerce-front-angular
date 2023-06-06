import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './page/product-list.component';
import { PrimeNgModule } from 'src/app/shared/prime-ng.module';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
  declarations: [
    ProductListComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class ProductsModule { }
