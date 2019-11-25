import { async, TestBed } from '@angular/core/testing';
import { WebAdminFeatureBarcodeModule } from './web-admin-feature-barcode.module';

describe('WebAdminFeatureBarcodeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WebAdminFeatureBarcodeModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WebAdminFeatureBarcodeModule).toBeDefined();
  });
});
