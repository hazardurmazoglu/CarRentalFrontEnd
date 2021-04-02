import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {

  brandAddForm:FormGroup;
  constructor(private toastrService:ToastrService,private formBuilder:FormBuilder, private brandService:BrandService) { }

  ngOnInit(): void {
    this.createBrandAddForm();
  }

  createBrandAddForm(){
    this.brandAddForm = this.formBuilder.group({
      brandName:["",Validators.required]
    })
  }

  add(){
    if(this.brandAddForm.valid){
      let carModel = Object.assign({},this.brandAddForm.value)
      this.brandService.add(carModel).subscribe(response=>{

      this.toastrService.success(response.message,"Succeed")
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

}
