import {Component} from '@angular/core';
import {MyUppercasePipe} from './myuppercase.pipe';
import {MySearchPipe} from './search.pipe';
import {IProduct} from './product.model';
import {StarComponent} from '../shared/star.component';
import {ProductService} from './product.service';
import {OnInit} from'@angular/core';

@Component({
    selector:'app-prod',
    templateUrl:'./product.component.html',
    styleUrls:['./product.component.css']

})

export class ProductComponent implements OnInit{
title: string ="Product App";
desc: string="This is about products";
imageWidth:number =50;
showImage:boolean=true;
userText:string="";
product: IProduct[] ;

constructor(private _ProductService:ProductService)
{
}
ngOnInit()
{
     this._ProductService.getProducts().subscribe((data) => this.product=data);

}

toggleImage():void{
    this.showImage=!this.showImage;

}

dataReceive(message:number){
    this.title="product pages>> rating clicked is " + message;
}

}