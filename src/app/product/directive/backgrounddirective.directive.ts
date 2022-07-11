import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appBackgrounddirective]'
})
export class BackgrounddirectiveDirective {

  constructor(private el: ElementRef) { }

  ngOnInit(){
    this.el.nativeElement.style.backgroundColor = "lightgreen";

  }
}
