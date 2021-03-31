import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CarDetailComponent } from './components/car/cardetail/car-detail/car-detail.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  {path:"",pathMatch:"full",component:FirstPageComponent},
  {path:"cars",component:CarDetailComponent},
  {path:"home",component:FirstPageComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
