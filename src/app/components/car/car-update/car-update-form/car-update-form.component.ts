import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-update-form',
  templateUrl: './car-update-form.component.html',
  styleUrls: ['./car-update-form.component.css']
})
export class CarUpdateFormComponent implements OnInit {

  carUpdateForm:FormGroup;
  car:Car;
  dataLoaded=false;
  constructor( private carService:CarService,
    private toastrService:ToastrService,
    private router:Router,
    private formBuilder:FormBuilder,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarById(params["carId"]);
        this.createCarUpdateForm();
      }
    })
  }
  createCarUpdateForm(){
    this.carUpdateForm=this.formBuilder.group({
      colorId:["",Validators.required],
      brandId:["",Validators.required],
      dailyPrice:["",Validators.required],
      minFindexScore:["",Validators.required],
      modelYear:["",Validators.required],
      description:["",Validators.required]
    })
  }


  getCarById(carId:number){
    this.carService.getCarById(carId).subscribe(response=>{
      this.car=response.data;
    })
  }
  carUpdate(){
    if(this.carUpdateForm.valid){
      let carModel= Object.assign({},this.carUpdateForm.value)
      carModel.carId=this.car.carId;
      this.carService.update(carModel).subscribe(response=>{
        this.toastrService.success("Successfuly updated.");
        this.router.navigate(["cars"]);
      },responseError=>{
        this.toastrService.error("Error");
      })
    }else{
      this.toastrService.error("error");
    }

  }

  

}
