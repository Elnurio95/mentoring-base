import { AsyncPipe, NgFor } from "@angular/common";
import { Component, inject } from "@angular/core";
import { TodoCardComponent } from "./todo-card/todo-card.component";
import { Todo } from "./todo-interface";
import { todosApiService } from "../todo-api.service";
import { TodosService } from "../todos.service";
import { CreateTodoFormComponent } from "../create-todo-form/create-todo-form.component";
import { Store } from "@ngrx/store";
import { TodoActions } from "./store/todo.actions";

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrl: './todo-list.component.scss',
    standalone: true,
    imports: [NgFor, TodoCardComponent, AsyncPipe, CreateTodoFormComponent]
})

export class TodoListComponent {
    readonly todosApiService = inject(todosApiService);
    readonly todosService = inject(TodosService);

    private readonly store = inject(Store);

    ngOnInit() {
        this.store.dispatch(TodoActions.loadTodo());
    }


    constructor() {
        this.todosApiService.getTodos().subscribe(
            (response: Todo[]) => {
                this.todosService.setTodos(response);
                this.store.dispatch(TodoActions.set({ todo: response }));
            }
        )
    }

    deleteTodo(id: number) {
        this.todosService.deleteTodo(id);
        this.store.dispatch(TodoActions.delete({ id }));
    }

    editTodo(todo: Todo) {
        this.todosService.editTodos(todo);
        this.store.dispatch(TodoActions.edit({ todo }));
    }

    public createTodo(formData: Todo) {
        this.todosService.createTodos({
            id: new Date().getTime(),
            userId: formData.userId,
            title: formData.title,
            completed: formData.completed,
        });
        this.store.dispatch(TodoActions.create({
            todo: {
                id: new Date().getTime(),
                userId: formData.userId,
                title: formData.title,
                completed: formData.completed,
            },
        }));
    }
}