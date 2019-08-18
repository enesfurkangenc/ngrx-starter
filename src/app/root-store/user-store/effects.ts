import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, concatMap, map } from "rxjs/operators";
import { UserService } from "../../services/user.service";
import * as featureActions from "./actions";

@Injectable()
export class UserStoreEffects {
  constructor(private userService: UserService, private actions$: Actions) {}

  loadRequestEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(featureActions.load),
      concatMap(_ =>
        this.userService.getAllUsers().pipe(
          map(user => {
            return featureActions.loadSuccess({ user });
          }),
          catchError(error => of(featureActions.loadFailure({ error })))
        )
      )
    )
  );
}
