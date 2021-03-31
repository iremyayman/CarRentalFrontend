import { Component, OnInit } from '@angular/core';
import { CarDetail } from 'src/app/models/cardetails';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  imageUrl=environment.imageUrl;
  carDetails:CarDetail[]=[];
  dataloaded=false;

  constructor(private cardetailService:CarDetailService) { }

  ngOnInit(): void {
    this.getCarDetails();
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


}
