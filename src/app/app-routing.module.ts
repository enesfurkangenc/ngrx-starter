import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// containers
import { UsersComponent } from "./container/users/users.component";
import { UserDetailComponent } from "./container/user-detail/user-detail.component";

const routes: Routes = [
  { path: "", redirectTo: "users", pathMatch: "full" },
  { path: "users", component: UsersComponent },
  { path: "user", component: UserDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
