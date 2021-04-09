import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDetail } from '../models/rentalDetail';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl=environment.apiUrl+"rentals/";

  constructor(private httpClient:HttpClient) { }
  delete(rental: Rental): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'delete', rental);
  }
  add(rental: Rental): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'add', rental);
  }
  update(rental: Rental): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'update', rental);
  }
  getRentals():Observable<ListResponseModel<Rental>>{
    let newPath=this.apiUrl+'getall';
    return this.httpClient.get<ListResponseModel<Rental>>(newPath)
  }
  getRentalsByCarId(carId:number):Observable<ListResponseModel<Rental>>{
    let newPath=this.apiUrl+'getbycarid?id='+carId;
    return this.httpClient.get<ListResponseModel<Rental>>(newPath)
  }
  getRentalDetails():Observable<ListResponseModel<RentalDetail>>{
    let newPath=this.apiUrl+'getrentaldetails';
    return this.httpClient.get<ListResponseModel<RentalDetail>>(newPath)
  }
  getRentalDetailsById(rentalId:number):Observable<SingleResponseModel<RentalDetail>>{
    let newPath=this.apiUrl+'getrentaldetailsbyid?id='+rentalId;
    return this.httpClient.get<SingleResponseModel<RentalDetail>>(newPath)
  }
  getRentalDetailsByUser(userId:number):Observable<ListResponseModel<RentalDetail>>{
    let newPath=this.apiUrl+'getrentaldetailsbyuserid?id='+userId;
    return this.httpClient.get<ListResponseModel<RentalDetail>>(newPath)
  }
}
