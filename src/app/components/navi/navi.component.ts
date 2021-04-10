import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/cardetails';
import { CarImage } from 'src/app/models/carImage';
import { Color } from 'src/app/models/color';
import { User } from 'src/app/models/user';
import { UserClaimsModel } from 'src/app/models/userClaims';
import { AuthService } from 'src/app/services/auth.service';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
user:User;
color:Color;
operationClaims:UserClaimsModel[];
dataloaded=false;
constructor(private authService:AuthService,
  private userService:UserService,
  private activatedRoute:ActivatedRoute,private localStorageService:LocalStorageService ) { }
  logout="none";
login="#";

email:string;

ngOnInit(): void {
  this.getUserClaims();
  
  
}
isAuthenticated(){
  console.log("naviloop")
  if(this.authService.isAuthenticated()){
    this.logout="#";
    return this.login ="none";
  }
  else{
    this.logout="none"
    return this.login="#"
  }
}

logOut(){
  this.localStorageService.removeItem("token");
  this.localStorageService.removeItem("email");
  this.localStorageService.removeItem("id");
  this.localStorageService.removeItem("admin")
  
  this.logout="none";
  this.login ="#"

  
}
getEmail(){
   let email= localStorage.getItem("email");
   return email;
}
getUserClaims() {
  let id = this.localStorageService.getItem("id");
  if (id != null || id != undefined) {
    
    this.userService.getUserClaims(parseInt(id)).subscribe(response => {
     this.operationClaims=response.data;
     console.log(this.operationClaims)
     this.operationClaims.forEach(element=>{
       
        console.log(element.Name)
        localStorage.setItem("admin",element.Name)
       
        
       
     })
       
      
    });
  }
}
checkUserRoles(): boolean {
  return !!(this.localStorageService.getItem('admin'));
}




}
