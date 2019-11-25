import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import * as JsBarcode from 'jsbarcode';

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
      // JsBarcode(element).codabar('123456').
      JsBarcode(element, this.value, { format: this.format })
      this.renderer.appendChild(this.bcElement.nativeElement, element);
    } catch (err) {
      console.log('bla: ', err)
      element = this.renderer.createText(err);
      this.renderer.appendChild(this.bcElement.nativeElement, element);
    }
  }
}
