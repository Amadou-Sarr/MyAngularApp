import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppGuardService } from "./shared/app-guard.service";
import {CreateCandidateComponent} from "./candidate/create-candidate/create-candidate.component";
import {CandidateModule} from "./candidate/candidate.module";

// @ts-ignore
// @ts-ignore
// @ts-ignore
const routes: Routes = [

  {
    path: 'candidate',
    //@ts-ignore
    loadChildren :() => CandidateModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
