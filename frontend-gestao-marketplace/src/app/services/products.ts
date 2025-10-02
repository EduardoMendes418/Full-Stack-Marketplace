import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { INewProductRequest } from '../interface/new-product-request';
import { Observable } from 'rxjs';
import { INewProductResponse } from '../interface/new-product-response';
import { getProducts } from '../../../../backend-gestao-marketplace/src/controllers/products-controller';
import { IProductsResponse } from '../interface/products-response';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly _httpClient = inject(HttpClient);

  saveProduct(product: INewProductRequest): Observable<INewProductResponse> {
    return this._httpClient.post<INewProductResponse>(
      'http://localhost:3000/api/products',
      product
    );
  }

  getProducts(): Observable<IProductsResponse> {
    return this._httpClient.get<IProductsResponse>('http://localhost:3000/api/products');
  }
}
