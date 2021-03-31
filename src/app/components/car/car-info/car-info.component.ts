import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/cardetail';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.css']
})
export class CarInfoComponent implements OnInit {
  carDetailInfo:CarDetail;
  carDetailInfos:CarDetail[]=[];
  carImages:CarImage[]=[];
  imageUrl="../assets";
  dataLoaded=false;
  constructor(private carService:CarService, private activedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarDetail(params["carId"]);
        this.getCarImagesById(params["carId"]);
      }
      else {
        this.getCarDetails();
      }
    })
   
  }

  getCarDetail(carId:number){
    this.carService.getCarDetail(carId).subscribe(response=>{
      this.carDetailInfo = response.data;
      this.dataLoaded = true;
    })
  }
  getCarDetails(){
    this.carService.getCarDetails().subscribe(response=>{
      this.carDetailInfos = response.data;
      this.dataLoaded= true;
    })
  }
  getCarImagesById(carId:number){
    this.carService.getCarImagesById(carId).subscribe(response=>{
      this.carImages=response.data;
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
