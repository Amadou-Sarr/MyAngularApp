import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppGuardService } from "./shared/app-guard.service";

const routes: Routes = [
  {
    path : '/candidate',
    canActivate : [AppGuardService],
    data : {
      roles : ["ROLE_ADMIN", "ROLE_SUPERUSER"]
    },
    pathMatch : "full"

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
