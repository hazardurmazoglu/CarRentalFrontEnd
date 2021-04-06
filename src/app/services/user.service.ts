import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
import { OperationClaim } from '../models/operationClaim';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl=environment.apiUrl;
  constructor(private httpClient:HttpClient) { }


  getbyEmail(email:string):Observable<SingleResponseModel<User>>{
    let newPath= this.apiUrl+"users/getbyemail?email="+email;
    return this.httpClient.get<SingleResponseModel<User>>(newPath);
  }

  getUserById(id: number): Observable<SingleResponseModel<User>> {
    let newPath = this.apiUrl+"users/getbyid?id="+id;
    return this.httpClient.get<SingleResponseModel<User>>(newPath);
  }

  userUpdate(user:User):Observable<ResponseModel>{
    let newPath= this.apiUrl+"users/update";
    return this.httpClient.post<ResponseModel>(newPath,user);
  }

  getClaims(user:User):Observable<ListResponseModel<OperationClaim>>{
    let newPath= this.apiUrl+"users/getclaims";
    return this.httpClient.get<ListResponseModel<OperationClaim>>(newPath,)
  }

  getUserClaims(id:number):Observable<ListResponseModel<OperationClaim>>{
    let newPath= this.apiUrl+"users/getuserclaims?id="+id;
    return this.httpClient.get<ListResponseModel<OperationClaim>>(newPath)
  }
  getAllUsers():Observable<ListResponseModel<User>>{
    let newPath= this.apiUrl+"users/getall";
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }






}
