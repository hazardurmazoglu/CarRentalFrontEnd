import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CarDetail } from 'src/app/models/cardetail';
import { CarImage } from 'src/app/models/carImage';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  imageUrl="../assets";
  imagePathLogo="../assets/profilephoto.png"
  carDetails:CarDetail[]= [];
  carImages:CarImage[]=[];
  dataLoaded=false;
  constructor(private carService:CarService,
     private activedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarDetailsByBrand(params["brandId"]);
      }else if(params["colorId"]){
        this.getCarDetailsByColor(params["colorId"]);
      }else if(params["brandId"] && params["colorId"]){
        this.getCarDetailsByBrandAndColor(params["brandId"],params["colorId"]);
      }else{
        this.getCarDetails();
      }
    })
    
  }

  getCarDetails(){
    this.carService.getCarDetails().subscribe(response=>{
      this.carDetails = response.data;
      this.dataLoaded = true;
    })
  }
  getCarDetailsByBrand(brandId:number){
    this.carService.getCarDetailsByBrand(brandId).subscribe(response=>{
      this.carDetails=response.data;
    })
  }
  getCarDetailsByColor(colorId:number){
    this.carService.getCarDetailsByColor(colorId).subscribe(response=>{
      this.carDetails=response.data;
    })
  }
  getCarDetailsByBrandAndColor(brandId:number,colorId:number){
    this.carService.getCarDetailsByBrandAndColor(brandId,colorId).subscribe(response=>{
      this.carDetails=response.data;
    })
  }
  getCarImagesById(carId:number){
    this.carService.getCarImagesById(carId).subscribe(response=>{
      this.carImages=response.data;
      this.dataLoaded=true;
    })
  }
  getSliderClassName(index:Number){
    if(index == 0){
      return "carousel-item active";
    } else {
      return "carousel-item";
    }
  }

  
}
