import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateCandidateComponent} from "./create-candidate/create-candidate.component";

const routes: Routes = [
  {
    path : '/create',
    component : CreateCandidateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateRoutingModule { }
