import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-filter',
  templateUrl: './brand-filter.component.html',
  styleUrls: ['./brand-filter.component.css']
})
export class BrandFilterComponent implements OnInit {
brands:Brand[]=[];
currentBrand:Brand;
dataloaded=false;
filterText="";
  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data;
      this.dataloaded=true;
    })
  }
  setCurrentBrand(brand:Brand){
    this.currentBrand=brand;
  }
  getAllBrandClass(){
    if(!this.currentBrand){
      return "list-group-item-active cursorPointer";
    }else{
      return "list-group-item cursorPointer";
    }
  }
  getBrandClass(brand:Brand){
    if(brand==this.currentBrand){
      return "list-group-item-active cursorPointer"
    }else{
      return "list-group-item cursorPointer"
    }
  }
  clearFilter(){
    this.filterText="";
    this.getBrands();
  }
  
}
