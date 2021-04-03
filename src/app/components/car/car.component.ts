import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import {HttpClient} from '@angular/common/http'
import { CarService } from 'src/app/services/car.service';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/cardetails';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[]=[];
  carDetails:CarDetail[]=[];
  dataloaded=false;
  constructor(private carService:CarService,
    private cardetailService:CarDetailService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }else{
        this.getCars();
      }
    })
    this.getCars();
  
  }
  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data
      this.dataloaded=true;
    })
  }
  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars=response.data
      this.dataloaded=true;
    })
  }
  getCarsByColor(colorId:number){
    
  }
  
  

}
