import { async, TestBed } from '@angular/core/testing';
import { NgxBarcodeReaderModule } from './ngx-barcode-reader.module';

describe('NgxBarcodeReaderModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxBarcodeReaderModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgxBarcodeReaderModule).toBeDefined();
  });
});
