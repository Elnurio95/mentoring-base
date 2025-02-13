import { NgIf } from "@angular/common";
import { Component, EventEmitter, inject, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from "@angular/material/dialog";

@Component({
    selector:'app-edit-user-dialog',
    templateUrl:'./edit-user-dialog.component.html', 
    styleUrl:'./edit-user-dialog.component.scss', 
    imports: [ReactiveFormsModule, NgIf, MatDialogClose], 
    standalone: true 
})
export class EditUserDialogComponent {
    readonly data = inject(MAT_DIALOG_DATA);
    readonly dialogRef = inject(MatDialogRef);

    public form = new FormGroup({
        name: new FormControl(this.data.user.name, [Validators.required, Validators.minLength(2)]), 
        email: new FormControl(this.data.user.email, [Validators.required, Validators.email]), 
        website: new FormControl(this.data.user.website, [Validators.required, Validators.minLength(3)]), 
        company: new FormGroup({
            name: new FormControl(this.data.user.company.name, [Validators.required, Validators.minLength(2)]), 
        })
    }); 

    // get userWithUpdatedFields() {
    //     return {
    //         ...this.form.value, 
    //         id: this.data.user.id, 
    //     }; 
    // }

    public submitForm(): void {
        this.dialogRef.close({
            ...this.form.value, 
            id: this.data.user.id
        });
    }
}