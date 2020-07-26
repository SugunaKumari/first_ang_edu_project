import {Pipe,PipeTransform} from '@angular/core';
import {IProduct} from './product.model';

@Pipe({
    name:"mySearchPipe"
})

export class MySearchPipe implements PipeTransform {
    transform(value:IProduct[],userInput:string){
        userInput = userInput? userInput.toLowerCase():null;

     return userInput ? value.filter((data) =>
      ((data.ProductName.toLowerCase().indexOf(userInput) !== -1) || (data.ProductCode.toLowerCase().indexOf(userInput) !== -1))
      ):value
   

    }
    
}