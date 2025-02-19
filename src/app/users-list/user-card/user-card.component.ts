import { Component, EventEmitter, inject, Input, Output, Pipe } from "@angular/core";
import { User } from "../user-interface";
import { MatDialog } from '@angular/material/dialog';
import { EditUserDialogComponent } from "../edit-user-dialog/edit-user-dialog.component";
import { DeleteUserDialogComponent } from "../delete-user-dialog/delete-user-dialog.component";
import { MatCardModule } from "@angular/material/card";
import { phonePipe } from "../../pipes/deleteDash.pipe";
import { CardShadow } from "../../directives/shadow.directive";
import { MatButtonModule } from "@angular/material/button";


@Component({
    selector: 'app-user-card', 
    templateUrl: './user-card.component.html', 
    styleUrl: './user-card.component.scss', 
    imports: [MatCardModule, phonePipe, CardShadow, MatButtonModule],
    standalone: true,
})

export class UserCardComponent {
    readonly dialog = inject(MatDialog);
    
    @Input()
    user!: User; 
    
    @Output()  
    deleteUser = new EventEmitter<number>(); 

    @Output() 
    editUser = new EventEmitter();  

    openEditDialog(): void {
        const dialogRef = this.dialog.open(EditUserDialogComponent, {
            data: { user: this.user }, 
        }); 
        dialogRef.afterClosed().subscribe((editResult) => {
            if (editResult) {
                this.editUser.emit(editResult);
            }  
        }); 
    }

    openDeleteDialog(): void {
        this.dialog.open(DeleteUserDialogComponent, {
            data: { user: this.user.id }
        }).afterClosed().subscribe((result: number) => {
            if (result) {
                this.onDeleteUser(result);
            }
        })
    }

    onDeleteUser(userId: number) {
        this.deleteUser.emit(userId); 
    }
}