import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarComponent } from './components/car/car.component';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { CarFilterComponent } from './components/car/car-filter/car-filter.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { CarInfoComponent } from './components/car/car-info/car-info.component';
import { RentalComponent } from './components/rental/rental.component';


import {ToastrModule} from "ngx-toastr";
import { CarAddComponent } from './components/car/car-add/car-add.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component'
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { UserComponent } from './components/user/user.component';
import { UserinfoComponent } from './components/user/userinfo/userinfo.component';
import { UserupdateComponent } from './components/user/userupdate/userupdate.component';
import { AdminComponent } from './components/admin/admin.component';
import { FooterComponent } from './components/footer/footer.component';
import { ColorUpdateComponent } from './components/color/color-update/color-update.component';
import { ColorUpdateFormComponent } from './components/color/color-update/color-update-form/color-update-form.component';
import { CustomerComponent } from './components/customer/customer.component';
import { BrandUpdateComponent } from './components/brand/brand-update/brand-update.component';
import { BrandUpdateFormComponent } from './components/brand/brand-update/brand-update-form/brand-update-form.component';
import { CarUpdateComponent } from './components/car/car-update/car-update.component';
import { CarUpdateFormComponent } from './components/car/car-update/car-update-form/car-update-form.component';
import { CarImageOptionsComponent } from './components/car/car-update/car-image-options/car-image-options.component';
import { AddCarImageComponent } from './components/car/car-update/car-image-options/add-car-image/add-car-image.component';
import { DeleteCarImageComponent } from './components/car/car-update/car-image-options/delete-car-image/delete-car-image.component';
import { CarDeleteComponent } from './components/car/car-delete/car-delete.component';
import { GratitudeComponent } from './components/gratitude/gratitude.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddUpdatePreviewComponent } from './components/car/car-update/car-image-options/add-update-preview/add-update-preview.component';
import { BrandFilterComponent } from './components/brand/brand-filter/brand-filter.component';
import { FilterBrandPipePipe } from './pipes/filter-brand-pipe.pipe';
import { FilterColorPipePipe } from './pipes/filter-color-pipe.pipe';
import { ColorFilterComponent } from './components/color/color-filter/color-filter.component';
import { Footerv2Component } from './components/footer/footerv2/footerv2.component';


@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    CarComponent,
    CarDetailComponent,
    CarFilterComponent,
    WelcomePageComponent,
    BrandComponent,
    ColorComponent,
    VatAddedPipe,
    CarInfoComponent,
    RentalComponent,
    CarAddComponent,
    ColorAddComponent,
    BrandAddComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    UserinfoComponent,
    UserupdateComponent,
    AdminComponent,
    FooterComponent,
    ColorUpdateComponent,
    ColorUpdateFormComponent,
    CustomerComponent,
    BrandUpdateComponent,
    BrandUpdateFormComponent,
    CarUpdateComponent,
    CarUpdateFormComponent,
    CarImageOptionsComponent,
    AddCarImageComponent,
    DeleteCarImageComponent,
    CarDeleteComponent,
    GratitudeComponent,
    PageNotFoundComponent,
    AddUpdatePreviewComponent,
    BrandFilterComponent,
    FilterBrandPipePipe,
    FilterColorPipePipe,
    ColorFilterComponent,
    Footerv2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
    
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
