import { async, TestBed } from '@angular/core/testing';
import { WebAdminFeatureAuthModule } from './web-admin-feature-auth.module';

describe('WebAdminFeatureAuthModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WebAdminFeatureAuthModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WebAdminFeatureAuthModule).toBeDefined();
  });
});
