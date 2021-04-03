import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CarDetail } from 'src/app/models/cardetails';
import { Color } from 'src/app/models/color';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  dataloaded=false;
  colors:Color[]=[];
  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors();
    
  }
  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors=response.data
      this.dataloaded=true;
    })
  }
 
}