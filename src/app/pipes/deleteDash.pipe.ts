import { Pipe, PipeTransform } from "@angular/core";
import { User } from "../users-list/user-interface";


@Pipe({
  name: 'deleteDash', 
  standalone: true,   
})

export class phonePipe implements PipeTransform {
    transform(phone: string) {
        return phone.replace(/-/g,''); 
    }
}