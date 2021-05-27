import { Component, OnInit, Input, forwardRef, TemplateRef, Output, EventEmitter } from '@angular/core';
import { HostListener, ViewEncapsulation, Renderer2, OnChanges, OnDestroy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { from } from 'rxjs';

@Component({
  selector: 'nx-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => DialogComponent),
    },
  ],
})
export class DialogComponent implements OnInit, OnChanges, OnDestroy {
  @Input() headerTitle: string = "";
  @Input() isModelOpen = false;
  @Input() styles: any= null;
  @Input() autoClose: boolean = false;

  @Output() closeDialog = new EventEmitter();

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  close() {
    this.toggleScrollClass(true);
    this.closeDialog.emit(false);
  }

  ngOnChanges() {
    if (this.isModelOpen === true) {
      this.toggleScrollClass(false);
    } else {
      this.toggleScrollClass(true);
    }
  }

  @HostListener('document:click', ['$event'])
  public documentClick(event: any): void {
    if (event.target.classList.contains('dialog-overlay') && this.autoClose) {
      this.close();
    }
  }

  ngOnDestroy() {
    this.toggleScrollClass(true);
  }

  toggleScrollClass(flag?: boolean) {
    if (flag === true) {
      this.renderer.removeClass(document.body, 'no-scroll');
    } else {
      this.renderer.addClass(document.body, 'no-scroll');
    }
  }
}
