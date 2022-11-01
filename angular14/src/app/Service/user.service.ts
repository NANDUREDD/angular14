import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  // provide the backend logic server address here
  private url: string = '';

  constructor(private _http :  HttpClient) { }

  authenticateUser(inputdata : any ): Observable<any>{
    return this._http.post(this.url,inputdata);
  }

  isLoggedIn(){}
}
