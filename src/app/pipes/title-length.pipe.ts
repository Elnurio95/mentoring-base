import { Pipe, PipeTransform } from "@angular/core";
import { Todo } from "../todo-list/todo-interface";

@Pipe({
    name:'customLengthTitlePipe',
    standalone: true, 
})
export class CustomLengthTitlePipe implements PipeTransform {
    transform(title: string) {
        if ( title.length <= 20 ) {
            return title; 
        } else {
            return title.slice(0, 21) + '...';  
        }
    } 
}