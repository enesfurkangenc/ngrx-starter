import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { IUser } from "../../models/user.model";

export const featureAdapter: EntityAdapter<IUser> = createEntityAdapter<IUser>({
  selectId: model => model.id,
  sortComparer: (a: IUser, b: IUser): number =>
    b.id.toString().localeCompare(a.id.toString()),
});

export interface State extends EntityState<IUser> {
  isLoading?: boolean;
  error?: any;
  selectedUserId: number;
  getByIdUser: any;
  isLoadingGetUser?: boolean;
  errorGetUser?: any;
}

export const initialState: State = featureAdapter.getInitialState({
  isLoading: false,
  error: null,
  selectedUserId: null,
  getByIdUser: null,
  isLoadingGetUser: false,
  errorGetUser: null,
});
