import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
    CarInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
