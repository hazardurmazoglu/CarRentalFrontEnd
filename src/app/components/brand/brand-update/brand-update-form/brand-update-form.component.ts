import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-update-form',
  templateUrl: './brand-update-form.component.html',
  styleUrls: ['./brand-update-form.component.css']
})
export class BrandUpdateFormComponent implements OnInit {

  brand:Brand;
  dataLoaded=false;
  brandUpdateForm:FormGroup;
  constructor(private brandService:BrandService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute,
    private formBuilder:FormBuilder,
    private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getById(params["brandId"]);
        this.createBrandUpdateForm();
      }
    })
  }

  createBrandUpdateForm(){
    this.brandUpdateForm=this.formBuilder.group({
      brandName:["",Validators.required]
    })
  }

  brandUpdate(){
    if(this.brandUpdateForm.valid){
      let brandModel= Object.assign({},this.brandUpdateForm.value)
      brandModel.brandId=this.brand.brandId;
      this.brandService.update(brandModel).subscribe(response=>{
        this.toastrService.success("Successfuly updated.");
        this.router.navigate(["brands"]);
      },responseError=>{
        this.toastrService.error("Error");
      })
    }else{
      this.toastrService.error("error");
    }

  }

  getById(id:number){
    this.brandService.getBrandById(id).subscribe(response=>{
      this.brand=response.data;
      this.dataLoaded=true;
    })
  }


}
