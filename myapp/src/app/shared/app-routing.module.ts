import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { OrdersComponent } from '../orders/orders.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { ProductComponent } from '../products/product.component';
import { ProductDetailsComponent } from '../products/product-details.component';
import {RouterGaurds} from '../products/product.guard';


const routes:Routes= [
        {path:'products',component:ProductComponent},
        {path:'products/:id',component:ProductDetailsComponent,canActivate:[RouterGaurds]},
        {path:'home',component:HomeComponent},
        {path:'orders',component:OrdersComponent},
        {path:'',redirectTo:'home',pathMatch:'full'},
        {path:'**',component:PagenotfoundComponent},
        

       
]


@NgModule({
imports:[
    

    RouterModule.forRoot(routes)
],
declarations:[],
exports:[
    RouterModule
],
providers:[RouterGaurds
]


})

export class AppRoutingModule{

}