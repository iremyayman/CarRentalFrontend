import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {
  carAddForm:FormGroup;
  constructor(private formsBuilder:FormBuilder,
    private carService:CarService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createCarAddForm();
  }
createCarAddForm(){
  this.carAddForm=this.formsBuilder.group({
    brandId:["",Validators.required],
    colorId:["",Validators.required],
    modelYear:["",Validators.required],
    dailyPrice:["",Validators.required],
    description:[""],
    findeksScore:["",Validators.required]
   

  })
}
add(){
 
  if(this.carAddForm.valid){
    let carModel=Object.assign({},this.carAddForm.value)
    console.log(carModel)
    this.carService.add(carModel).subscribe(response=>{
     
      this.toastrService.success(response.message,"Successfully added.")
    },responseError=>{
      
      if(responseError.error.Errors.length>0){
        for (let i = 0; i < responseError.error.Errors.length; i++) {
          this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Validation Error.")
        }
       
      }
      })
      
    
  
  }else{
    this.toastrService.error("Form is missing or wrong.")
  }
  
}
}
