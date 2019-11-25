import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { environment } from '@env/frontend';
import { WebAdminDataAccessModule } from '@guiseek/web-admin/data-access';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    WebAdminDataAccessModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('@guiseek/web-admin/feature/auth').then(
              module => module.WebAdminFeatureAuthModule,
            ),
        },
        {
          path: 'barcode',
          loadChildren: () =>
            import('@guiseek/web-admin/feature/barcode').then(
              module => module.WebAdminFeatureBarcodeModule,
            ),
        },
      ],
      { initialNavigation: 'enabled' },
    ),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
