import { AsyncPipe, NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { User } from "./user-interface";
import { UsersApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";
import { UsersService } from "../users.service";
import { MatDialog } from "@angular/material/dialog";
import { ReactiveFormsModule } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { CreateUserDialog } from "./create-user-dialog/create-user-dialog.component";
import { Store } from "@ngrx/store";
import { UsersActions } from "./store/user.actions";
import { selectUsers } from "./store/user.selector";

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    standalone: true,
    imports: [NgFor, UserCardComponent, AsyncPipe, ReactiveFormsModule],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class UsersListComponent {

    readonly usersApiService = inject(UsersApiService);
    readonly usersService = inject(UsersService);

    readonly dialog = inject(MatDialog);
    private _snackBar = inject(MatSnackBar);
    private readonly store = inject(Store); 
    public readonly users$ = this.store.select(selectUsers); 

    ngOnInit() {
        this.store.dispatch(UsersActions.loadUser()); 
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(CreateUserDialog)
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.createUser(result);
                this.openSnackBar(result.name);
            }
        });
    }

    openSnackBar(message: string, duration: number = 5000) {
        this._snackBar.open(message, "ЮЗЕР СОЗДАН", { duration: duration })
    };

    constructor() {
        this.usersApiService.getUsers().subscribe(
            (response: User[]) => {
                this.usersService.setUsers(response);
                this.store.dispatch(UsersActions.set({user: response})); 
            }
        )
    }


    deleteUser(id: number) {
        this.usersService.deleteUser(id);
        this.store.dispatch(UsersActions.delete({ id })); 
    }

    editUser(user: User) {
        this.usersService.editUser(user); 
        this.store.dispatch(UsersActions.edit({ user })); 
    }

    public createUser(formData: User) {
        this.usersService.createUser({
            id: new Date().getTime(),
            name: formData.name,
            email: formData.email,
            website: formData.website,
            company: {
                name: formData.company.name,
            },
            phone: formData.phone,
        }
        );
        this.store.dispatch(
            UsersActions.create({
                user: {
                    id: new Date().getTime(),
                    name: formData.name,
                    email: formData.email,
                    website: formData.website,
                    company: {
                        name: formData.company.name,
                    },
                    phone: formData.phone,
                }
            })
        )
    }
}

