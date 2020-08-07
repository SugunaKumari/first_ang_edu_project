import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './shared/app-routing.module';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { HomepipePipe } from './home/homepipe.pipe';
import {OrdersServiceService} from './orders/orders-service.service';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {ProductModule} from './products/product.module';





@NgModule({
imports : [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ProductModule,
    AppRoutingModule
 

],
declarations:[
              AppComponent,
              HomeComponent,
              OrdersComponent,
              HomepipePipe,
              PagenotfoundComponent,
              
             ],
bootstrap:[
    AppComponent
],
providers:[
    OrdersServiceService
]


})

export class AppModule {

}