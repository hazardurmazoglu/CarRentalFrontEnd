import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-update-form',
  templateUrl: './color-update-form.component.html',
  styleUrls: ['./color-update-form.component.css']
})
export class ColorUpdateFormComponent implements OnInit {
  color:Color;
  dataLoaded=false;
  colorUpdateForm:FormGroup;
  constructor(private colorService:ColorService,
     private toastrService:ToastrService,
     private activatedRoute:ActivatedRoute,
     private router:Router,
     private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"]){
        this.getById(params["colorId"]);
        this.createColorUpdateForm();
      }
    })

  }

  createColorUpdateForm(){
    this.colorUpdateForm=this.formBuilder.group({
      colorName:["",Validators.required]
    })
  }

  colorUpdate(){
    if(this.colorUpdateForm.valid){
      let colorModel = Object.assign({},this.colorUpdateForm.value)
      colorModel.colorId=this.color.colorId;
      this.colorService.update(colorModel).subscribe(response=>{
        this.toastrService.success("Successfully updated.");
        this.router.navigate(["colors"]);
      },responseError=>{
        this.toastrService.error(responseError.error);
      })
    }else{
      this.toastrService.error("Error");
    }
  }


  getById(id:number){
    this.colorService.getColorById(id).subscribe(response=>{
      this.color=response.data;
      this.dataLoaded=true;
      console.log(this.color);
    })
  }




}
