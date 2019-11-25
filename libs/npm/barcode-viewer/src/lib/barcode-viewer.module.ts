import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BarcodeViewerComponent } from './barcode-viewer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BarcodeViewerComponent],
  exports: [BarcodeViewerComponent],
})
export class BarcodeViewerModule {}
