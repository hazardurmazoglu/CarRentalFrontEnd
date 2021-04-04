import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms"
import { CarDetail } from 'src/app/models/cardetail';
import { CarImage } from 'src/app/models/carImage';
import { UserService } from 'src/app/services/user.service';
import { CarService } from 'src/app/services/car.service';
import { User } from 'src/app/models/user';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rentalAddForm: FormGroup;
  carDetailInfo:CarDetail;
  carDetailInfos:CarDetail[]=[];
  carImages:CarImage[]=[];
  user:User;
  imageUrl="../assets";
  imagePathCheckOut="./assets/checkout.png"
  dataLoaded=false;
  constructor(private activatedRoute:ActivatedRoute,
     private toastrService:ToastrService,
      private formBuilder:FormBuilder,
      private userService:UserService,
      private carService:CarService,
      private localStorageService:LocalstorageService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarDetail(params["carId"]);
        this.getCarImagesById(params["carId"]);
      }
    })
  }

  createRentalAddForm(){
    this.rentalAddForm=this.formBuilder.group({
      
    })
    
  }

  getCarDetail(carId:number){
    this.carService.getCarDetail(carId).subscribe(response=>{
      this.carDetailInfo = response.data;
      this.dataLoaded = true;
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
  getEmail(){
    let email= localStorage.getItem("email");
    return email;
  }

  getByEmail(email){
    this.userService.getbyEmail(email).subscribe(response=>{
      this.user = response.data;
      this.dataLoaded=true;
    })
  }


}
