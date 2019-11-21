import { async, TestBed } from '@angular/core/testing';
import { MusicLandOnboardingModule } from './music-land-onboarding.module';

describe('MusicLandOnboardingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MusicLandOnboardingModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MusicLandOnboardingModule).toBeDefined();
  });
});
