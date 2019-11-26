import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SeoService } from '@guiseek/shared';

@Component({
  selector: 'web-app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingPageComponent implements OnInit {

  constructor(
    private seoService: SeoService
  ) { }

  ngOnInit() {
    this.seoService.generateTags({
      tags: {
        title: 'Gui Seek',
        description: `
          guilherme siquinelli,
          gui seek,
          desenvolvedor web,
          angular,
          pwa,
          ionic,
          javascript,
          typescript, web
        `,
        image: '/assets/images/guiseek-devparana.jpg',
      }
    })
  }

}
