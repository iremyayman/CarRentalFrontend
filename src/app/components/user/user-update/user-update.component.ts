import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
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
    private toastrService:ToastrService,private activatedRoute:ActivatedRoute,
    private router:Router,private authService:AuthService) { }

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
      findeksScore:["",Validators.required],
      password:["",Validators.required]
      
  
    })

  }
  updateUser(){
    if(this.userUpdateForm.valid){
      let userUpdateModel = Object.assign({},this.userUpdateForm.value)
      userUpdateModel.id=this.user.id;
      userUpdateModel.passwordSalt=this.user.passwordSalt;
      userUpdateModel.passwordHash=this.user.passwordHash;
      this.userService.updateUser(userUpdateModel).subscribe(response=>{
        this.toastrService.success("Please login to confirm.");
        
       
       
      },responseError=>{
        this.toastrService.error(responseError.error);
      })
     }else{
      this.toastrService.error("Error");
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

