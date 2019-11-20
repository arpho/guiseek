import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path: '',
        component: ShellComponent,
        children: [
          {
            path: 'landing',
            loadChildren: () =>
              import('@guiseek/web-app/feature/landing').then(
                module => module.WebAppFeatureLandingModule,
              ),
          },
          {
            path: '',
            // pathMatch: 'full',
            redirectTo: 'landing'
          }
        ]
      },
    ]),
  ],
  declarations: [ShellComponent],
})
export class WebAppFeatureShellModule {}
