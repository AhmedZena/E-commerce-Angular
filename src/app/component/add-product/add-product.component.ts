import { Component } from '@angular/core';
import { IProduct } from '../../Model/IProdcut';
import { IMaterial } from '../../Model/IMaterial';
import { ProductsWithApiService } from '../../services/products-api.service';
import { CategoriesApiService } from '../../services/categories-api.service';
import { MaterialsApiService } from '../../services/materials-api.service';
import { ICategory } from '../../Model/ICategory';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
})
export class AddProductComponent {
  product!: IProduct;
  categories!: ICategory[];
  materials!: IMaterial[];
  isFormSubmitted = false;
  constructor(
    private productService: ProductsWithApiService,
    private categoryService: CategoriesApiService,
    private materialService: MaterialsApiService
  ) {
    this.product = {
      id: Math.floor(Math.random() * 1000).toString(),
      name: '', // ok
      description: '', // ok
      quantity: 0, // ok
      price: 0, // ok
      img: '',
      categoryId: 0, // ok
      material: '',
      discount: 10, // ok
    };

    this.categoryService.getAllCats().subscribe((data) => {
      this.categories = data;
      console.log(this.categories);
    });

    this.materialService.getAllMaterials().subscribe((data) => {
      this.materials = data;
      console.log(this.materials);
    });
  }
  // saveProduct() {
  //   console.log(this.product);
  // }

  addProduct() {
    this.productService.addPrd(this.product).subscribe((data) => {
      console.log(data);
    });
  }

  // onSubmit() {
  //   this.isFormSubmitted = true;
  //   if (this.product.name && this.product.description) {
  //     this.addProduct();
  //   }
  // }
}
