import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideState, provideStore } from '@ngrx/store';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { locationReducer } from './store/location.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(),
    
    importProvidersFrom(HttpClientModule), 
    provideHttpClient(withFetch()),
    
    provideStore(),
    provideState({name: "location", reducer: locationReducer})
  ]
};
