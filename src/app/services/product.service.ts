import { Product } from './../model/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment_new';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // private baseUrl: any = 'https://ranjithk8s.duckdns.org:31366/product';
  private baseUrl: any = environment.api_base_url;
  public product: Product = new Product();

  constructor(private http: HttpClient) { }

  public getAllProduct(): Observable<Product> {
    const url = this.baseUrl + '/list';
    return this.http.get<Product>(url);
  }

  public addProduct(product: Product): Observable<Product> {
    const url = this.baseUrl + '/add';
    return this.http.post<Product>(url, product);
  }

  public updateProduct(product: Product): Observable<Product> {
    const url = this.baseUrl + '/update';
    return this.http.put<Product>(url, product);
  }

  public deleteProduct(id: number): Observable<Product> {
    const url = this.baseUrl + '/delete/' + id;
    return this.http.delete<Product>(url);
  }

  // Return assigned variable product
  getter() {
    return this.product;
  }

  // Set Value into variable product
  setter(product: Product) {
    this.product = product;
  }
}