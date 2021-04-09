import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/cardetails';
import { CarImage } from 'src/app/models/carImage';
import { CreditCard } from 'src/app/models/creditCard';
import { Payment } from 'src/app/models/payment';
import { Rental } from 'src/app/models/rental';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';
import { CreditCardService } from 'src/app/services/credit-card.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { PaymentService } from 'src/app/services/payment.service';
import { RentalService } from 'src/app/services/rental.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rentalAddForm:FormGroup;
  carDetail:CarDetail;
  carDetails:CarDetail[]=[];
  car:Car;
  user:User;
  users:User[]=[];
  carImages:CarImage[]=[];
  rentDate:Date;
  returnDate:Date;
  imageUrl=environment.imageUrl;
  imagePathCheckOut="../assets/images/cart1.png"

  dataloaded=false;
  email:string;
  cardNumber:string;
  nameOfUser:string;
  expiration:string;
  cvv:number;
  cardId:number;
  amount:number;
  creditCards:CreditCard[]=[];

  hid="#";
  userId:number;
  


  constructor(private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
     private userService:UserService,
     private carService:CarService,
     private localStorageService:LocalStorageService,
     private authService:AuthService,
     private router:Router,
     private rentalService:RentalService,
     private formBuilder:FormBuilder,
     private creditCardService:CreditCardService,
     private paymentService:PaymentService,
     private carDetailService:CarDetailService ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getEmail();
        this.getByEmail(this.email);
        this.getCarDetail(params["carId"]);
        this.getCarImagesById(params["carId"]);
        console.log(this.user);
      }
    })
  }

  getAllUsers(){
    this.userService.getUsers().subscribe(response=>{
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
      carId: this.carDetail.carId,
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
      nameOfUser:this.nameOfUser
    }
    this.creditCardService.add(card).subscribe(response=>{
      this.toastrService.success("Successfully saved.")
    },error=>{
      console.info(error)
      this.toastrService.error("This credit card is wrong.")
    })
  }



  getCarDetail(carId:number){
    this.carDetailService.getCarDetail(carId).subscribe(response=>{
      this.carDetail = response.data;
      this.dataloaded = true;
    })
  }
  getCarImagesById(carId:number){
    this.carDetailService.getCarImagesById(carId).subscribe(response=>{
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

  getByEmail(email:string){
    this.userService.getByEmail(email).subscribe(response=>{
      this.user = response.data;
      this.dataloaded=true;
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
    this.amount = differenceOfDays*(this.carDetail.dailyPrice) ;
    console.log(this.amount)
      
    
    
  }

  
}
