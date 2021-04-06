import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent implements OnInit {

  dataloaded=false;
  colors:Color[]=[];
  constructor(private colorService:ColorService,private activatedRoute:ActivatedRoute) { }

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
