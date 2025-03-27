import { createFeatureSelector, createSelector } from "@ngrx/store";
import { usersKey, userState } from "./users.reducer";

export const getUserState = createFeatureSelector<userState>(usersKey);

export const selectUsers = createSelector(
    getUserState, 
    (state: userState) => state.user, 
); 

export const selectUserError = createSelector( 
    getUserState, 
    (state: userState) => state.error, 
); 