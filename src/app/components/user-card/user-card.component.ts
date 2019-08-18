import { Component, OnInit, Output, Input, EventEmitter } from "@angular/core";

@Component({
  selector: "app-user-card",
  templateUrl: "./user-card.component.html",
  styleUrls: ["./user-card.component.scss"],
})
export class UserCardComponent implements OnInit {
  @Input() UserName: string;
  @Input() Name: string;
  @Input() Email: string;
  @Input() loading: boolean;
  @Input() userId: number;
  @Output() selectUser = new EventEmitter<any>();
  @Output() deleteUser = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}
}
