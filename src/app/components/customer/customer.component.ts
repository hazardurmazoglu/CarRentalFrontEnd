import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  users:User[]=[];
  dataLoaded=false;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getAllCustomers();
  }

  getAllCustomers(){
    this.userService.getAllUsers().subscribe(response=>{
      this.users=response.data;
      this.dataLoaded=true;

    })
  }

}
