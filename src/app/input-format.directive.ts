import { Directive, HostListener, ElementRef, Input } from '@angular/core';

// used to refer to the events registered by dom elements

@Directive({
  selector: '[appInputFormat]',
})
export class InputFormatDirective {
  constructor(private el: ElementRef) {}
  @Input('appInputFormat') format;
  // @Input('format)

  // dom event name
  @HostListener('focus')
  onFocus() {
    console.log('onFocus');
  }

  @HostListener('blur')
  onBlur() {
    let value: string = this.el.nativeElement.value;
    if (this.format === 'lowercase') {
      this.el.nativeElement.value = value.toLowerCase();
    } else {
      this.el.nativeElement.value = value.toUpperCase();
    }
    // console.log('onBlur');
  }
}
