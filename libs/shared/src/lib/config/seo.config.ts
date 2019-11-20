import { InjectionToken } from '@angular/core';
import { SeoConfig } from '../interfaces/seo-config.interface';

export const SEO_CONFIG_DEFAULT: SeoConfig = {
  tags: {
    title: 'Gui Seek',
    description: 'guilherme siquinelli, desenvolvedor web, angular, javascript, typescript, web',
    image: '',
    slug: '/'
  }
}

export const SEO_CONFIG = new InjectionToken<SeoConfig>('SEO_CONFIG')
