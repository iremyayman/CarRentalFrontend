import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {

brand:Brand;
dataloaded=false;
  brandUpdateForm:FormGroup;
   constructor(private formsBuilder:FormBuilder,
     private brandService:BrandService,
     private toastrService:ToastrService,
     private activatedRoute:ActivatedRoute) { }
 
   ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getBrandById(params["id"]);
        this.createBrandUpdateForm();
      }
    })
   }
 createBrandUpdateForm(){
   this.brandUpdateForm=this.formsBuilder.group({
   
     colorName:["",Validators.required]
 
   })
 }
 update(){
 
   if(this.brandUpdateForm.valid){
     let brandModel=Object.assign({},this.brandUpdateForm.value)
     this.brandService.add(brandModel).subscribe(response=>{
       
       this.toastrService.success(response.message,"Successfully updated.")
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
   getBrandById(id:number){
    this.brandService.getById(id).subscribe(response=>{
      this.brand=response.data;
      this.dataloaded=true;
      console.log(this.brand)
    })
   }
}
