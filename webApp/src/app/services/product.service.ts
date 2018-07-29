import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
//import { Observable } from 'rxjs';
import { Observable, Subject, pipe } from 'rxjs';
import { List } from '../models/List'
import 'rxjs/Rx';
import 'rxjs/add/operator/map'


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : Http) {}

   
  private serverApi   = 'http://localhost:5000';



  public getAllLists():Observable<List[]> {
        
    let URI = `${this.serverApi}/api/product/allproduct/`;
      return this.http.get(URI)
          .map(res => res.json())
          .map(res => <List[]>res.lists);
  }



  public addList(list: List) {
    let URI = `${this.serverApi}/api/product/addproduct/`;
    let headers = new Headers;
    let body = JSON.stringify({product: list.product, inStock: list.inStock});
    headers.append('Content-Type', 'application/json');
    return this.http.post(URI, body ,{headers: headers})
    .map(res => res.json());
    }



  public purchase(list: List) {
    let URI = `${this.serverApi}/api/product/placeorder/`;
    let headers = new Headers;
    let body = JSON.stringify({quantityRequested: list.quantityRequested, Product: list.Product,customerName:list.customerName });
    console.log('body printing ' + body);
    headers.append('Content-Type', 'application/json');
    return this.http.post(URI, body ,{headers: headers})
    .map(res => res.json());
  }

}
