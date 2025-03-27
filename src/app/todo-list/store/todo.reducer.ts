import { createFeature, createReducer, on } from "@ngrx/store";
import { Todo } from "../todo-interface";
import { TodoActions } from "./todo.actions";

export interface todoState {
    todo: Todo[],
    error: string | null,
    loading: boolean;
}

export const initialState: todoState = {
    todo: [],
    error: null,
    loading: false,
}

export const todosKey = 'todos';

export const todoReducer = createFeature({
    name: todosKey,
    reducer: createReducer(
        initialState,
        on(TodoActions.set, (state, payload) => ({
            ...state, todo: payload.todo,
        })),
        on(TodoActions.edit, (state, payload) => ({
            ...state, todos: state.todo.map((todo: Todo) => {
                todo.id === payload.todo.id ? payload.todo : todo; 
            }),
        })),
        on(TodoActions.create, (state, payload) => ({
            ...state, todos: [...state.todo, payload.todo],
        })),
        on(TodoActions.delete, (state, payload) => ({
            ...state, todos: state.todo.filter((todo: Todo) => todo.id !== payload.id),
        })),
        on(TodoActions.loadTodo, state => ({
            ...state,
            loading: true,
            error: null,
        })),
        on(TodoActions.loadTodoSuccess, (state, { todo }) => ({
            ...state,
            todo: todo,
            loading: false,
            error: null,
        })),
        on(TodoActions.loadTodoFailure, (state, { error }) => ({
            ...state,
            loading: false,
            error: error,
        }))
    )
}
) 