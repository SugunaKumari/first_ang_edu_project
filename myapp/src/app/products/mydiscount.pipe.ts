import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:"discount"
})

export class MyDiscountPipe implements PipeTransform{
    transform(value:number,secondparam:number){
        value=value-secondparam;
        return value
        
    }
    
}