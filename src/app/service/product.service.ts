import { Injectable } from '@angular/core';
import { observable } from 'rxjs'; 
import { Product } from '../model/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products : Array<Product>;
  id: number;
  constructor() { }

  public getProducts()
  {
    return this.products=[
      {id:1001, name:'Keyboard', type:'1', price:300, expirydate: new Date('1/3/2022')},
      {id:1002, name:'Mouse', type:'2', price:200, expirydate:new Date('01/03/2022')},
      {id:1003, name:'Laptop', type:'3', price:30000, expirydate:new Date('01/23/2025')},
      {id:1004, name:'TV', type:'4', price:20000, expirydate:new Date('01/03/2024')}
    ]
   
  }

  public getProductbyid(id)
  {
    return this.products.find(x=>x.id==id)
  }
}
