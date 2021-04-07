import { Component, OnInit } from '@angular/core';
import { RentalDetail } from 'src/app/models/rentaldetail';
import { User } from 'src/app/models/user';
import { RentalService } from 'src/app/services/rental.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-myrentals',
  templateUrl: './myrentals.component.html',
  styleUrls: ['./myrentals.component.css']
})
export class MyrentalsComponent implements OnInit {

  user:User;
  rentalDetails:RentalDetail[]=[];
  constructor(private userService:UserService,private rentalService:RentalService) { }

  ngOnInit(): void {
    this.getByEmail();
  }

  getByEmail(){
    let email =localStorage.getItem("email");
    
    this.userService.getbyEmail(email).subscribe(response=>{
      this.user=response.data;
      this.rentalService.getRentalDetailsByUserId(this.user.id).subscribe(data=>{
        this.rentalDetails=data.data;
        console.log(this.rentalDetails)
      })

    })
  }

}
