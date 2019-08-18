import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IUser } from "../../models/user.model";
import { State, featureAdapter } from "./state";

export const selectUserState = createFeatureSelector<State>("users");

export const selectAllUserItems: (
  state: object
) => IUser[] = featureAdapter.getSelectors(selectUserState).selectAll;

export const selectUserError = createSelector(
  selectUserState,
  (state: State): any => state.error
);

export const selectUserLoading = createSelector(
  selectUserState,
  (state: State): boolean => state.isLoading
);

export const selecSelectedUserId = createSelector(
  selectUserState,
  (state: State): number => state.selectedUserId
);

export const selectGetUserId = createSelector(
  selectUserState,
  (state: State) => state.getByIdUser
);
