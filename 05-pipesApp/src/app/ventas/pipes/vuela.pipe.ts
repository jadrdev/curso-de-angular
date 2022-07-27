import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'VuelaPipe',
})
export class VuelaPipe implements PipeTransform {
  transform(Vuela: boolean): any {
    return Vuela ? 'Vuela' : 'No vuela';
  }
}
