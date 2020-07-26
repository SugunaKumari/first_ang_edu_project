import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {HomeComponent} from './home.component';
import {ProductComponent} from './products/product.component';
import {FormsModule} from '@angular/forms';
import {MyUppercasePipe} from './products/myuppercase.pipe';
import {MyDiscountPipe} from './products/mydiscount.pipe';
import {MySearchPipe} from './products/search.pipe';
import {StarComponent} from './shared/star.component';

@NgModule({
imports : [
    BrowserModule,
    FormsModule
],
declarations:[AppComponent,
              HomeComponent,
              ProductComponent,
              MyUppercasePipe,
              MyDiscountPipe,
              MySearchPipe,
              StarComponent
             ],
bootstrap:[
    AppComponent
],
providers:[]


})

export class AppModule {

}