import { Component } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";


@Component({
    selector: 'app-create-user', 
    templateUrl: './create-user-form.component.html',
    styleUrl: './create-user-form.scss', 
    standalone: true,
    imports: [ReactiveFormsModule], 
}) 
export class CreateUserFormComponent {
}