import { Component, Input } from '@angular/core';
import { ProductsListComponent } from '../products-list/products-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../../Model/IProdcut';
import { calcDiscount } from '../../Pipes/calc-discount-pipe.pipe';
import { DashFourNumbersPipe } from '../../Pipes/dash-four-numbers.pipe';
@Component({
  selector: 'products-parent',
  standalone: true,
  imports: [
    ProductsListComponent,
    CommonModule,
    FormsModule,
    calcDiscount,
    DashFourNumbersPipe,
  ],
  templateUrl: './products-parent.component.html',
  styleUrl: './products-parent.component.scss',
})
export class ProductsParentComponent {
  constructor() {}

  ngOnInit(): void {}

  listFilterValue: string = '';
  listFilterPrice: number = 0;
  showImgs = true;

  toggleImgs() {
    this.showImgs = !this.showImgs;
  }

  /*
Iproduct:
  ID: 1,
        Name: 'Laptop one',
        description: 'this is a computer with 8GB RAM and 1TB HDD',
        Quantity: 1,
        Price: 100,
        Img: 'https://i.pcmag.com/imagery/reviews/01DwPnq2ew5930qO5p4LXWH-1..v1677608790.jpg',
        CategoryId: 1,
        Material: 'laptops',
        Discount: DiscountOffers['no-discount'],
        numOnCart: 1,
*/

  cart: any[] = [];
  ///  addPrdsEvent="addFunProd($event)"
  addFunProd(product: any) {
    if (this.cart.indexOf(product) == -1) {
      console.log('not in cart');
      product.numOnCart = 1;
      this.cart.push(product);
    } else {
      console.log('already in cart');
      product.numOnCart++;
      // this.cart[this.cart.indexOf(product)].numOnCart++;
    }
    console.log(this.cart);
  }

  //  <button class="btn btn-danger" (click)="removeFromCart(product.ID)">
  //       <i class="fas fa-trash"></i>
  //       Remove
  //     </button>

  removeFromCart(id: number) {
    console.log(id);
    this.cart.splice(this.cart.indexOf(id), 1);
  }

  // calcTotal() {
  //   let total = 0;
  //   this.cart.forEach((element) => {
  //     total += element.Price * element.numOnCart;
  //   });
  //   return total;
  // }

  calcDiscount(discount: number, price: number) {
    return price - (price * discount) / 100;
  }
}
