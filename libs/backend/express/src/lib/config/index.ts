import { environment } from '@env/backend';
import * as errorHandler from 'errorhandler';
import { Express, static as expressStatic } from 'express';

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
