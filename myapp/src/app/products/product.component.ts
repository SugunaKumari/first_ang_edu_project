import {Component} from '@angular/core';
import {MyUppercasePipe} from './myuppercase.pipe';
import {MySearchPipe} from './search.pipe';
import {IProduct} from './product.model';
import {StarComponent} from '../shared/star.component'

@Component({
    selector:'app-prod',
    templateUrl:'./product.component.html',
    styleUrls:['./product.component.css']

})

export class ProductComponent{
title: string ="Product App";
desc: string="This is about products";
imageWidth:number =50;
showImage:boolean=true;
userText:string="";
product: IProduct[] = [
    {

        _id : '85631dhjjsbcr',
        productId: 1,
        ProductName : 'Leaf Rake',
        ProductCode: 'GN-0011',
        releaseDate: 'March 19, 2016',
        decription : 'Leaf rake with 48 inch handle',
        price: 19.95,
        starRating:2,
        imageUrl:'https://www.coopsuperstores.ie/images/products/1200x1200/1713124.jpg'

    },
 
    
    {

        _id : '84631dhjjsbcr',
        productId: 2,
        ProductName : 'Garden Cart',
        ProductCode: 'GN-0023',
        releaseDate: 'March 18, 2016',
        decription : '15 gallon capacity rolling garden cart',
        price: 32.99,
        starRating:4.5,
        imageUrl:'https://www.coopsuperstores.ie/images/products/1200x1200/1713124.jpg'

    },
    {

        _id : '84631dhjjsbcr',
        productId: 2,
        ProductName : 'Garden Cart',
        ProductCode: 'GN-0023',
        releaseDate: 'March 18, 2016',
        decription : '15 gallon capacity rolling garden cart',
        price: 32.99,
        starRating:3.4,
        imageUrl:'https://www.coopsuperstores.ie/images/products/1200x1200/1713124.jpg'

    },


];


toggleImage():void{
    this.showImage=!this.showImage;

}


}