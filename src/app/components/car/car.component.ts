import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import {HttpClient} from '@angular/common/http'
import { CarService } from 'src/app/services/car.service';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[]=[];
  dataloaded=false;
  constructor(private carService:CarService,private cardetailService:CarDetailService) { }

  ngOnInit(): void {
    this.getCars();
  
  }
  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data
      this.dataloaded=true;
    })
  }
  

}
