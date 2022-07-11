import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]'
})
export class HighlightDirectiveDirective {

  constructor(private el: ElementRef) {   }

  ngOnInit(){
    this.el.nativeElement.style.backgroundColor = "cyan";

  }


}
