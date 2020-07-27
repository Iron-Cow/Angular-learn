import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from "@angular/core";

// @ts-ignore
@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  @Input('appStyle') color = 'blue';
  // @Input('fontWeight') fontW: string = 'normal';
  @Input() dStyles: {
    border?: string,
    fontWeight?: string,
    borderRadius?: string,
  };

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    // elRef.nativeElement.style.color = 'red'; // not best
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'blue');
  }

  @HostBinding('style.color') elColor = null;

  @HostListener('click', ['$event.target']) onClick(event: Event): void {
    console.log(event);
  }

  @HostListener('mouseenter') onEnter(): void {
    this.elColor = this.color;
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', this.color);
    // this.renderer.setStyle(this.elRef.nativeElement, 'fontWeight', this.dStyles.fontWeight);
    // this.renderer.setStyle(this.elRef.nativeElement, 'border', this.dStyles.border);
    // this.renderer.setStyle(this.elRef.nativeElement, 'borderRadius', this.dStyles.borderRadius);
  }

  @HostListener('mouseleave') onLeave(): void {
    this.elColor = null;
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', null);
    // this.renderer.setStyle(this.elRef.nativeElement, 'fontWeight', null);
    // this.renderer.setStyle(this.elRef.nativeElement, 'border', null);
    // this.renderer.setStyle(this.elRef.nativeElement, 'borderRadius', null);
  }
}
