import {NgModule} from '@angular/core';
import {AppRoutingModule} from '../shared/app-routing.module';




import { ProductComponent } from './product.component';
import {ProductDetailsComponent} from './product-details.component';
import { MyUppercasePipe } from './myuppercase.pipe';
import {MyDiscountPipe} from './mydiscount.pipe';
import { MySearchPipe } from './search.pipe';
import { ProductService } from './product.service';
import {SharedModule} from '../shared/shared.module';  
import {ColorDirective} from './colorDirective.directive';
 



@NgModule({
imports:[
    SharedModule,
    AppRoutingModule
],
declarations:[
    ProductComponent,
    MyUppercasePipe,
    MyDiscountPipe,
    MySearchPipe,
    ProductDetailsComponent,
    ColorDirective
       
],
providers:[
    ProductService

]

})

export class ProductModule {

}