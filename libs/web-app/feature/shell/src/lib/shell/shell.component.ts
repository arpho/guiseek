import { isPlatformBrowser } from '@angular/common';
import { APP_ID, Component, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { SeoService } from '@guiseek/shared';
@Component({
  selector: 'web-app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {
  element: HTMLElement
  opened = false
  constructor(
    private seo: SeoService,
    private elementRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string
  ) {
    this.element = this.elementRef.nativeElement
    this.seo.generateTags({
      tags: {}
    })
  }
  toggleMenu() {
    this.opened = !this.opened
  }
  onActivate(event: any) {
    if (isPlatformBrowser(this.platformId)) {
      const scrollToTop = window.setInterval(() => {
        const pos = window.pageYOffset;
        if (pos > 0) {
          window.scrollTo(0, pos - 25); // how far to scroll on each step
        } else {
          window.clearInterval(scrollToTop);
        }
      }, 16);
    }
  }
}
