import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarDetail } from '../models/cardetails';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarDetailService {
  apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  getCarDetail(carId: number): Observable<SingleResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getcardetailbyid?id=' + carId;
    return this.httpClient.get<SingleResponseModel<CarDetail>>(newPath);
  }

  getCarDetails(): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getcardetails';
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarDetailsByBrand(
    brandId: number
  ): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getbybrand?brandid=' + brandId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarDetailsByColor(
    colorId: number
  ): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getbycolor?colorid=' + colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarDetailsByBrandAndColor(
    brandId: number,
    colorId: number
  ): Observable<ListResponseModel<CarDetail>> {
    let newPath =
      this.apiUrl +
      'cars/getcarsbybrandandcolor?brandid' +
      brandId +
      '&colorid=' +
      colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarImagesById(carId: number) {
    let newPath = this.apiUrl + 'carimages/getimagesbycarid?carid=' + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
  getCarImageById(carId: number) {
    let newPath = this.apiUrl + 'carimages/getimagebycarid?carid=' + carId;
    return this.httpClient.get<SingleResponseModel<CarImage>>(newPath);
  }
}
