import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

// Importing http module to entire app:
import { provideHttpClient } from "@angular/common/http";

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient() ]
};
