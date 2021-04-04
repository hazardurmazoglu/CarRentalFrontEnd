import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/cardetail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-image-options',
  templateUrl: './car-image-options.component.html',
  styleUrls: ['./car-image-options.component.css']
})
export class CarImageOptionsComponent implements OnInit {

  carDetail:CarDetail;
  constructor(private activatedRoute:ActivatedRoute,private carService:CarService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarDetailById(params["carId"]);
        
      }
    })
  }

  getCarDetailById(id:number){
    this.carService.getCarDetail(id).subscribe(response=>{
      this.carDetail=response.data;
    })
  }

}
