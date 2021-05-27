import { Directive, Input, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[tooltip]',
})
export class TooltipDirective {
  @Input('title') title: string = "";
  @Input() tooltipPosition: string = "top";
  @Input() delay: string = "";
  @Input() tooltipTemplate: any = null;
  @Input() tooltipWidth: any =null;
  tooltip: any = null;
  offset = 10;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.tooltip) {
      this.show();
      this.renderer.removeAttribute(this.el.nativeElement, 'title');
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.tooltip) {
      this.hide();
      this.renderer.setAttribute(this.el.nativeElement, 'title', this.title);

    }
  }

  show() {
    this.create();
    this.setStyles();
    this.setPosition();
    this.renderer.addClass(this.tooltip, 'tooltip-show');
  }

  hide() {
    this.renderer.removeClass(this.tooltip, 'tooltip-show');
    this.renderer.removeChild(document.body, this.tooltip);
    this.tooltip = null;
  }

  create() {
    this.tooltip = this.renderer.createElement('div');

    this.renderer.appendChild(
      this.tooltip,
      this.tooltipTemplate ? this.tooltipTemplate : this.renderer.createText(this.title)
    );

    this.renderer.appendChild(document.body, this.tooltip);


  }

  setStyles() {
    this.renderer.addClass(this.tooltip, 'tooltip');
    this.renderer.addClass(this.tooltip, `tooltip-${this.tooltipPosition}`);

    this.renderer.setStyle(this.tooltip, '-webkit-transition', `opacity ${this.delay}ms`);
    this.renderer.setStyle(this.tooltip, '-moz-transition', `opacity ${this.delay}ms`);
    this.renderer.setStyle(this.tooltip, '-o-transition', `opacity ${this.delay}ms`);
    this.renderer.setStyle(this.tooltip, 'transition', `opacity ${this.delay}ms`);

    if (this.tooltipWidth)
      this.renderer.setStyle(this.tooltip, 'width', `${this.tooltipWidth}px`);
  }

  setPosition() {
    const hostPos = this.el.nativeElement.getBoundingClientRect();
    const tooltipPos = this.tooltip.getBoundingClientRect();
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    let top, left;

    if (this.tooltipPosition === 'top') {
      top = hostPos.top - tooltipPos.height - this.offset;
      left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
    }

    if (this.tooltipPosition === 'bottom') {
      top = hostPos.bottom + this.offset;
      left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
    }

    if (this.tooltipPosition === 'left') {
      top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
      left = hostPos.left - tooltipPos.width - this.offset;
    }

    if (this.tooltipPosition === 'right') {
      top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
      left = hostPos.right + this.offset;
    }

    if (left < 0) {
      left = 0;
    }
    if (top < 0) {
      top = 0;
    }

    this.renderer.setStyle(this.tooltip, 'top', `${top + scrollPos}px`);
    this.renderer.setStyle(this.tooltip, 'left', `${left}px`);
  }

  ngOnDestroy(): void {
    this.onMouseLeave();
  }
}
