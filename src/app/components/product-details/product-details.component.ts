import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-product-details',
  template: `<div *ngIf='product'>
      <h2>Product details</h2>
      <p>Name : {{product.name}}</p>
      <p>price : {{product.price}}</p>
    </div>`,
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  // pour que le component enfant recoit les details du produit a chaque iteration dans la loop ngFor dans le component pere.
  @Input() product: any; 


}
