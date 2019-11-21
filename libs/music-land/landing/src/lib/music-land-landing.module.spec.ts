import { async, TestBed } from '@angular/core/testing';
import { MusicLandLandingModule } from './music-land-landing.module';

describe('MusicLandLandingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MusicLandLandingModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MusicLandLandingModule).toBeDefined();
  });
});
