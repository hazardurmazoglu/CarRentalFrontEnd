import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  user:User;
  dataLoaded=false;
  constructor(private activatedRoute:ActivatedRoute,private userService:UserService) { }

  ngOnInit(): void {
   this.activatedRoute.params.subscribe(params=>{
     if(params["email"]){
       this.getByEmail(params["email"]);
     }
   })
}
  getByEmail(email){
    this.userService.getbyEmail(email).subscribe(response=>{
      this.user = response.data;
      this.dataLoaded=true;
    })
  }

}
