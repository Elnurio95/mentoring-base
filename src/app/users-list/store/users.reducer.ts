import { createFeature, createReducer, on } from "@ngrx/store";
import { User } from "../user-interface";
import { UsersActions } from "./user.actions";

export interface userState {
    user: User[],
    error: string | null,
    loading: boolean;
}

export const initialState: userState = {
    user: [],
    error: null,
    loading: false,
};

export const usersKey = 'users';
export const userReducer = createFeature({
    name: usersKey,
    reducer: createReducer(
        initialState,
        on(UsersActions.set, (state, payload) => ({
            ...state,
            users: payload.user,
        })),
        on(UsersActions.edit, (state, payload) => ({
            ...state,
            users: state.user.map((user: User) => {
                user.id === payload.user.id ? payload.user : user; 
            }),
        })),
        on(UsersActions.create, (state, payload) => ({
            ...state,
            users: [...state.user, payload.user],
        })),
        on(UsersActions.delete, (state, payload) => ({
            ...state,
            users: state.user.filter((user: User) => user.id !== payload.id),
        })),
        on(UsersActions.loadUser, state => ({
            ...state,
            loading: true,
            error: null,
        })),
        on(UsersActions.loadUserSuccess, (state, { user }) => ({
            ...state,
            user: user,
            loading: false,
            error: null,
        })),
        on(UsersActions.loadUserFailure, (state, { error }) => ({
            ...state,
            loading: false,
            error: error,
        }))
    )
}
); 