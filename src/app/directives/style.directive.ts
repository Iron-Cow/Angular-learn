import {Directive, ElementRef, Renderer2} from "@angular/core";

// @ts-ignore
@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2){
    // elRef.nativeElement.style.color = 'red'; // not best
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'blue');
  }
}
