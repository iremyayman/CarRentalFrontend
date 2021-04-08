import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44394/api/cars/';
  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'getall';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByBrand(brandId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'getcarbybrand?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  add(car: Car): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'add', car);
  }
  getCarsById(carId: number): Observable<SingleResponseModel<Car>> {
    let newPath = this.apiUrl + 'getbyid?id=' + carId;
    return this.httpClient.get<SingleResponseModel<Car>>(newPath);
  }

  update(car: Car): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'update', car);
  }
  getCarsByColor(colorId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'getcarbycolor?colorId=' + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  uploadImage(image: File,car:Car):Observable<any> {

    console.log(image.name)
    const formData:FormData = new FormData();

    formData.append('Image', image);
    formData.append('CarId',car.carId.toString());
    formData.append('BrandId', car.brandId.toString());
    formData.append('ColorId',car.colorId.toString());
    formData.append('FindeksScore',car.findeksScore.toString());
    formData.append('ModelYear',car.modelYear.toString());
    formData.append('DailyPrice',car.dailyPrice.toString());
    formData.append('Description',car.description.toString());

    let newPath=this.apiUrl+'addInitialPhoto';
    return this.httpClient.post<ResponseModel>(newPath,formData,{
      reportProgress: true,
      responseType: 'json',
    });
    
  }
  
}
