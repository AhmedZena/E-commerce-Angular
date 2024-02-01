import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashFourNumbers',
  standalone: true,
})
export class DashFourNumbersPipe implements PipeTransform {
  transform(value: any): string {
    // return value.slice(0, 4) + '-' + value.slice(4, 8) + '-' + value.slice(8, 12) + '-' + value.slice(12, 16);
    // return value.replace(/(.{4})/g, '$1-');
    value = value.toString();
    return value.replace(/(.{4})/g, '$1-').slice(0, -1);
  }
}
