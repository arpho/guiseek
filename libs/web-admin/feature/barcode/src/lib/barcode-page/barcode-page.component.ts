import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BarcodeReaderComponent, CodeResult, IBarcodeReaderResult } from '@guiseek/npm/ngx-barcode-reader';

@Component({
  selector: 'guiseek-barcode-page',
  templateUrl: './barcode-page.component.html',
  styleUrls: ['./barcode-page.component.scss']
})
export class BarcodePageComponent implements OnInit {
  @ViewChild(BarcodeReaderComponent, { static: false })
  barcodeReader: BarcodeReaderComponent;
  stateReader = false;
  form: FormGroup
  submitted = false
  codeResult: CodeResult
  reading = false
  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      code: []
    })
  }
  get code() {
    return this.form.get('code')
  }
  ngOnInit() {
  }
  toggleReader() {
    console.log('reader')
    if (this.barcodeReader.isStarted()) {
      this.stateReader = false;
      this.barcodeReader.stop();
    } else {
      this.stateReader = true;
      this.barcodeReader.start();
    }
    console.log(this.barcodeReader.isStarted())
  }
  enableReader() {
    console.log(this.reading)
    this.reading = !this.reading
  }
  onValueChanges({ codeResult }: IBarcodeReaderResult) {
    console.log(codeResult)
    this.codeResult = codeResult
  }
  onSubmit() {
    this.submitted = true
  }
}
