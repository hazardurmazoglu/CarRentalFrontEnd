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
  addCarImage(carImage:CarImage):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"carImages/add",carImage);
  }
  deleteCarImage(carImage:CarImage):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"carImages/delete",carImage);
  }
  deleteCarImageById(carImageId:number):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"carImages/delete/?carImageId="+carImageId,carImageId);
  }
  update(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/update",car);
  }

  getCarById(id:number):Observable<SingleResponseModel<Car>>{
    let newPath= this.apiUrl+"cars/getbyid?id="+id;
    return this.httpClient.get<SingleResponseModel<Car>>(newPath);
  }

  delete(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/delete",car);
  }

  uploadImage(image: File,car:Car):Observable<any> {

    console.log(image.name)
    const formData:FormData = new FormData();

    formData.append('Image', image);
    formData.append('CarId',car.carId.toString());
    formData.append('BrandId', car.brandId.toString());
    formData.append('ColorId',car.colorId.toString());
    formData.append('MinFindexScore',car.minFindexScore.toString());
    formData.append('ModelYear',car.modelYear.toString());
    formData.append('DailyPrice',car.dailyPrice.toString());
    formData.append('Description',car.description.toString());

    let newPath=this.apiUrl+'cars/addPreviewPhoto';
    return this.httpClient.post<ResponseModel>(newPath,formData,{
      reportProgress: true,
      responseType: 'json',
    });
    
  }
  

}
