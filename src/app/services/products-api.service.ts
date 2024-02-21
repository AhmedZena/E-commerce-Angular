import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../Model/IProdcut';
import { environment } from '../../environments/environment.development';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsWithApiService {
  constructor(private httpclient: HttpClient) {}

  // get all products
  getAllPrds(): Observable<IProduct[]> {
    return this.httpclient.get<IProduct[]>(`${environment.baseUrl}products`);
  }

  // get product by id
  getPrdByID(id: number): Observable<IProduct> {
    return this.httpclient.get<IProduct>(
      `${environment.baseUrl}products/${id}`
    );
  }

  // get all products ids only
  getAllPrdsIds(): Observable<string[]> {
    return this.httpclient
      .get<IProduct[]>(`${environment.baseUrl}products`)
      .pipe(
        map((products: IProduct[]) => {
          return products.map((product: IProduct) =>
            product.id ? product.id : '0'
          );
        })
      );
  }

  // get products by material name
  getPrdsByMaterial(material: string): Observable<IProduct[]> {
    return this.httpclient.get<IProduct[]>(
      `${environment.baseUrl}products?material=${material}`
    );
  }

  // get products by category id
  //  /products?CategoryID=cid
  getPrdsByCatID(catID: number): Observable<IProduct[]> {
    return this.httpclient.get<IProduct[]>(
      `${environment.baseUrl}products?categoryId=${catID}`
    );
  }

  // add new product
  addPrd(prd: IProduct): Observable<IProduct> {
    return this.httpclient.post<IProduct>(
      `${environment.baseUrl}products`,
      prd
    );
  }

  // delete product by id
  deletePrd(prdID: string): Observable<IProduct> {
    return this.httpclient.delete<IProduct>(
      `${environment.baseUrl}products/${prdID}`
    );
  }

  // update product by id
  updatePrd(prd: IProduct): Observable<IProduct> {
    return this.httpclient.put<IProduct>(
      `${environment.baseUrl}products/${prd.id}`,
      prd
    );
  }
}
