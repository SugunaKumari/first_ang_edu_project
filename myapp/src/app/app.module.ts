import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {HomeComponent} from './home.component';
import {ProductComponent} from './products/product.component';

@NgModule({
imports : [
    BrowserModule
],
declarations:[AppComponent,
              HomeComponent,
              ProductComponent
             ],
bootstrap:[
    AppComponent
],
providers:[]


})

export class AppModule {

}