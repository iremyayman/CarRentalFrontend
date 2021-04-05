import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/cardetails';
import { CarImage } from 'src/app/models/carImage';
import { User } from 'src/app/models/user';
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
constructor(private authService:AuthService,
  private userService:UserService,
  private activatedRoute:ActivatedRoute,private localStorageService:LocalStorageService ) { }
  logout="none";
login="#";

email:string;

ngOnInit(): void {
  
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
  this.logout="none";
  this.login ="#"

  
}
getEmail(){
   let email= localStorage.getItem("email");
   return email;
}

}
