import { async, TestBed } from '@angular/core/testing';
import { WebAppFeatureLandingModule } from './web-app-feature-landing.module';

describe('WebAppFeatureLandingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WebAppFeatureLandingModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WebAppFeatureLandingModule).toBeDefined();
  });
});
