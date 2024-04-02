import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LmSeiteComponent } from './lernmodus/lm-seite.component';
import { CmSeiteComponent } from './checkseite/cm-seite.component';
import { EmSeiteComponent } from './examseite/em-seite.component';
import { HomeComponent } from './home/home.component';
import { LmListmodeComponent } from './learnlistmode/lm-listmode.component';
import { LmSinglemodeComponent } from './learnsinglemode/lm-singlemode.component';
import { ModalComponent } from './modal/modal.component';
import { EmSinglemodeComponent } from './examsinglemode/em-singlemode.component';
import { EmErgebnisseComponent } from './examergebnisse/em-ergebnisse.component';

@NgModule({
  declarations: [
    AppComponent,
    LmSeiteComponent,
    CmSeiteComponent,
    EmSeiteComponent,
    HomeComponent,
    LmListmodeComponent,
    LmSinglemodeComponent,
    ModalComponent,
    EmSinglemodeComponent,
    EmErgebnisseComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
