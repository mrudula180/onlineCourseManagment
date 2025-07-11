import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoginPayload } from '../app.types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  role = '';

  getRole(){
    return this.role;
  }

  setRole(role: string){
    this.role = role;
  }

  http= inject(HttpClient);

  login(loginCredentials: LoginPayload){
    return this.http.get(`users?email=${loginCredentials.email}&password=${loginCredentials.password}`);
  }
}
