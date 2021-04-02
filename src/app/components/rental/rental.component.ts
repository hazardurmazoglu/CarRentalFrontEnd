import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms"

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rentalAddForm: FormGroup;
  constructor(private activatedRoute:ActivatedRoute, private toastrService:ToastrService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  createRentalAddForm(){
    
  }


}
