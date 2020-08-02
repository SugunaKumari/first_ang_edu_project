import {Component,Input, OnChanges, Output,EventEmitter} from '@angular/core';

@Component({
    selector:"app-star",
    styleUrls:['./star.component.css'],
    templateUrl:'./star.component.html'

})

export class StarComponent implements OnChanges{
    @Input() rating:number;
    @Output() ratingClicked: EventEmitter<number> = new EventEmitter();
    starWidth:number;
    ngOnChanges(){

    this.starWidth =this.rating * 70 / 5 ;
    }

    onStar()
    {
        this.ratingClicked.emit(this.rating);
    }


}