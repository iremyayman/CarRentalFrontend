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
  carImages:CarImage[]=[];
  cars:Car[]=[];
  carImage:CarImage;
  dataloaded=false;

  constructor(private cardetailService:CarDetailService,private activatedRoute:ActivatedRoute,private carService:CarService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
     
      
       if(params["brandId"]){
        this.getCarDetailsByBrand(params["brandId"]);
      }else if(params["colorId"]){
        this.getCarDetailsByColor(params["colorId"]);
      }else if(params["brandId"] && params["colorId"]){
        this.getCarDetailsByBrandAndColor(params["brandId"],params["colorId"]);
      }else{
        this.getCarDetails();
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
  getCarImagesById(carId:number){
    this.cardetailService.getCarImagesById(carId).subscribe(response=>{
      this.carImages=response.data;
    })
  }
  getCarImageById(carId:number){
    this.cardetailService.getCarImageById(carId).subscribe(response=>{
      this.carImage=response.data;
    })
  }


}
