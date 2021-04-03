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
    CarInfoComponent
    
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