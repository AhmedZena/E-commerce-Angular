import { IMaterial } from './../Model/IMaterial';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MaterialsApiService {
  constructor(private httpclient: HttpClient) {}

  // get all materials
  getAllMaterials(): Observable<IMaterial[]> {
    return this.httpclient.get<IMaterial[]>(`${environment.baseUrl}categories`);
  }

  // get material by id
  getMaterialByID(catID: number): Observable<IMaterial> {
    return this.httpclient.get<IMaterial>(
      `${environment.baseUrl}materials/${catID}`
    );
  }
}
