import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  user:User;
  dataloaded=false;

  constructor(private userService:UserService,
    private activatedRoute:ActivatedRoute,
    private localStorageService:LocalStorageService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["email"]){
        this.getByEmail(params["email"]);
        
        
      
      }
      
    })
  }
  getByEmail(email:string){
    this.userService.getByEmail(email).subscribe(response=>{
      this.user = response.data;
      this.dataloaded=true;
    })
  }

}
