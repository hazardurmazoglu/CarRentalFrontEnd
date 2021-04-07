import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {
  carAddForm:FormGroup;
  colors:Color[]=[];
  brands:Brand[]=[]

  constructor(private toastrService:ToastrService, private formBuilder:FormBuilder, private carService:CarService,
    private colorService:ColorService, private brandService:BrandService) { }

  ngOnInit(): void {
    this.createCarAddForm();
    this.getColors();
    this.getBrands();
  }

  createCarAddForm(){
    this.carAddForm= this.formBuilder.group({
      brandId:["",Validators.required],
      colorId:["",Validators.required],
      modelYear:["",Validators.required],
      dailyPrice:["",Validators.required],
      minFindexScore:["",Validators.required],
      description:[""]
    })
  }
  add(){
    if(this.carAddForm.valid){
      let carModel = Object.assign({},this.carAddForm.value)
      this.carService.add(carModel).subscribe(response=>{

      this.toastrService.success(response.message,"Succeed")
      this.toastrService.info("Don't forget to add preview photo!")
      }, responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Validation Error")
          }
          
        }
        
      })
      
    }else{
      this.toastrService.error("Form not completed.","Warning")
    }
    
    
  }

  getColors(){
    this.colorService.getColors().subscribe(response=>{
    this.colors=response.data;
    })
  }
  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
    this.brands=response.data;
    })
  }

}
