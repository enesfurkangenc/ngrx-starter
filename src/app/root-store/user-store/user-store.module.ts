import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { UserStoreEffects } from "./effects";
import { reducer } from "./reducer";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature("users", reducer),
    EffectsModule.forFeature([UserStoreEffects]),
  ],
  providers: [UserStoreEffects],
})
export class UserStoreModule {}
