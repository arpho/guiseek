import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { SvgViewerComponent } from './svg-viewer.component';
import { SvgViewerConfig, SvgViewerDefaultConfig } from './svg-viewer.config';
import { SvgViewerService } from './svg-viewer.service';

@NgModule({
  declarations: [SvgViewerComponent],
  imports: [CommonModule],
  providers: [SvgViewerService, { provide: SvgViewerConfig, useClass: SvgViewerDefaultConfig }],
  exports: [SvgViewerComponent]
})
export class SvgViewerModule {
  static forRoot(config: SvgViewerConfig): ModuleWithProviders {
    return {
      ngModule: SvgViewerModule,
      providers: [{ provide: SvgViewerConfig, useValue: config }],
    };
  }
}
