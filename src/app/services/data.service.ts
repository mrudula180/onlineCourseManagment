import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getName(){
    return localStorage.getItem('username');
  }

  setName(name: string){
    localStorage.setItem('username', name)
  }
}
