import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { SEO_CONFIG, SEO_CONFIG_DEFAULT } from './config/seo.config';
import { SeoService } from './services/seo.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SeoService
  ]
})
export class SharedModule {
  static forRoot(config = SEO_CONFIG_DEFAULT): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        SeoService,
        {
          provide: SEO_CONFIG,
          useValue: { ...SEO_CONFIG_DEFAULT, ...config }
        }
      ]
    }
  }
}
