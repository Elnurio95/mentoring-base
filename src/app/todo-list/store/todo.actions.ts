import { createActionGroup, props } from "@ngrx/store";
import { Todo } from "../todo-interface";

export const TodoActions = createActionGroup({
    source: 'Todo', 
    events: {
        'set': props<{todos: Todo}>(), 
        'edit': props<{todos: Todo}>(), 
        'create': props<{todos: Todo}>(), 
        'delete': props<{id: number}>(), 
    }, 
}); 

