import {Component,Input, OnChanges} from '@angular/core';

@Component({
    selector:"app-star",
    styleUrls:['./star.component.css'],
    templateUrl:'./star.component.html'

})

export class StarComponent implements OnChanges{
    @Input() rating:number;
    starWidth:number;
    ngOnChanges(){

    this.starWidth =this.rating * 70 / 5 ;
    }

}