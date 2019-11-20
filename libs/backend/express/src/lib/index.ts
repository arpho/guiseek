import { environment } from '@env/backend';
import { hostWebApp, hostWebAppSsr } from '@guiseek/backend/hosting';
import * as express from 'express';
import { AppConfig } from './config';


export const app = express();

new AppConfig(app).make();
// new AppControllers(app).make();

// if (environment.production === true) {
// hostWebApp(app);
hostWebAppSsr(app);
// }

export function bootstrap() {
  return app.listen(environment.port, () => {
    console.log(
      `\n  App is running at http://localhost:%d in %s mode`,
      environment.port,
      environment.production ? 'production' : 'development',
    );
    console.log('  Press CTRL-C to stop\n');
  });
}
