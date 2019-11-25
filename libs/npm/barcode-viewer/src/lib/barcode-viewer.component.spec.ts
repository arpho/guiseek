import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcodeViewerComponent } from './barcode-viewer.component';

describe('BarcodeViewerComponent', () => {
  let component: BarcodeViewerComponent;
  let fixture: ComponentFixture<BarcodeViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarcodeViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcodeViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
