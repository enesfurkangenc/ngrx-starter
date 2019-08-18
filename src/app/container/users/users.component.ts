import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { IUser } from "../../models/user.model";
import {
  UserStoreActions,
  UserStoreSelectors,
  RootStoreState,
} from "../../root-store";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
  user$: Observable<IUser[]>;
  error$: Observable<any>;
  isLoading$: Observable<boolean>;

  constructor(private store$: Store<RootStoreState.State>) {
    this.store$.dispatch(UserStoreActions.load());
  }

  ngOnInit() {
    this.user$ = this.store$.pipe(
      select(UserStoreSelectors.selectAllUserItems)
    );
    this.error$ = this.store$.pipe(select(UserStoreSelectors.selectUserError));
    this.isLoading$ = this.store$.pipe(
      select(UserStoreSelectors.selectUserLoading)
    );
  }

  onSelect(id: number, item?: any) {
    this.store$.dispatch(UserStoreActions.select({ id }));
    this.store$.dispatch(
      UserStoreActions.getByUserId({
        data: item,
      })
    );
  }

  deleteAll() {
    this.store$.dispatch(UserStoreActions.deleteAll());
  }

  getUser(userid: number) {
    this.store$.dispatch(UserStoreActions.getById({ Id: userid }));
  }

  deleteUser(id: number) {
    this.store$.dispatch(UserStoreActions.deleteId({ Id: id }));
  }

}
