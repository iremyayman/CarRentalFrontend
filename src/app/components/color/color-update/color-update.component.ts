
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {
color:Color;
dataloaded=false;
  colorUpdateForm:FormGroup;
   constructor(private formsBuilder:FormBuilder,
     private colorService:ColorService,
     private toastrService:ToastrService,
     private activatedRoute:ActivatedRoute) { }
 
   ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getColorById(params["id"]);
        this.createColorUpdateForm();
      }
    })
   }
 createColorUpdateForm(){
   this.colorUpdateForm=this.formsBuilder.group({
   
     colorName:["",Validators.required]
 
   })
 }
 update(){
 
   if(this.colorUpdateForm.valid){
     let colorModel=Object.assign({},this.colorUpdateForm.value)
     this.colorService.add(colorModel).subscribe(response=>{
       
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
   getColorById(id:number){
    this.colorService.getById(id).subscribe(response=>{
      this.color=response.data;
      this.dataloaded=true;
      console.log(this.color)
    })
   }
}
