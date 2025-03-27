import {  createActionGroup, emptyProps, props } from "@ngrx/store";
import { User } from "../user-interface";

export const UsersActions = createActionGroup({
    source: 'Users', 
    events: {
        'set': props<{user: User[]}>(), 
        'edit': props<{ user: User}>(), 
        'create': props<{ user: User}>(), 
        'delete': props<{ id: number }>(), 
        'loadUser': emptyProps,
        'loadUserSuccess': props<{ user: User[] }>(), 
        'loadUserFailure': props<{ error: string }>() 
        
    }
}); 

export const { loadUser, loadUserFailure, loadUserSuccess } = UsersActions