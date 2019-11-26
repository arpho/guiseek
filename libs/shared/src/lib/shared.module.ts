import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { SEO_CONFIG, SEO_CONFIG_DEFAULT } from './config/seo.config';
import { GithubService, NpmService } from './services';
import { SeoService } from './services/seo.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SeoService,
    NpmService,
    GithubService
  ]
})
export class SharedModule {
  static forRoot(config = SEO_CONFIG_DEFAULT): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        SeoService,
        GithubService,
        {
          provide: SEO_CONFIG,
          useValue: { ...SEO_CONFIG_DEFAULT, ...config }
        }
      ]
    }
  }
}
