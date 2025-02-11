import { Component, EventEmitter, Input, Output, input } from "@angular/core";
import { Todo } from "../todo-interface";
import { CustomLengthTitlePipe } from "../../pipes/title-length.pipe";

@Component({
    selector: 'app-todo-card', 
    templateUrl: './todo-card.component.html', 
    styleUrl: './todo-card.component.scss', 
    standalone: true, 
    imports: [CustomLengthTitlePipe], 
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