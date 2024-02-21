import { Injectable } from '@angular/core';
import { ICategory } from '../Model/ICategory';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class CategoriesApiService {
  constructor(private httpclient: HttpClient) {}

  // get all categories
  getAllCats(): Observable<ICategory[]> {
    return this.httpclient.get<ICategory[]>(`${environment.baseUrl}categories`);
  }

  // get category by id
  getCatByID(catID: number): Observable<ICategory> {
    return this.httpclient.get<ICategory>(
      `${environment.baseUrl}categories/${catID}`
    );
  }
}
