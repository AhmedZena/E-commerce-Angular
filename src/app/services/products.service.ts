import { Injectable } from '@angular/core';
import { IProduct } from '../Model/IProdcut';
import { DiscountOffers } from '../Model/DiscountOffers';
import { environment } from '../../environments/environment.development';
// import { ProductDetailsComponent } from '../component/product-details/product-details.component';
@Injectable({
  providedIn: 'root',
  // providedIn: 'any', // to be singleton in all app
})

// using providers to be singleton in one component
// @Injectable({
// providers: [ProductDetailsComponent]
// })
export class ProductsService {
  private products: IProduct[] = [];
  private productsIds: string[] = []; // holding ids of products
  private lastClickedProductId: string = '1';
  constructor() {
    this.products = [
      {
        id: '1',
        name: 'Laptop one',
        description: 'this is a computer with 8GB RAM and 1TB HDD',
        quantity: 1,
        price: 100,
        img: 'https://i.pcmag.com/imagery/reviews/01DwPnq2ew5930qO5p4LXWH-1..v1677608790.jpg',
        categoryId: 1,
        material: 'laptops',
        discount: DiscountOffers['no-discount'],
      },
      {
        id: '7',
        name: 'computer one',
        description: 'this is a computer with 16GB RAM and 2TB HDD and 1TB SSD',
        quantity: 0,
        price: 200,
        img: 'https://images.unsplash.com/photo-1517518295033-d5ab8ca078cc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRlc2t0b3AlMjBjb21wdXRlcnxlbnwwfHwwfHx8MA%3D%3D',
        categoryId: 2,
        material: 'computers',
        discount: DiscountOffers['15%'],
      },
      {
        id: '3',
        name: 'computer two',
        description: 'this is a computer with 32GB RAM and 4TB HDD and 2TB SSD',
        quantity: 4,
        price: 300,
        img: 'https://images.unsplash.com/photo-1634803828978-24dabef75a5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8eGRyfGVufDB8fDJ8fHww&w=1000&q=80',
        categoryId: 4,
        material: 'computers',
        discount: DiscountOffers['10%'],
      },
      {
        id: '4',
        name: 'laptop two',
        description: 'this is a computer with 64GB RAM and 8TB HDD and 4TB SSD',
        quantity: 20,
        price: 400,
        img: 'https://www.cnet.com/a/img/resize/01ebf2fb7a844ce940f0b1c3ddc148faddc4a6c1/hub/2022/04/27/b796792b-5b34-4405-83eb-efc66371ee06/samsung-galaxy-book-2-pro-360-01.jpg?auto=webp&fit=crop&height=900&width=1200',
        categoryId: 5,
        material: 'laptops',
        discount: DiscountOffers['15%'],
      },
      {
        id: '5',
        name: 'computer three',
        description:
          'this is a computer with 128GB RAM and 16TB HDD and 8TB SSD',
        quantity: 1,
        price: 700,
        img: 'https://www.cnet.com/a/img/resize/2710def3d920fb2f15e73c8f01b1e49cdc245818/hub/2022/09/28/a54e7f3f-33f8-4822-b49c-0ccd0f227ab4/govee-light-bars.jpg?auto=webp&fit=crop&height=360&width=640',
        categoryId: 1,
        material: 'computers',
        discount: DiscountOffers['no-discount'],
      },
    ];

    // get ids of products
    this.productsIds = this.products.map((product: IProduct) => product.id);
  }

  getProducts(): IProduct[] {
    return this.products;
  }

  performSearch(filterValue: string): IProduct[] {
    filterValue = filterValue.trim().toLowerCase();
    return this.products.filter((product: IProduct) =>
      product.name.toLowerCase().includes(filterValue)
    );
  }

  getProductById(id: string): IProduct {
    // return this.products.find((product: IProduct) => product.id === id);
    // return this.products.find((product: IProduct) => product.id === id);
    let product: IProduct = this.products.find(
      (product: IProduct) => product.id === id
    )!;
    // return product;
    if (product) {
      return product;
    }
    throw new Error('Product not found');
  }

  // set and get lastId
  getLastId(): string {
    return this.lastClickedProductId;
  }

  setLastId(id: string): void {
    this.lastClickedProductId = id;
  }

  // get ids of products
  getIds(): string[] {
    // console.log(this.products.map((product: IProduct) => product.id));
    // return this.products.map((product: IProduct) => product.id);
    return this.productsIds;
  }

  // get next id
  getNextId(prodId: string): string | undefined {
    // return this.getIds().find((id: string) => id > prodId);
    // index of prodId
    // let index = this.getIds().indexOf(prodId);
    // return this.getIds()[index + 1];
    // return this.getIds()[this.getIds().indexOf(prodId) + 1];
    console.log(this.productsIds.indexOf(prodId));
    const index = this.productsIds.indexOf(prodId);
    if (index === this.productsIds.length - 1 || index === -1) {
      return undefined;
    }
    console.log(this.productsIds[index + 1]);
    return this.productsIds[index + 1];
  }

  // get previous id
  getPrevId(prodId: string): string | undefined {
    // return this.getIds()
    //   .reverse()
    //   .find((id: string) => id < prodId);
    // console.log(this.getIds().indexOf(prodId));
    // return this.getIds()[this.getIds().indexOf(prodId) - 1];
    const index = this.productsIds.indexOf(prodId);
    if (index === 0 || index === -1) {
      return undefined;
    }
    return this.productsIds[index - 1];
  }
}
