import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/cardetail';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-delete-car-image',
  templateUrl: './delete-car-image.component.html',
  styleUrls: ['./delete-car-image.component.css']
})
export class DeleteCarImageComponent implements OnInit {
  imageUrl="../assets";
  carImages:CarImage[]=[];
  carDetail:CarDetail;
  constructor(private carService:CarService, private activatedRoute:ActivatedRoute, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarImagesById(params["carId"]);
        this.getCarDetailById(params["carId"]);
      }
    })
  }

  getCarImagesById(id:number){
    this.carService.getCarImagesById(id).subscribe(response=>{
      this.carImages=response.data;

    })
  }

  getCarDetailById(id:number){
    this.carService.getCarDetail(id).subscribe(response=>{
      this.carDetail=response.data;
    })
  }
  getSliderClassName(index:Number){
    if(index == 0){
      return "carousel-item active";
    } else {
      return "carousel-item";
    }
  }

  deleteCarImageById(carImageId:number){
    this.carService.deleteCarImageById(carImageId).subscribe(response=>{
      this.toastrService.info("Successfully deleted.")
    })
  }

}
