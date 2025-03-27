import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UsersApiService } from "../../users-api.service";
import { catchError, map, of, switchMap } from "rxjs";
import { User } from "../user-interface";
import { UsersActions } from "./user.actions";


export const loadUsers = createEffect(
    () => {
        const actions$ = inject(Actions);
        const usersServiceApi = inject(UsersApiService);
    
        return actions$.pipe(
          ofType(UsersActions.loadUser),
          switchMap(() =>
            usersServiceApi.getUsers().pipe(
              map((user: User[]) => UsersActions.loadUserSuccess({ user })),
              catchError(error => {
                return of(UsersActions.loadUserFailure({ error: error.message }));
              }),
            ),
          ),
        );
      },
      { functional: true },
    );


            