import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@guiseek/shared';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OpenSourceComponent } from './open-source/open-source.component';
import { PhotosComponent } from './photos/photos.component';
import { ProjectComponent } from './project/project.component';
import { TalksComponent } from './talks/talks.component';

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
      },
      {
        path: 'talks',
        component: TalksComponent
      },
      {
        path: 'networking',
        component: EventsComponent
      },
      {
        path: 'photos',
        component: PhotosComponent
      }
    ]),
  ],
  declarations: [
    LandingPageComponent,
    ContactComponent,
    ProjectComponent,
    OpenSourceComponent,
    TalksComponent,
    EventsComponent,
    PhotosComponent
  ],
  exports: [ContactComponent]
})
export class WebAppFeatureLandingModule { }
