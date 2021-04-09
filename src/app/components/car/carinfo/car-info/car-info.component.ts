import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/cardetails';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.css']
})
export class CarInfoComponent implements OnInit {
  carDetails:CarDetail[]=[];
  carDetail:CarDetail;
  carImage:CarImage;
  car:Car;
  carImages:CarImage[]=[];
  dataloaded=false;
  imageUrl=environment.imageUrl;
  apiurl=environment.baseUrl;
  

  constructor(private cardetailService:CarDetailService,private activatedRoute:ActivatedRoute,private carService:CarService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
      
        this.getCarDetail(params["carId"]);
        
      
        

        
        
      }
      else {
        this.getCarDetails();
      }
    })
  }
  getCarDetail(carId:number){
    this.cardetailService.getCarDetail(carId).subscribe(response=>{
     
      this.carDetail=response.data
      this.dataloaded=true;
    })
  }
  getCarDetails(){
    this.cardetailService.getCarDetails().subscribe(response=>{
      this.carDetails = response.data;
      this.dataloaded= true;
    })
  }
  getCarImagesById(carId:number){
    this.cardetailService.getCarImagesById(carId).subscribe(response=>{
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
  getCarsById(carId:number){
    this.carService.getCarsById(carId).subscribe(response=>{
      this.car=response.data
    })
  }

}