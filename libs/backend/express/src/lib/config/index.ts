import { environment } from '@env/backend';
import * as errorHandler from 'errorhandler';
import { Express } from 'express';

export class AppConfig {
  constructor(private app: Express) { }

  make() {
    this.errorHandler();
  }
  /**
   * Error Handler. Provides full stack - disabled for production
   */
  private errorHandler() {
    if (environment.production === false) {
      this.app.use(errorHandler());
    }
  }
}
