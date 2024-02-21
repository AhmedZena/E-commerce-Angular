import { Component } from '@angular/core';
import { IProduct } from '../../../Model/IProdcut';
import { ProductsWithApiService } from '../../../services/products-api.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-products-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './products-dashboard.component.html',
  styleUrl: './products-dashboard.component.scss',
})
export class ProductsDashboardComponent {
  products: IProduct[] = [];

  constructor(
    private productsService: ProductsWithApiService,
    private router: Router
  ) {
    this.productsService.getAllPrds().subscribe((products) => {
      this.products = products;
    });
  }

  deleteProduct(id: string) {
    this.productsService.deletePrd(id).subscribe(() => {
      this.products = this.products.filter((product) => product.id !== id);
    });
  }

  updateProduct(id: string) {
    this.router.navigate([`/add-product/${id}`]);
  }
}
