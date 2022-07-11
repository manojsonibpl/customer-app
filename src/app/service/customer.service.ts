import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  public customers: Array<Customer>;
  id: number;
  constructor( private http: HttpClient) { }

  public getCustomersold() {
    return this.customers = [
      { "id": 1001, "firstname": "mayank", "lastname": "singh", "email": "mayank.singh@gmai.com", "password": "12345", "confirmpassword": "12345", "houseno": "A-101", "street": "mig", "state": "mp", "city": "indore", "country": "India", "pincode": 200221 },
      { "id": 1002, "firstname": "ajay", "lastname": "prakash", "email": "ajay.prakash@gmai.com", "password": "12345", "confirmpassword": "12345", "houseno": "b-102 mig", "street": "mig", "state": "mp", "city": "bhopal", "country": "India", "pincode": 200222 },
      { "id": 1003, "firstname": "kapil", "lastname": "thakur", "email": "kapil.thakur@gmai.com", "password": "12345", "confirmpassword": "12345", "houseno": "c-103 mig", "street": "mig", "state": "mp", "country": "India", "city": "jabalpur", "pincode": 200223 },
      { "id": 1004, "firstname": "ratnesh", "lastname": "saini", "email": "ratnesh.saini@gmai.com", "password": "12345", "confirmpassword": "12345", "houseno": "d-104 mig", "street": "mig", "state": "mp", "city": "inodre", "country": "India", "pincode": 200221 },
      { "id": 1005, "firstname": "amit", "lastname": "prakash", "email": "amit.prakash@gmai.com", "password": "12345", "confirmpassword": "12345", "houseno": "e-105 mig", "street": "mig", "state": "mp", "city": "gwalior", "country": "India", "pincode": 200224 },
      { "id": 1006, "firstname": "jayesh", "lastname": "yadev", "email": "jayesh.yadev@gmai.com", "password": "12345", "confirmpassword": "12345", "houseno": "f-106 mig", "street": "mig", "state": "mp", "city": "bhopal", "country": "India", "pincode": 200222 },
      { "id": 1007, "firstname": "abhijeet", "lastname": "sen", "email": "abhijeet.sen@gmai.com", "password": "12345", "confirmpassword": "12345", "houseno": "g-107 mig", "street": "mig", "state": "mp", "city": "sager", "country": "India", "pincode": 200220 }
    ]
  }

  public getCustomers():Observable<Customer[]>
  {
    return this.http.get<Customer[]>('http://localhost:3000/customers')
   }

  public getCustomerbyid(id) {
    return this.customers.find(x => x.id == id)
  }
}
