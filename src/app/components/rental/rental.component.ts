import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {FormGroup, FormBuilder, FormControl, Validators, FormsModule} from "@angular/forms"
import { CarDetail } from 'src/app/models/cardetail';
import { CarImage } from 'src/app/models/carImage';
import { UserService } from 'src/app/services/user.service';
import { CarService } from 'src/app/services/car.service';
import { User } from 'src/app/models/user';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { AuthService } from 'src/app/services/auth.service';
import { RentalService } from 'src/app/services/rental.service';
import { Car } from 'src/app/models/car';
import { Rental } from 'src/app/models/rental';
import { Payment } from 'src/app/models/payment';
import { CreditCard } from 'src/app/models/creditCard';
import { CreditCardService } from 'src/app/services/credit-card.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rentalAddForm: FormGroup;
  carDetailInfo:CarDetail;
  carDetailInfos:CarDetail[]=[];
  carImages:CarImage[]=[];
  user:User;
  users:User[]=[];
  rentDate: Date;
  returnDate: Date;
  imageUrl="../assets";
  imagePathCheckOut="./assets/checkout.png"
  dataLoaded=false;
  email:string;
  cardNumber: string;
  nameOnTheCard: string;
  expiration: string;
  cvv: number;
  cardId: number;
  amount: number;
  creditCards: CreditCard[] = [];

  hid="#";


  userId: number;

  

  constructor(private activatedRoute:ActivatedRoute,
     private toastrService:ToastrService,
      private userService:UserService,
      private carService:CarService,
      private localStorageService:LocalstorageService,
      private authService:AuthService,
      private router:Router,
      private rentalService:RentalService,
      private formBuilder:FormBuilder,
      private creditCardService:CreditCardService,
      private paymentService:PaymentService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getEmail();
        this.getByEmail(this.email);
        this.getCarDetail(params["carId"]);
        this.getCarImagesById(params["carId"]);

      }
    })
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe(response=>{
      this.users = response.data;
    })
  }

  
  rent(){
    this.payment();
    this.createRental();
    
  }

  createRental() {
    let rental: Rental =
    {
      carId: this.carDetailInfo.carId,
      userId: parseInt(this.user.id.toString()),
      rentDate: this.rentDate,
      returnDate: this.returnDate
    }
    this.rentalService.add(rental).subscribe(repsonse=>{
      this.toastrService.success("Successfully booked.")
      this.router.navigate(["thanks"])
    },error=>{
      console.info(error)
      this.toastrService.error(error.error)
      // this.toastrService.error(error.error.Message)
    })
  }

  createCard(){
    let card: CreditCard =
    {
      cardNumber: this.cardNumber,
      expiration:this.expiration,
      cvv:this.cvv,
      userId:this.user.id,
      nameOnTheCard:this.nameOnTheCard
    }
    this.creditCardService.add(card).subscribe(response=>{
      this.toastrService.success("Successfully saved.")
    },error=>{
      console.info(error)
      this.toastrService.error("This credit card is wrong.")
    })
  }



  getCarDetail(carId:number){
    this.carService.getCarDetail(carId).subscribe(response=>{
      this.carDetailInfo = response.data;
      this.dataLoaded = true;
    })
  }
  getCarImagesById(carId:number){
    this.carService.getCarImagesById(carId).subscribe(response=>{
      this.carImages=response.data;
    })
  }
  getSliderClassName(index:Number){
    if(index == 0){
      return "carousel-item active";
    } else {
      return "carousel-item";
    }
  }
  getEmail(){
    this.email= localStorage.getItem("email");
  }

  getByEmail(email){
    this.userService.getbyEmail(email).subscribe(response=>{
      this.user = response.data;
      this.dataLoaded=true;
    })
  }
  getDate(day: number) {
    var today = new Date();
    today.setDate(today.getDate() + day);
    return today.toISOString().slice(0, 10)
  }

  isLogOK(){
    if(this.authService.isAuthenticated()){
      return true;
    }else{
      this.toastrService.error("Must be Login or Register")
      this.router.navigate(["/#"])
      return false;
    }
  }

  payment() {
      let paymentModel: Payment = {
        amount: this.amount
      }
      this.paymentService.payment(paymentModel).subscribe(response => {
      }, error => {
        
      }
      )
   
  }
  setCardInfos() {
    // this.creditCardAddForm.patchValue({
    //   cardNumber: this.cardNumber,
    //   nameOnTheCard: this.nameOnTheCard,
    //   expirationDate: this.expiration,
    //   cvv: this.cvv,
    // });
    console.log(this.cardNumber)
  }

  getCardByUser(){
    this.getByEmail(this.email);
      this.creditCardService.getByUserId(this.user.id).subscribe(response => {
        this.creditCards = response.data;
        this.hid="none";
        console.log(this.hid)
      },responseError=>{
        this.toastrService.error("Can't get cards")
      });

    }
    
  
  
  totalPayment() {
    
    let dateRent = new Date(this.rentDate.toString());
    let dateReturn = new Date(this.returnDate.toString());
    let difference = (dateReturn.getTime() - dateRent.getTime());
    let differenceOfDays = Math.ceil(difference/ (1000* 3600 * 24));
    if(differenceOfDays == 0){
      differenceOfDays=1;
    }
    this.amount = differenceOfDays * (this.carDetailInfo.dailyPrice + (this.carDetailInfo.dailyPrice * 8 / 100));
    console.log(this.amount)
      
    
    
  }

  coupon(){
    this.toastrService.info("Do you really have promo code?")
  }


}
