import { Component, OnInit } from '@angular/core';
import { Claim } from 'src/app/models/claim';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  email=localStorage.getItem("email");
  user:User;
  claim:Claim;
  Admin:string;
  
  constructor(private authService:AuthService,private userService:UserService) { }
  
  ngOnInit(): void {
    
    
  }

  isAdmin(){
      //because of angular binding, it always creates an infinite loop but works, but for now it is disabled.
    this.getbyEmail(localStorage.getItem("email"));
    this.getClaims(this.user);
    console.log("moruk");
    if(this.claim.id==1){
      this.Admin="#"
    }


}

  getbyEmail(email){
    this.userService.getbyEmail(email).subscribe(response=>{
    this.user=response.data;
    })

  }
  getClaims(user){
    this.userService.getClaims(this.user).subscribe(response=>{
      this.claim=response.data;
    })
  }

  



}
