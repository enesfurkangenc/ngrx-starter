import { createAction, props } from "@ngrx/store";
import { IUser } from "../../models/user.model";

export const load = createAction("[User Component] Load");

export const loadFailure = createAction(
  "[User API] Load Failure",
  props<{ error: string }>()
);

export const loadSuccess = createAction(
  "[User API] Load Success",
  props<{ user: IUser[] }>()
);

export const select = createAction(
  "[User Page] Select",
  props<{ id: number }>()
);

export const getByUserId = createAction(
  "[User Page] getByUserId",
  props<{ data: any }>()
);

export const deleteAll = createAction("[User Api] DeleteAll");

export const getById = createAction("[User APi] GetById", props<{ Id: any }>());

export const deleteId = createAction(
  "[User Api] DeleteUser",
  props<{ Id: number }>()
);

export const getUserById = createAction("[User API] GetUser ID");

export const getUserByIdSucess = createAction(
  "[User API] GetIUser By Id",
  props<{ user: IUser[] }>()
);
