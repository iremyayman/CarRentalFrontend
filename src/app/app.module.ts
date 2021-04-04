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
import { BrandDeleteComponent } from './components/brand/brand-delete/brand-delete.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';
import { CarAddComponent } from './components/car/car-add/car-add.component';
import { UserUpdateComponent } from './components/user/user-update/user-update.component';
import { ColorUpdateComponent } from './components/color/color-update/color-update.component';
import { UserInfoComponent } from './components/user/user-info/user-info.component';



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
    BrandDeleteComponent,
    ColorAddComponent,
    CarAddComponent,
    UserUpdateComponent,
    ColorUpdateComponent,
    UserInfoComponent
    
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
