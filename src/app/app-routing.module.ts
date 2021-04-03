import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { CarDetailComponent } from './components/car/cardetail/car-detail/car-detail.component';
import { CarInfoComponent } from './components/car/carinfo/car-info/car-info.component';
import { ColorComponent } from './components/color/color.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  {path:"",pathMatch:"full",component:FirstPageComponent},
  {path:"cars",component:CarDetailComponent},
  {path:"home",component:FirstPageComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"colors",component:ColorComponent},
  {path:"brands",component:BrandComponent},
  {path:"cars/color/:colorId",component:CarDetailComponent},
  {path:"cars/brand/:brandId",component:CarDetailComponent},
  {path:"cars/info/:carId",component:CarInfoComponent}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }