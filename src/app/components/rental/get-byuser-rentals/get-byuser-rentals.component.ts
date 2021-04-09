import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalDetail } from 'src/app/models/rentalDetail';
import { RentalService } from 'src/app/services/rental.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-get-byuser-rentals',
  templateUrl: './get-byuser-rentals.component.html',
  styleUrls: ['./get-byuser-rentals.component.css']
})
export class GetByuserRentalsComponent implements OnInit {
rentalDetails:RentalDetail[]=[];
dataloaded=false;
  constructor(private activatedRoute:ActivatedRoute,
    private rentalService:RentalService,
    private userService:UserService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getRentalsById(params["id"]);
        
        
      
      }
      
    })

  }
  getRentalsById(id:number){
    this.rentalService.getRentalDetailsByUser(id).subscribe(response=>{
      this.rentalDetails=response.data;
      this.dataloaded=true;
      
    })
  }

}
