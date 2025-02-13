import { NgIf } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
    standalone: true, 
    selector: 'create-user-dialog', 
    templateUrl: './create-user-dialog.component.html', 
    imports: [ReactiveFormsModule, NgIf, MatButtonModule, MatFormFieldModule, FormsModule, MatInputModule,] 
})

export class CreateUserDialog {

    readonly dialogRef = inject(MatDialogRef);

    public form = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(2)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        website: new FormControl('', [Validators.required, Validators.minLength(3)]),
        company: new FormGroup({
            name: new FormControl('', [Validators.required, Validators.minLength(2)]),
        })
    });   

    public submitForm(): void {
        this.dialogRef.close(this.form.value);
    }
}
