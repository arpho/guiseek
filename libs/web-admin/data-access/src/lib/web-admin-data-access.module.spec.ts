import { async, TestBed } from '@angular/core/testing';
import { WebAdminDataAccessModule } from './web-admin-data-access.module';

describe('WebAdminDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WebAdminDataAccessModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WebAdminDataAccessModule).toBeDefined();
  });
});
