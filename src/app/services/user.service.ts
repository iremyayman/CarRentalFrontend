import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { User } from '../models/user';
import { UserClaimsModel } from '../models/userClaims';
import { UserFindeksModel } from '../models/userFindeksModel';
import { UserFindeksResponseModel } from '../models/userFindeksResponseModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl=environment.apiUrl+'users/';

  constructor(private httpClient:HttpClient) { }

  
  getUsers(): Observable<ListResponseModel<User>> {
    return this.httpClient.get<ListResponseModel<User>>(this.apiUrl+ 'getall' );
  }
  removeUser(user: User): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'delete', user);
  }
 
getByEmail(email: string): Observable<SingleResponseModel<User>> {
  return this.httpClient.get<SingleResponseModel<User>>
  (this.apiUrl + 'getbyemail?email='+email);
}
updateUser(user:User):Observable<ResponseModel>{
  let newPath= this.apiUrl+"update";
  return this.httpClient.post<ResponseModel>(newPath,user);
}

getUserById(id: number): Observable<SingleResponseModel<User>> {
  let newPath = this.apiUrl+"getbyid?id="+id;
  return this.httpClient.get<SingleResponseModel<User>>(newPath);
}
getUserClaims(id: number): Observable<ListResponseModel<UserClaimsModel>> {
  return this.httpClient.get<ListResponseModel<UserClaimsModel>>
  (this.apiUrl + 'getuserclaims?id='+id);
}


}
