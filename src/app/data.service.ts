import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './interfaces/interface-products';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { 
  }
  getData(){
    let url  = 'api/products'
    return this.http.get<any>(url)
  }
}
