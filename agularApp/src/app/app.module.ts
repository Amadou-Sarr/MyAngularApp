import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CreateCandidateComponent} from "./candidate/create-candidate/create-candidate.component";
import {MatButton} from "@angular/material/button";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {CandidateModule} from "./candidate/candidate.module";
import {Navigation} from "@angular/router";
import {NavigationModule} from "./navigation/navigation.module";

@NgModule({
  declarations: [
    AppComponent,
    CreateCandidateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
