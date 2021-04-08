import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/cardetails';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-update-options',
  templateUrl: './car-update-options.component.html',
  styleUrls: ['./car-update-options.component.css']
})
export class CarUpdateOptionsComponent implements OnInit {
  carUpdateForm:FormGroup;
  car:Car;
  carDetail:CarDetail;
  dataloaded=false;
  imageUrl=environment.imageUrl;

  constructor(private carService:CarService,
    private formBuilder:FormBuilder,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private toastrService:ToastrService,
    private carDetailService:CarDetailService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarById(params["carId"]);
        this.getCarDetailById(params["carId"]);
      
        this.createCarUpdateForm();
      }
    })
  }

 createCarUpdateForm(){
   this.carUpdateForm=this.formBuilder.group({
     colorId:["",Validators.required],
     brandId:["",Validators.required],
     dailyPrice:["",Validators.required],
     findeksScore:["",Validators.required],
     modelYear:["",Validators.required],
     description:["",Validators.required]

   })
 }

 getCarById(carId:number){
   this.carService.getCarsById(carId).subscribe(response=>{
     this.car=response.data;
   })
 }
 getCarDetailById(carId:number){
   this.carDetailService.getCarDetail(carId).subscribe(response=>{
     this.carDetail=response.data;
   })
 }
 update(){
   if(this.carUpdateForm.valid){
     let carModel=Object.assign({},this.carUpdateForm.value)
     carModel.carId=this.car.carId;
     this.carService.update(carModel).subscribe(response=>{
       this.toastrService.success("Updated Successfully");
       this.router.navigate(["cars"]);
     },responseError=>{
       this.toastrService.error("Error");
     })
   }else{
       this.toastrService.error("Form is missing or wrong.")
   }
 }

}
