import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/cardetail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.css']
})
export class CarInfoComponent implements OnInit {
  carDetailInfo:CarDetail;
  carDetailInfos:CarDetail[]=[];
  dataLoaded=false;
  constructor(private carService:CarService, private activedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(param=>{
      if(["carId"]){
        this.getCarDetail(param["carId"]);
      }
      else{
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
  

}
