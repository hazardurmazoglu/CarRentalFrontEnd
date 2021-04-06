import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { BrandUpdateFormComponent } from './components/brand/brand-update/brand-update-form/brand-update-form.component';
import { BrandUpdateComponent } from './components/brand/brand-update/brand-update.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarAddComponent } from './components/car/car-add/car-add.component';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { CarFilterComponent } from './components/car/car-filter/car-filter.component';
import { CarInfoComponent } from './components/car/car-info/car-info.component';
import { AddCarImageComponent } from './components/car/car-update/car-image-options/add-car-image/add-car-image.component';
import { CarImageOptionsComponent } from './components/car/car-update/car-image-options/car-image-options.component';
import { CarUpdateComponent } from './components/car/car-update/car-update.component';
import { CarComponent } from './components/car/car.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';
import { ColorUpdateFormComponent } from './components/color/color-update/color-update-form/color-update-form.component';
import { ColorUpdateComponent } from './components/color/color-update/color-update.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RentalComponent } from './components/rental/rental.component';
import { UserinfoComponent } from './components/user/userinfo/userinfo.component';
import { UserupdateComponent } from './components/user/userupdate/userupdate.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { LoginGuard } from './guards/login.guard';
import { DeleteCarImageComponent } from './components/car/car-update/car-image-options/delete-car-image/delete-car-image.component';
import { CarUpdateFormComponent } from './components/car/car-update/car-update-form/car-update-form.component';
import { CarDeleteComponent } from './components/car/car-delete/car-delete.component';
import { AdminGuard } from './guards/admin.guard';
import { GratitudeComponent } from './components/gratitude/gratitude.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:"", component:WelcomePageComponent},
  {path:"cars", component:CarComponent},
  {path:"cars/brand/:brandId", component:CarComponent},
  {path:"cars/color/:colorId",component:CarComponent},
  {path:"cars/carinfo/:carId",component:CarInfoComponent},
  {path:"cars/brand/:brandId/color/:colorId",component:CarComponent},
  {path:"rental/car/:carId",component:RentalComponent},
  {path:"addcar",component:CarAddComponent, canActivate:[LoginGuard,AdminGuard]},
  {path:"brands",component:BrandComponent},
  {path:"colors",component:ColorComponent},
  {path:"addbrand",component:BrandAddComponent, canActivate:[LoginGuard,AdminGuard]},
  {path:"addcolor",component:ColorAddComponent, canActivate:[LoginGuard, AdminGuard]},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"userinfo/:email",component:UserinfoComponent},
  {path:"userinfo/update/:id",component:UserupdateComponent},
  {path:"admin",component:AdminComponent, canActivate:[AdminGuard]},
  {path:"colorupdate",component:ColorUpdateComponent, canActivate:[AdminGuard]},
  {path:"colorupdate/:colorId",component:ColorUpdateFormComponent, canActivate:[AdminGuard]},
  {path:"admin/allcustomers",component:CustomerComponent, canActivate:[AdminGuard]},
  {path:"brandupdate",component:BrandUpdateComponent, canActivate:[AdminGuard]},
  {path:"brandupdate/:brandId",component:BrandUpdateFormComponent, canActivate:[AdminGuard]},
  {path:"carupdate",component:CarUpdateComponent, canActivate:[AdminGuard]},
  {path:"carimageoptions/:carId",component:CarImageOptionsComponent, canActivate:[AdminGuard]},
  {path:"carimageoptions/addcarimage/:carId",component:AddCarImageComponent, canActivate:[AdminGuard]},
  {path:"carimageoptions/deletecarimage/:carId",component:DeleteCarImageComponent, canActivate:[AdminGuard]},
  {path:"carupdate/:carId",component:CarUpdateFormComponent, canActivate:[AdminGuard]},
  {path:"cardelete/:carId", component:CarDeleteComponent, canActivate:[AdminGuard]},
  {path:"thanks",component:GratitudeComponent},
  {path:'**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
