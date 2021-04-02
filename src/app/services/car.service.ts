import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetail } from '../models/cardetail';
import { SingleResponseModel } from '../models/singleResponseModel';
import { CarImage } from '../models/carImage';
import { Car } from '../models/car';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl=environment.apiUrl;

  constructor(private httpClient:HttpClient) { }

  getCarDetail(carId:number):Observable<SingleResponseModel<CarDetail>>{
    let newPath= this.apiUrl+"cars/getcardetailbyid?carId="+carId;
    return this.httpClient.get<SingleResponseModel<CarDetail>>(newPath);
  }

  getCarDetails():Observable<ListResponseModel<CarDetail>>{
    let newPath= this.apiUrl+"cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarDetailsByBrand(brandId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath= this.apiUrl+"cars/getbybrand?brandid="+brandId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarDetailsByColor(colorId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath= this.apiUrl+"cars/getbycolor?colorid="+colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarDetailsByBrandAndColor(brandId:number,colorId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath= this.apiUrl+"cars/getcarsbybrandandcolor?brandid="+brandId+"&colorId="+colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarImagesById(carId:number){
    let newPath= this.apiUrl+"carimages/getimagesbycarid?carId="+carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);

  }

  add(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/add",car)
  }
}
