import { Component, OnInit } from '@angular/core';
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
  Admin:string;
  
  constructor(private authService:AuthService,private userService:UserService) { }
  
  ngOnInit(): void {
    
    
  }

}






