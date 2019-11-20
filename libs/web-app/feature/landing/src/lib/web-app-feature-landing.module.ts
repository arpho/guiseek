import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: LandingPageComponent }
    ]),
  ],
  declarations: [LandingPageComponent],
})
export class WebAppFeatureLandingModule { }
