import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FIREBASE_OPTIONS } from '@angular/fire/compat'
export const firebaseConfig = {
  apiKey: "AIzaSyCArsQUCHpKoLNtD4b_uHfQnhmiUjGzerM",
  authDomain: "test-app-572b2.firebaseapp.com",
  projectId: "test-app-572b2",
  storageBucket: "test-app-572b2.appspot.com",
  messagingSenderId: "350779174164",
  appId: "1:350779174164:web:59c6d2ca94651fa3d1e601"
};
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(),
  { provide: FIREBASE_OPTIONS, useValue: firebaseConfig }
]
};
