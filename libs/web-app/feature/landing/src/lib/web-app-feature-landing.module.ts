import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: LandingPageComponent
      },
      {
        path: 'contato',
        component: ContactComponent
      }
    ]),
  ],
  declarations: [LandingPageComponent, ContactComponent],
  exports: [ContactComponent]
})
export class WebAppFeatureLandingModule { }
