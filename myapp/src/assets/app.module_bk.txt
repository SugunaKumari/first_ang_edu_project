import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './products/product.component';
import {MyUppercasePipe} from './products/myuppercase.pipe';
import {MyDiscountPipe} from './products/mydiscount.pipe';
import {MySearchPipe} from './products/search.pipe';
import {StarComponent} from './shared/star.component';
import {ProductService} from './products/product.service';
import {HttpClientModule} from '@angular/common/http';
import { OrdersComponent } from './orders/orders.component';
import { HomepipePipe } from './home/homepipe.pipe';
import {OrdersServiceService} from './orders/orders-service.service';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {ProductDetailsComponent} from './products/product-details.component';


@NgModule({
imports : [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([

        {path:'home',component:HomeComponent},
        {path:'orders',component:OrdersComponent},
        {path:'products',component:ProductComponent},
        {path:'products/:id',component:ProductDetailsComponent},
        {path:'',redirectTo:'home',pathMatch:'full'},
        {path:'**',component:PagenotfoundComponent}


    ])
],
declarations:[AppComponent,
              HomeComponent,
              ProductComponent,
              MyUppercasePipe,
              MyDiscountPipe,
              MySearchPipe,
              StarComponent,
              OrdersComponent,
              HomepipePipe,
              PagenotfoundComponent,
              ProductDetailsComponent
             ],
bootstrap:[
    AppComponent
],
providers:[
    ProductService,
    OrdersServiceService
]


})

export class AppModule {

}