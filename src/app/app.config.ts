import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { jwtInterceptor, serverErrorInterceptor } from '@lib/interceptors';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimations(),
        provideRouter(routes, withComponentInputBinding()),
        provideHttpClient(withInterceptors([serverErrorInterceptor, jwtInterceptor])),
    ],
};
