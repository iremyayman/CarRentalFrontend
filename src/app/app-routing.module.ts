import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { BrandListComponent } from './components/brand/brand-list/brand-list.component';
import { BrandUpdateComponent } from './components/brand/brand-update/brand-update.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailComponent } from './components/car/cardetail/car-detail/car-detail.component';
import { CarInfoComponent } from './components/car/carinfo/car-info/car-info.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';
import { ColorListComponent } from './components/color/color-list/color-list.component';
import { ColorUpdateComponent } from './components/color/color-update/color-update.component';
import { ColorComponent } from './components/color/color.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserInfoComponent } from './components/user/user-info/user-info.component';
import { UserUpdateComponent } from './components/user/user-update/user-update.component';


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
  {path:"cars/info/:carId",component:CarInfoComponent},
  {path:"users/info/:email",component:UserInfoComponent},
  {path:"users/info/update/:id",component:UserUpdateComponent},
  {path:"color/update",component:ColorListComponent},
  {path:"brand/update",component:BrandListComponent},
  {path:"color/add",component:ColorAddComponent},
  {path:"brand/add",component:BrandAddComponent},
  {path:"color/update/:colorId",component:ColorUpdateComponent},
  {path:"brand/update/:brandId",component:BrandUpdateComponent}
  


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
