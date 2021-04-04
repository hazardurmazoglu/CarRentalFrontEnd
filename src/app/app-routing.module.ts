import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarAddComponent } from './components/car/car-add/car-add.component';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { CarFilterComponent } from './components/car/car-filter/car-filter.component';
import { CarInfoComponent } from './components/car/car-info/car-info.component';
import { CarComponent } from './components/car/car.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';
import { ColorComponent } from './components/color/color.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RentalComponent } from './components/rental/rental.component';
import { UserinfoComponent } from './components/user/userinfo/userinfo.component';
import { UserupdateComponent } from './components/user/userupdate/userupdate.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { AdminGuard } from './guards/admin.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"", component:WelcomePageComponent},
  {path:"cars", component:CarComponent},
  {path:"cars/brand/:brandId", component:CarComponent},
  {path:"cars/color/:colorId",component:CarComponent},
  {path:"cars/carinfo/:carId",component:CarInfoComponent},
  {path:"cars/brand/:brandId/color/:colorId",component:CarComponent},
  {path:"rental/car/:carId",component:RentalComponent},
  {path:"addcar",component:CarAddComponent, canActivate:[LoginGuard]},
  {path:"brands",component:BrandComponent},
  {path:"colors",component:ColorComponent},
  {path:"addbrand",component:BrandAddComponent, canActivate:[LoginGuard]},
  {path:"addcolor",component:ColorAddComponent, canActivate:[LoginGuard]},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"userinfo/:email",component:UserinfoComponent},
  {path:"userinfo/update/:id",component:UserupdateComponent},
  {path:"admin",component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
