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
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  imageUrl=environment.imageUrl;
  carDetails:CarDetail[]=[];
  carDetail:CarDetail;
  car:Car;
  carImages:CarImage[]=[];
  cars:Car[]=[];
  carImage:CarImage;
  dataloaded=false;
  apiUrl=environment.apiUrl;

  constructor(private cardetailService:CarDetailService,private activatedRoute:ActivatedRoute,private carService:CarService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
     
      if(params["carId"]){
    
        this.getCarDetail(params["carId"])
      }
       else if(params["brandId"]){
        this.getCarsByBrand(params["brandId"]);
      }else if(params["colorId"]){
        this.getCarsByColor(params["colorId"]);
      }else{
        this.getCars();
      }
    })
  }
   getCarDetail(carId:number){
     this.cardetailService.getCarDetail(carId).subscribe(response=>{
       this.carDetail=response.data;
       this.dataloaded=true;
     })
   }
  
  getCarDetails(){
    this.cardetailService.getCarDetails().subscribe(response=>{
      this.carDetails = response.data;
      this.dataloaded = true;
    })
  }
  getCarDetailsByBrand(brandId:number){
    this.cardetailService.getCarDetailsByBrand(brandId).subscribe(response=>{
      this.carDetails=response.data;
      this.dataloaded=true;
    })
  }
  getCarDetailsByColor(colorId:number){
    this.cardetailService.getCarDetailsByColor(colorId).subscribe(response=>{
      this.carDetails=response.data;
    })
  }
  getCarDetailsByBrandAndColor(brandId:number,colorId:number){
    this.cardetailService.getCarDetailsByBrandAndColor(brandId,colorId).subscribe(response=>{
      this.carDetails=response.data;
    })
  }
  
 
 getCars(){
   this.carService.getCars().subscribe(response=>{
     this.cars=response.data;
     this.dataloaded=true;
   })
 }
 getCarsByColor(colorId:number){
   this.carService.getCarsByColor(colorId).subscribe(response=>{
     this.cars=response.data;
     this.dataloaded=true;
   })
 }
 getCarsByBrand(brandId:number){
  this.carService.getCarsByBrand(brandId).subscribe(response=>{
    this.cars=response.data;
    this.dataloaded=true;
  })
}
getCarById(carId:number){
  this.carService.getCarsById(carId).subscribe(response=>{
    this.car=response.data;
    this.dataloaded=true;
  })
}

}
