
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
     private activatedRoute:ActivatedRoute,
     private router:Router) { }
 
   ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"]){
      
        
        this.getColorById(params["colorId"]);
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
     colorModel.colorId=this.color.colorId;
     console.log(colorModel)
     this.colorService.update(colorModel).subscribe(response=>{
       
       this.toastrService.success(response.message,"Successfully updated.")
       this.router.navigate(["color/update"])
     },responseError=>{
       this.toastrService.error("Error")
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
