import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminAuthComponent
      }
    ]),
  ],
  declarations: [AdminAuthComponent],
})
export class WebAdminFeatureAuthModule {}
