import {Directive,ElementRef} from '@angular/core';

@Directive({
    selector:'[appColor]'
})

export class ColorDirective{
    constructor(private Element:ElementRef)
    {
        Element.nativeElement.style.color = 'hotpink';

    }
}