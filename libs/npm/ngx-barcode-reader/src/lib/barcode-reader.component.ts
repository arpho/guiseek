import { Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import * as Quagga from 'quagga';
import { IBarcodeReaderResult } from './barcode-reader.interfaces';
import { BARCODE_READER_CONFIG, mapToReader } from './config/barcode-reader.config';
import { beep } from './utils/beep';

@Component({
  selector: 'ngx-barcode-reader',
  encapsulation: ViewEncapsulation.None,
  template: `<div #barcodeReader class="reader" [hidden]="!isStarted()"></div>`,
  styles: [`
  .reader {
    position: relative;
    video,
    canvas {
      max-width: 100%;
      width: 100%;
    }
    canvas.drawingBuffer {
      position: absolute;
      left: 0;
      top: 0;
    }
  }
  `]
})
export class BarcodeReaderComponent implements OnChanges, OnDestroy {
  // Inputs
  @Input() type: string;

  // Outputs
  @Output() valueChanges = new EventEmitter<IBarcodeReaderResult>();

  @ViewChild('barcodeReader', { static: false }) barcodeReader: ElementRef<
    BarcodeReaderComponent
  >;

  private started = false;

  private configQuagga = BARCODE_READER_CONFIG;

  ngOnDestroy(): void {
    this.stop();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.restart();
  }

  private _init() {
    return new Promise((resolve, reject) => {
      Quagga.onProcessed(result => this.onProcessed(result));

      Quagga.onDetected(result => this.onDetected(result));

      this.configQuagga.inputStream.target = this.barcodeReader.nativeElement;

      if (this.type) {
        this.configQuagga.decoder.readers = mapToReader(this.type);
      }

      Quagga.init(this.configQuagga, err => {
        if (err) {
          console.log(err);
          return reject(err);
        }

        resolve();
      });
    });
  }

  start() {
    if (!this.started) {
      return this._init().then(() => {
        Quagga.start();
        this.started = true;
        console.log('started');
      });
    }

    return Promise.resolve();
  }

  stop() {
    if (this.started) {
      Quagga.stop();
      this.started = false;
      console.log('stopped');
    }
  }

  restart() {
    if (this.started) {
      this.stop();
      this.start();
    }
  }

  isStarted() {
    return this.started;
  }

  onProcessed(result: any): any {
    const drawingCtx = Quagga.canvas.ctx.overlay,
      drawingCanvas = Quagga.canvas.dom.overlay;

    if (result) {
      if (result.boxes) {
        drawingCtx.clearRect(
          0,
          0,
          // tslint:disable-next-line: radix
          parseInt(drawingCanvas.getAttribute('width')),
          // tslint:disable-next-line: radix
          parseInt(drawingCanvas.getAttribute('height'))
        );
        result.boxes
          .filter(function (box) {
            return box !== result.box;
          })
          .forEach(function (box) {
            Quagga.ImageDebug.drawPath(
              box,
              {
                x: 0,
                y: 1
              },
              drawingCtx,
              {
                color: 'green',
                lineWidth: 2
              }
            );
          });
      }

      if (result.box) {
        Quagga.ImageDebug.drawPath(
          result.box,
          {
            x: 0,
            y: 1
          },
          drawingCtx,
          {
            color: '#00F',
            lineWidth: 2
          }
        );
      }

      if (result.codeResult && result.codeResult.code) {
        Quagga.ImageDebug.drawPath(
          result.line,
          {
            x: 'x',
            y: 'y'
          },
          drawingCtx,
          {
            color: 'red',
            lineWidth: 3
          }
        );
      }
    }
  }

  onDetected(result: IBarcodeReaderResult) {
    beep();
    console.log('onDetected :', result);
    this.valueChanges.next(result);
    // this.stop();
  }
}
