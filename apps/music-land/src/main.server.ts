import { enableProdMode } from '@angular/core';
import { environment } from '@env/musicland/frontend';


if (environment.production) {
  enableProdMode();
}

export { AppServerModule } from './app/app.server.module';

