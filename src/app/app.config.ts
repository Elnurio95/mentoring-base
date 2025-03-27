import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { userReducer } from './users-list/store/users.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { todoReducer } from './todo-list/store/todo.reducer';

export const appConfig: ApplicationConfig = {
  providers: 
    [provideRouter(routes),
    provideHttpClient(), provideAnimationsAsync(), provideStore({
        [userReducer.name]: userReducer.reducer,  
        [todoReducer.name]: todoReducer.reducer, 
    }), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
