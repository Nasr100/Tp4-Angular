import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: any[] = [
    {id: 1, name: 'product1',price :10.99},
    {id: 2, name: 'product2',price :19.99},
    {id: 3, name: 'product3',price :20.99},
  ] ;


  deleteProduct(productId: number):void{
    //passer tous les produits qui n'ont pas la meme id passer en argument(productId).
    this.products = this.products.filter(product => product.id !== productId);
  }
  

}
