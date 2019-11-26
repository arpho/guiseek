import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { BarcodeViewerModule } from '@guiseek/npm/barcode-viewer';
import { NgxBarcodeReaderModule } from '@guiseek/npm/ngx-barcode-reader';
import { BarcodePageComponent } from './barcode-page/barcode-page.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    BarcodeViewerModule,
    NgxBarcodeReaderModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: BarcodePageComponent }
    ]),
  ],
  declarations: [BarcodePageComponent],
})
export class WebAdminFeatureBarcodeModule { }
