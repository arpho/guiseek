import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BarcodeReaderComponent } from './barcode-reader.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BarcodeReaderComponent],
  exports: [BarcodeReaderComponent],
})
export class NgxBarcodeReaderModule {}
