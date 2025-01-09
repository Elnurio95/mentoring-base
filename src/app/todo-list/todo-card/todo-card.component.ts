import { NgFor } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Todo } from "../todo-interface";

@Component({
    selector: 'app-todo-card', 
    templateUrl: './todo-card.component.html', 
    styleUrl: './todo-card.component.scss', 
    standalone: true, 
    imports: [NgFor]
})

export class TodoCardComponent {
    @Input() 
    todo!: Todo; 

    @Output() 
    deleteTodo = new EventEmitter<number>(); 

    onDeleteTodo(todoId: number) {
        this.deleteTodo.emit(todoId); 
    }
}