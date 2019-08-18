import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UsersComponent } from "./container/users/users.component";
import { UserDetailComponent } from "./container/user-detail/user-detail.component";
import { UserCardComponent } from "./components/user-card/user-card.component";
import { RootStoreModule } from "./root-store";
import { NgZorroAntdModule, NZ_I18N, tr_TR } from "ng-zorro-antd";
import { FormsModule } from "@angular/forms";
import { registerLocaleData } from "@angular/common";
import tr from "@angular/common/locales/tr";
import { HeaderComponent } from './components/navigation/header/header.component';
import { UserDetailCardComponent } from './components/user-detail-card/user-detail-card.component';

registerLocaleData(tr);

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent,
    UserCardComponent,
    HeaderComponent,
    UserDetailCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RootStoreModule,
    NgZorroAntdModule,
    FormsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: tr_TR }],
  bootstrap: [AppComponent],
})
export class AppModule {}
