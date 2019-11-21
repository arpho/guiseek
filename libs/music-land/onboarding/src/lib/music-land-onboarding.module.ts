import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path: '',
        component: CreateAccountComponent
    }
    ]),
  ],
  declarations: [CreateAccountComponent],
})
export class MusicLandOnboardingModule {}
