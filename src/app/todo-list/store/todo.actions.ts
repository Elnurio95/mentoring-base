import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Todo } from "../todo-interface";

export const TodoActions = createActionGroup({
    source: 'Todo', 
    events: {
        'set': props<{todo: Todo[]}>(), 
        'edit': props<{todo: Todo}>(), 
        'create': props<{todo: Todo}>(), 
        'delete': props<{id: number}>(), 
        'loadTodo': emptyProps, 
        'loadTodoSuccess': props<{ todo: Todo[] }>(), 
        'loadTodoFailure': props<{ error: string }>()
    }, 
}); 

