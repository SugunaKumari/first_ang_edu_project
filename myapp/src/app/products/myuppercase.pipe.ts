import {PipeTransform, Pipe} from '@angular/core';

@Pipe({
    name:"myUppercase"

})

export class MyUppercasePipe implements PipeTransform{
transform(value:string,secondparam:string)
{
if(secondparam=="upper")
value=value.toUpperCase();
else
value=value.toLowerCase();
return value
}
}