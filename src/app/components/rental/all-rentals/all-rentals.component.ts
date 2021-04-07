import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalDetail } from 'src/app/models/rentaldetail';
import { User } from 'src/app/models/user';
import { RentalService } from 'src/app/services/rental.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-all-rentals',
  templateUrl: './all-rentals.component.html',
  styleUrls: ['./all-rentals.component.css']
})
export class AllRentalsComponent implements OnInit {

  rentalDetails:RentalDetail[]=[];
  user:User;
  constructor(private rentalService:RentalService, private activatedRoute:ActivatedRoute, private userService:UserService) { }

  ngOnInit(): void {
    this.getAllRentals();
    
  }

  getAllRentals(){
    this.rentalService.getRentalDetails().subscribe(response=>{
      this.rentalDetails=response.data;
    })
  }

  getByEmail(){
    let email =localStorage.getItem("email");
    this.userService.getbyEmail(email).subscribe(response=>{
      this.user=response.data;
    })
  }

}
