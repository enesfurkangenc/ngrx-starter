import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IUser } from "../models/user.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class UserService {
  HTTP_NAME = "https://jsonplaceholder.typicode.com";
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<IUser[]> {
    return this.http
      .get<IUser[]>(`${this.HTTP_NAME}/users`)
      .pipe(map(result => result));
  }

  getUser(id: number) {
    return this.http.get<IUser>(`${this.HTTP_NAME}/users/${id}`);
  }
}
