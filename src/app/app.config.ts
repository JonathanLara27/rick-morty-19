import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpInterceptor } from './common/interceptors/http.interceptor';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { paginatorES } from './common/utils';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withInterceptors([
        httpInterceptor
      ]),
    ),
    { provide: MatPaginatorIntl, useClass: paginatorES },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withHashLocation()), provideAnimationsAsync()
  ]
};
