import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import * as JsBarcode from 'jsbarcode';

const barcode = JsBarcode;

const styles = [`:host { width: 100%; display: flex; flex-flow: row; justify-content: center; }`];
const template = `<div #bcElement></div>`;

@Component({
  selector: 'svg-barcode-viewer',
  template, styles
})
export class BarcodeViewerComponent implements OnInit {
  @ViewChild('bcElement', { static: true })
  bcElement: ElementRef<BarcodeViewerComponent>;
  @Input() value: string;
  @Input() format = 'ean13';

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    let element: Element;
    try {
      element = this.renderer.createElement('svg', 'svg');
      barcode(element, this.value, { format: this.format })
      this.renderer.appendChild(this.bcElement.nativeElement, element);
    } catch (err) {
      element = this.renderer.createText(err);
      this.renderer.appendChild(this.bcElement.nativeElement, element);
    }
  }
}
