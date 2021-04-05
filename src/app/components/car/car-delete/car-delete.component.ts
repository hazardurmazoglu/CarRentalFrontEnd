import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-delete',
  templateUrl: './car-delete.component.html',
  styleUrls: ['./car-delete.component.css']
})
export class CarDeleteComponent implements OnInit {

  car:Car;
  constructor(private carService:CarService,
    private toastrService:ToastrService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarById(params["carId"]);
      }
    })
  }

  getCarById(id:number){
    this.carService.getCarById(id).subscribe(response=>{
      this.car=response.data;
    })
  }

  delete(){
    this.carService.delete(this.car).subscribe(response=>{
      this.toastrService.success("Successfuly deleted.");
        this.router.navigate(["cars"]);
    })
  }

}
