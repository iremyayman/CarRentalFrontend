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
      if(params["brandId"]){
        this.getBrandById(params["brandId"]);
        this.createBrandUpdateForm();
      }
    })
   }
 createBrandUpdateForm(){
   this.brandUpdateForm=this.formsBuilder.group({
   
     brandName:["",Validators.required]
 
   })
 }
 update(){
 
   if(this.brandUpdateForm.valid){
     let brandModel=Object.assign({},this.brandUpdateForm.value)
     brandModel.brandId=this.brand.brandId;
     this.brandService.update(brandModel).subscribe(response=>{
       
       this.toastrService.success(response.message,"Successfully updated.")
     },responseError=>{
      this.toastrService.error("Error")
      })
   }else{
    this.toastrService.error("Form is missing or wrong.")
  }
    
 }
   getBrandById(id:number){
    this.brandService.getBrandById(id).subscribe(response=>{
      this.brand=response.data;
      this.dataloaded=true;
      console.log(this.brand)
    })
   }
}
