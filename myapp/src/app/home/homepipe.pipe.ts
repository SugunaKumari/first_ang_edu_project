import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'homepipe'
})
export class HomepipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
