import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Products } from 'src/app/core/mocks/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  productsList: IProduct[] = Products

  constructor(private messageService: MessageService) { }

  addToCart(name: string) {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: `${name} added to cart`  })
  }
}
