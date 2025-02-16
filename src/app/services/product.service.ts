import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  // GET a la lista de productos
  getAllProducts(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }
}
