import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [ 
    {
        path: 'users', 
        component: UsersListComponent
    }, 
    {
        path: 'todos', 
        component: TodoListComponent
    }, 
    {
        path: 'admin', 
        component: AdminComponent, canActivate: [authGuard]
    }
];
