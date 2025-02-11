import { NgIf } from "@angular/common";
import { Component, EventEmitter, inject, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { User } from "../users-list/user-interface";
import { CreateUserDialog } from "../users-list/create-user-dialog/create-user-dialog.component";
import { UsersService } from "../users.service";


@Component({
    selector: 'app-create-user', 
    templateUrl: './create-user-form.component.html',
    styleUrl: './create-user-form.scss', 
    standalone: true,
    imports: [ReactiveFormsModule], 
}) 
export class CreateUserFormComponent {
}