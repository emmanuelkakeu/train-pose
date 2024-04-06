import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pokmnBorderCard]',

})
export class BorderCardDirective {

  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private defaultHeight: number= 180;

  constructor(private el: ElementRef) {
    this.setBorder(this.initialColor);
    this.setHeight(this.defaultHeight);
   }

   @Input('pokmnBorderCard') borderColor: string;

   @HostListener('mouseenter')
   public onMouseEnter(){
    this.setBorder(this.borderColor ||this.defaultColor);
   }
   @HostListener('mouseleave')
   public onMouseLeaver(){
    this.setBorder('#f5f5f5');
   }


  private setHeight(height: number) {
    this.el.nativeElement.style.height = height + 'px';
  }

 setBorder(color: string) {
    let border = `dashed 4px ${color}`;
    this.el.nativeElement.style.border = border;
  }
}
