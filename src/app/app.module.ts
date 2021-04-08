import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { NaviComponent } from './components/navi/navi.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import {LoginComponent} from './components/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CarFilterComponent } from './components/car/carfilter/car-filter/car-filter.component';
import { CarDetailComponent } from './components/car/cardetail/car-detail/car-detail.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { CarInfoComponent } from './components/car/carinfo/car-info/car-info.component';
import { UserComponent } from './components/user/user.component';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { BrandUpdateComponent } from './components/brand/brand-update/brand-update.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';
import { CarAddComponent } from './components/car/car-add/car-add.component';
import { UserUpdateComponent } from './components/user/user-update/user-update.component';
import { ColorUpdateComponent } from './components/color/color-update/color-update.component';
import { UserInfoComponent } from './components/user/user-info/user-info.component';
import { ColorListComponent } from './components/color/color-list/color-list.component';
import { BrandListComponent } from './components/brand/brand-list/brand-list.component';
import { CarImageComponent } from './components/car/car-image/car-image.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarUpdateComponent } from './components/car/car-update/car-update.component';
import { CarUpdateOptionsComponent } from './components/car/car-update/car-update-options/car-update-options.component';
import { UpdateCarComponent } from './components/car/car-update/car-update-options/update-car/update-car.component';
import { PreviewImageComponent } from './components/car/car-update/car-update-options/preview-image/preview-image.component';
import { AddImagesComponent } from './components/car/car-update/car-update-options/add-images/add-images.component';
import { RentalComponent } from './components/rental/rental.component';








@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    ColorComponent,
    NaviComponent,
    FirstPageComponent,
    LoginComponent,
    CarFilterComponent,
    CarDetailComponent,
    RegisterComponent,
    CarInfoComponent,
    UserComponent,
    BrandAddComponent,
    BrandUpdateComponent,
    ColorAddComponent,
    CarAddComponent,
    UserUpdateComponent,
    ColorUpdateComponent,
    UserInfoComponent,
    ColorListComponent,
    BrandListComponent,
    CarImageComponent,
    FooterComponent,
    CarUpdateComponent,
    CarUpdateOptionsComponent,
    UpdateCarComponent,
    PreviewImageComponent,
    AddImagesComponent,
    RentalComponent
  
    
    
  
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
   

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true}
  ],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
