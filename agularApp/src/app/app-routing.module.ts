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
  }/*,
  {
    path: '**',
    redirectTo : "/candidate"
  }*/
/*  {
    path : '/candidate',
    //canActivate : [AppGuardService],
  //  data : {
  //    roles : ["ROLE_ADMIN", "ROLE_SUPERUSER"]
  //  },
    pathMatch : "full"
  },*/
/*,
  {
    path: 'statistics',
    canActivate: [AppAuthGuard],
    data: {
      roles: [Constantes.ROLE_ADMIN]
    },
    loadChildren : () => import('./main/statistics/statistics.module').then(m => m.StatisticsModule)
  },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
