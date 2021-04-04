import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
 userUpdateForm:FormGroup;
 user:User;
 dataloaded=false;
  constructor(private formsBuilder:FormBuilder,
    private userService:UserService,
    private toastrService:ToastrService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getById(params["id"]);
        this.createUserUpdateForm();
      }
    })
  }
  createUserUpdateForm(){
    this.userUpdateForm=this.formsBuilder.group({
   
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",Validators.required],
      
  
    })

  }
  updateUser(){
    if(this.userUpdateForm.valid){
      let userUpdateModel=Object.assign({},this.userUpdateForm.value)
      this.userService.updateUser(userUpdateModel).subscribe(response=>{
        
        this.toastrService.success(response.message,"Successfully updated")
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Validation Error")
          }
         
        }
        })
        
      
    
    }else{
      this.toastrService.error("Form is missing or wrong.")
    }
    
  }
  getById(id:number){
    this.userService.getUserById(id).subscribe(response=>{
      this.user=response.data;
      this.dataloaded=true;
      console.log(this.user)
    })
  }


  }

