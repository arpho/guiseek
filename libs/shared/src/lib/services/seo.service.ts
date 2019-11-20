import { Injectable, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SEO_CONFIG } from '../config/seo.config';
import { SeoConfig } from '../interfaces/seo-config.interface';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(
    private meta: Meta,
    private titleService: Title,
    @Inject(SEO_CONFIG) private seoConfig
  ) {
    console.log('seoConfig: ', seoConfig)
  }

  generateTags({ tags }: SeoConfig) {
    console.log('tags: ', tags)
    // default values
    tags = { ...tags }

    // Set a title
    this.titleService.setTitle(tags.title);

    // Set meta tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: '@guiseek' });
    this.meta.updateTag({ name: 'twitter:title', content: tags.title });
    this.meta.updateTag({ name: 'twitter:description', content: tags.description });
    this.meta.updateTag({ name: 'twitter:image', content: tags.image });

    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Gui Seek Web App' });
    this.meta.updateTag({ property: 'og:title', content: tags.title });
    this.meta.updateTag({ property: 'og:description', content: tags.description });
    this.meta.updateTag({ property: 'og:image', content: tags.image });
    this.meta.updateTag({ property: 'og:url', content: `https://guiseek.com/${tags.slug}` });
  }
}
