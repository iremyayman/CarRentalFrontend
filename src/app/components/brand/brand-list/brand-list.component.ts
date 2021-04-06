import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {

  dataloaded=false;
  brands:Brand[]=[];
  constructor(private brandService:BrandService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getBrands();
    
  }
  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data
      this.dataloaded=true;
    })
  }

}
