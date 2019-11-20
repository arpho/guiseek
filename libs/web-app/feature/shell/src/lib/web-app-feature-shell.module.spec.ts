import { async, TestBed } from '@angular/core/testing';
import { WebAppFeatureShellModule } from './web-app-feature-shell.module';

describe('WebAppFeatureShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WebAppFeatureShellModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WebAppFeatureShellModule).toBeDefined();
  });
});
