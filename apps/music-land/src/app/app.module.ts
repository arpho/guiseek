import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule.forRoot([
      {
        path: 'landing',
        loadChildren: () =>
          import('@guiseek/music-land/landing').then(module => module.MusicLandLandingModule),
      },
      {
        path: 'onboarding',
        loadChildren: () =>
          import('@guiseek/music-land/onboarding').then(module => module.MusicLandOnboardingModule),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'landing'
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
