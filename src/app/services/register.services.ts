import { Login } from './../login/DTO/login';
import { Register } from './../login/DTO/register';
import { Injectable } from '@angular/core';
import { Headers,Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import "rxjs/add/operator/toPromise"
@Injectable()
export class RegisterService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private registerUrl = 'http://localhost:3040';
    constructor(private http: Http) { }
    registrerUser(Registeruser : Register): Promise<Register> {
        return this.http.post(this.registerUrl+ "/InsertRegistration",Registeruser,{headers: this.headers})
                   .toPromise()
                   .then(response => response.json().data as Register)
                   .catch();
      }
      
      login(login : Login): Promise<Login> {
        return this.http.post(this.registerUrl+ "/login",login,{headers: this.headers})
                   .toPromise()
                   .then(response => response.json().data as Login)
                   .catch();
      }
      
}