import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { IUser } from "src/app/models/user.model";
import { Store, select } from "@ngrx/store";
import { RootStoreState, UserStoreSelectors } from "src/app/root-store";

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.scss"],
})
export class UserDetailComponent implements OnInit {
  user$: Observable<IUser[]>;
  constructor(private $store: Store<RootStoreState.State>) {}

  ngOnInit() {
    this.user$ = this.$store.pipe(select(UserStoreSelectors.selectGetUserId));
  }
}
