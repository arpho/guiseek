import { enableProdMode } from '@angular/core';

import { environment } from '@env/frontend';

if (environment.production) {
  enableProdMode();
}

export { AppServerModule } from './app/app.server.module';
