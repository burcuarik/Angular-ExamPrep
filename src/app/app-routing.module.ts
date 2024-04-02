import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LmSeiteComponent } from './lernmodus/lm-seite.component';
import { CmSeiteComponent } from './checkseite/cm-seite.component';
import { EmSeiteComponent } from './examseite/em-seite.component';
import { LmListmodeComponent } from './learnlistmode/lm-listmode.component';
import { LmSinglemodeComponent } from './learnsinglemode/lm-singlemode.component';
import { EmSinglemodeComponent } from './examsinglemode/em-singlemode.component';
import { EmErgebnisseComponent } from './examergebnisse/em-ergebnisse.component';

const routes: Routes = [
  {
    path:'', redirectTo:'/home', pathMatch:'full'
  }, 

  {
    path:'home',
    component: HomeComponent,
  },
  {
    path:'lm-seite',
    component:LmSeiteComponent,
  },
  {
    path:'cm-seite',
    component: CmSeiteComponent,
  },
  {
    path:'em-seite',
    component:EmSeiteComponent,
  },
  {
    path:'em-singlemode',
    component:EmSinglemodeComponent,
  },

  {
    path:'em-ergebnisse',
    component:EmErgebnisseComponent,
  },

  {
    path:'lm-listmode',
    component:LmListmodeComponent,
  },
  {
    path:'lm-singlemode',
    component:LmSinglemodeComponent,
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
