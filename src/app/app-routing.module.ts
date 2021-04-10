import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { BrandListComponent } from './components/brand/brand-list/brand-list.component';
import { BrandUpdateComponent } from './components/brand/brand-update/brand-update.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarAddComponent } from './components/car/car-add/car-add.component';
import { CarUpdateOptionsComponent } from './components/car/car-update/car-update-options/car-update-options.component';
import { AddImagesComponent } from './components/car/car-update/car-update-options/add-images/add-images.component';
import { PreviewImageComponent } from './components/car/car-update/car-update-options/preview-image/preview-image.component';
import { UpdateCarComponent } from './components/car/car-update/car-update-options/update-car/update-car.component';
import { CarUpdateComponent } from './components/car/car-update/car-update.component';
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
import { RentalComponent } from './components/rental/rental.component';
import { GetRentalsComponent } from './components/rental/get-rentals/get-rentals.component';
import { GetByuserRentalsComponent } from './components/rental/get-byuser-rentals/get-byuser-rentals.component';
import { AdminGuard } from './guards/admin.guard';
import { LoginGuard } from './guards/login.guard';



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
  {path:"users/info/update/:id",component:UserUpdateComponent,canActivate:[LoginGuard]},
  {path:"color/update",component:ColorListComponent,canActivate:[AdminGuard,LoginGuard]},
  {path:"brand/update",component:BrandListComponent,canActivate:[AdminGuard,LoginGuard]},
  {path:"color/add",component:ColorAddComponent,canActivate:[AdminGuard,LoginGuard]},
  {path:"brand/add",component:BrandAddComponent,canActivate:[LoginGuard,AdminGuard]},
  {path:"color/update/:colorId",component:ColorUpdateComponent,canActivate:[AdminGuard,LoginGuard]},
  {path:"brand/update/:brandId",component:BrandUpdateComponent,canActivate:[AdminGuard,LoginGuard]},
  {path:"car/add",component:CarAddComponent,canActivate:[AdminGuard,LoginGuard]},
  {path:"car/update",component:CarUpdateComponent,canActivate:[AdminGuard,LoginGuard]},
  {path:"cars/update/:carId",component:UpdateCarComponent,canActivate:[AdminGuard,LoginGuard]},
  {path:"cars/update/options/:carId",component:CarUpdateOptionsComponent,canActivate:[AdminGuard,LoginGuard]},
  {path:"cars/update/previewimage/:carId",component:PreviewImageComponent,canActivate:[AdminGuard,LoginGuard]},
  {path:"cars/update/addimages/:carId",component:AddImagesComponent,canActivate:[AdminGuard,LoginGuard]},
  {path:"rental/:carId",component:RentalComponent},
  {path:"all/rentals",component:GetRentalsComponent,canActivate:[AdminGuard,LoginGuard]},
  {path:"user/rentals/:id",component:GetByuserRentalsComponent,canActivate:[LoginGuard]}
  
  


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
