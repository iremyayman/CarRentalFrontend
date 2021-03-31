import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl=environment.apiUrl;
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+"cars/getall"
    return this.httpClient
    .get<ListResponseModel<Car>>(newPath);

    
   }
   getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+"cars/getbybrand?brandId="+brandId
    return this.httpClient
    .get<ListResponseModel<Car>>(newPath);}


    add(car:Car):Observable<ResponseModel>{
      return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/add",car)
    }
}

