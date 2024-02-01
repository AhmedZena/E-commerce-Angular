import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcDiscount',
  standalone: true,
})
export class calcDiscount implements PipeTransform {
  transform(value: number, discountValue: number): number {
    return value - (value * discountValue) / 100;
  }
}
