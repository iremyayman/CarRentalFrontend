import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {
  carUpdateForm:FormGroup;
  car:Car;
  dataloaded=false;

  constructor(private carService:CarService,
    private formBuilder:FormBuilder,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private toastrService:ToastrService,
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarById(params["carId"]);
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

