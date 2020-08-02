import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from './product.service';
import {IProduct} from './product.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './product-details.component.html',
 
})
export class ProductDetailsComponent implements OnInit {
    id:number;
    name:string;
    image:string;
    description:string;
  

  constructor(private route:ActivatedRoute,private _ProductService:ProductService,private router:Router) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.route.queryParams.subscribe((data) => {
        this.name=data['name'],
        this.image=data['img'],
        this.description=data['details']
  });     
  }

 /* onback()
  {
      this.router.navigate(['/products']);
  }*/

}


/*




     this._ProductService.getproductdetails(this.id).subscribe((data) => this.details= data)

*/