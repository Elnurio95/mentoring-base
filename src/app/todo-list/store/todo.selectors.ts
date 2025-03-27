import { createFeatureSelector, createSelector } from "@ngrx/store";
import { todosKey, todoState } from "./todo.reducer";

export const getTodoState = createFeatureSelector<todoState>(todosKey);

export const selectTodos = createSelector(
    getTodoState,
    (state: todoState) => state.todo, 
); 

export const selectTodoError = createSelector( 
    getTodoState, 
    (state: todoState) => state.error, 
); 