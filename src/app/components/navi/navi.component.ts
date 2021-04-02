import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  constructor(private authService:AuthService) { }
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
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    this.logout="none";
    this.login ="#"

    
  }
  

}

