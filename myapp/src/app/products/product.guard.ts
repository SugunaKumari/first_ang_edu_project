import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot} from '@angular/router';

@Injectable()

export class RouterGaurds implements CanActivate {
constructor (private router:Router)
{
}

    canActivate(route:ActivatedRouteSnapshot):boolean{
        const id=parseInt(route.url[1].path); /* can use + to convert the string to number --> const id=+route.url[1].path;*/ 
        if(isNaN(id) || id<1 ||id>=4)
        {
            alert("invalid id ");
            this.router.navigate(['/products']);
            return false;
        }
        else 
        {
            return true;
        }

    }

}