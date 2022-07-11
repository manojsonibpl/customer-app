import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs'; 
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public Users : Array<User>;
  id: number;
  constructor( private http: HttpClient) { }

  public getUsers()
  {
    this.http.get<User[]>('http://localhost:3000/users')
   
  }

  public getUserbyid():Observable<User[]>
  {
    return this.http.get<User[]>('http://localhost:3000/users');
  }
}

