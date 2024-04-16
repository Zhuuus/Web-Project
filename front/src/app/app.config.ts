import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
// <<<<<<< HEAD
// =======

// >>>>>>> f063f88d31c9e9c9593cb54180723665b87edce5
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';


export const appConfig: ApplicationConfig = {
// <<<<<<< HEAD
  providers: [provideRouter(routes), provideClientHydration(),  provideHttpClient()]
// };
// =======
//   providers: [provideRouter(routes), provideHttpClient()]
};
// >>>>>>> f063f88d31c9e9c9593cb54180723665b87edce5
