import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  user:User;
  dataLoaded=false;
  constructor(private authService:AuthService, private userService:UserService,private activatedRoute:ActivatedRoute,private localStorageService:LocalstorageService) { }
  logout="none"
  login="#"
  ngOnInit(): void {
  }

  isAuthenticated(){
    if(this.authService.isAuthenticated()){
      this.logout="#";
      return this.login ="none";
    }
    else{
      this.logout="none"
      return this.login="#"
    }
  }

  logOut(){
    this.localStorageService.removeItem("token");
    this.localStorageService.removeItem("email");
    this.localStorageService.removeItem("admin");
    this.logout="none";
    this.login ="#"

    
  }

  getEmail(){
    let email= localStorage.getItem("email");
    return email;
  }



  

}

