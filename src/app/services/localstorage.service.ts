import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }
  setItem<T>(key:any,object:T){
    localStorage.setItem(key,JSON.stringify(object));
  }

  getItem(key:string){
    return JSON.parse(localStorage.getItem(key)!);
  }

  removeItem(key:string){
    localStorage.removeItem(key);
  }

  isExist(key:string):boolean{
    if(JSON.parse(localStorage.getItem(key)!)){
      return true;
    }else{
      return false;
    }
  }
}
