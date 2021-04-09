import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalDetail } from 'src/app/models/rentalDetail';
import { User } from 'src/app/models/user';
import { RentalService } from 'src/app/services/rental.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-get-rentals',
  templateUrl: './get-rentals.component.html',
  styleUrls: ['./get-rentals.component.css']
})
export class GetRentalsComponent implements OnInit {
 rentalDetails:RentalDetail[]=[];
 user:User;
  constructor(private rentalService:RentalService,
    private activatedRoute:ActivatedRoute,
    private userService:UserService) { }

  ngOnInit(): void {
    this.getAllRentals();
  }
 getAllRentals(){
   this.rentalService.getRentalDetails().subscribe(response=>{
     this.rentalDetails=response.data;
   })
 }
 getByEmail(){
   let email=localStorage.getItem("email");
   this.userService.getByEmail(email).subscribe(response=>{
     this.user=response.data;
   })
 }
}
