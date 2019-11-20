import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@guiseek/shared';
import { ContactComponent } from './contact/contact.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OpenSourceComponent } from './open-source/open-source.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule.forRoot({
      tags: {
        title: 'Landing Page - Gui Seek'
      },
      schemas: {
        scope: 'Person',
        itemProp: 'Guilherme Siquinelli'
      }
    }),
    RouterModule.forChild([
      {
        path: '',
        component: LandingPageComponent
      },
      {
        path: 'contato',
        component: ContactComponent
      },
      {
        path: 'open-source',
        component: OpenSourceComponent
      }
    ]),
  ],
  declarations: [LandingPageComponent, ContactComponent, ProjectComponent, OpenSourceComponent],
  exports: [ContactComponent]
})
export class WebAppFeatureLandingModule { }
