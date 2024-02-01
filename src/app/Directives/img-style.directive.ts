import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImgStyle]',
  standalone: true,
})
export class ImgStyleDirective {
  // property decorator
  @Input('appImgStyle') radius1: string = '5px';

  // property decorator
  @Input() border1: string = '2px solid green';

  constructor(private elementRef: ElementRef) {
    // element.nativeElement.style.border = '2px solid red';
    // element.nativeElement.style.borderRadius = '10px';
    // element.nativeElement.style.padding = '5px';
    // this.elementRef.nativeElement.style.borderRadius = '40px';
  }

  // onChanges it equal in react.js as componentDidUpdate or useEffect
  ngOnChanges() {
    // this.elementRef.nativeElement.style.borderRadius = this.radius1;
    // this.elementRef.nativeElement.style.border = this.border1;
    // adding shadow
    this.elementRef.nativeElement.style.boxShadow = ' 1px #888888';
  }

  // method decorator
  @HostListener('mouseover') onMouseEnter() {
    // this.elementRef.nativeElement.style.border = '5px solid blue';
    // this.elementRef.nativeElement.style.borderRadius = '40px';

    // shadow
    this.elementRef.nativeElement.style.boxShadow = '2px 2px 4px #888888';

    // pointer
    this.elementRef.nativeElement.style.cursor = 'pointer';
  }

  // method decorator
  @HostListener('mouseout') onMouseLeave() {
    // this.elementRef.nativeElement.style.border = ' 2px solid red';
    // this.elementRef.nativeElement.style.borderRadius = `${this.radius1}`;

    // shadow
    this.elementRef.nativeElement.style.boxShadow = '1px 1px #888888';
  }
}
