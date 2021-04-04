import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.css']
})
export class UserupdateComponent implements OnInit {

  user:User;
  dataLoaded=false;
  userUpdateForm:FormGroup
  constructor(private userService:UserService,
     private activatedRoute:ActivatedRoute,
     private toastrService:ToastrService,
     private formBuilder:FormBuilder,
     private router:Router,
     private authService:AuthService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getById(params["id"]);
        this.createUserUpdateForm();

      }

    })
    
    
  }

  createUserUpdateForm(){
    this.userUpdateForm=this.formBuilder.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",Validators.required],
      findexScore:["",Validators.required],
      password:["",Validators.required]

    })
  }


  userUpdate(){
    if(this.userUpdateForm.valid){
      let userModel = Object.assign({},this.userUpdateForm.value)
      userModel.id=this.user.id;
      userModel.passwordSalt=this.user.passwordSalt;
      userModel.passwordHash=this.user.passwordHash;
      this.userService.userUpdate(userModel).subscribe(response=>{
        this.toastrService.success("Please login to confirm.");
        this.router.navigate([""]);
        this.authService.logOut();
      },responseError=>{
        this.toastrService.error(responseError.error);
      })
    }else{
      this.toastrService.error("Error");
      }

  }

  getById(id:number){
    this.userService.getUserById(id).subscribe(response=>{
      this.user=response.data;
      this.dataLoaded=true;
      console.log(this.user)
    })
  }

}
