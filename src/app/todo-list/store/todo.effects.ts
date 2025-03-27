import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { todosApiService } from "../../todo-api.service";
import { TodoActions } from "./todo.actions";
import { catchError, map, of, switchMap } from "rxjs";
import { Todo } from "../todo-interface";

export const loadUsers = createEffect(
    () => {
        const actions$ = inject(Actions);
        const TodosApiService = inject(todosApiService);
    
        return actions$.pipe(
          ofType(TodoActions.loadTodo),
          switchMap(() =>
            TodosApiService.getTodos().pipe(
              map((todo: Todo[]) => TodoActions.loadTodoSuccess({ todo })),
              catchError(error => {
                return of(TodoActions.loadTodoFailure({ error: error.message }));
              }),
            ),
          ),
        );
      },
      { functional: true },
    );
