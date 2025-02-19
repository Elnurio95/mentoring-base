import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'deleteDash', 
  standalone: true,   
})

export class phonePipe implements PipeTransform {
    transform(phone: string) {
        return phone.replace(/-/g,''); 
    }
}