import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/cardetail';
import { CarImage } from 'src/app/models/carImage';
import { AuthService } from 'src/app/services/auth.service';
import { CarService } from 'src/app/services/car.service';
import { UserService } from 'src/app/services/user.service';

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
  constructor(private carService:CarService, private activatedRoute:ActivatedRoute,private userService:UserService,
    private authService:AuthService,
    private toastrService:ToastrService,
    private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
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
  isLogOK(){
    if(this.authService.isAuthenticated()){
      return true;
    }else{
      this.toastrService.error("You need to log in.")
      this.router.navigate(["/login"])
      return false;
    }
  }
  


  
  

}
