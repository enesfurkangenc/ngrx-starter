import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";
import { IUser } from "src/app/models/user.model";

@Component({
  selector: "app-user-detail-card",
  templateUrl: "./user-detail-card.component.html",
  styleUrls: ["./user-detail-card.component.scss"],
})
export class UserDetailCardComponent implements OnInit {
  @Input() UserName: Observable<IUser[]>;
  @Input() Name: Observable<IUser[]>;
  @Input() Email: Observable<IUser[]>;
  @Input() Phone: Observable<IUser[]>;
  @Input() Website: Observable<IUser[]>;
  @Input() CompanyName: Observable<IUser[]>;

  constructor() {}

  ngOnInit() {}
}
