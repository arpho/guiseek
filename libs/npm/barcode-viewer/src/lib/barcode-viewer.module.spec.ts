import { async, TestBed } from '@angular/core/testing';
import { BarcodeViewerModule } from './barcode-viewer.module';

describe('BarcodeViewerModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BarcodeViewerModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BarcodeViewerModule).toBeDefined();
  });
});
