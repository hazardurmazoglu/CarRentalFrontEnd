import { HttpClient } from '@angular/common/http';;
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../models/loginModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl=environment.apiUrl;

  constructor(private httpClient:HttpClient) { }
  
  login(loginModel:LoginModel){
    let newPath=this.apiUrl+"auth/login"
    return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath,loginModel)
  }

  register(registerModel:User){
    let newPath=this.apiUrl+"auth/register";
    return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath,registerModel)
  }
  
  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }else{
      return false;
    }
  }
  logOut(){
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  }
}
