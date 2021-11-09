import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LandingPageComponent } from './views/landing-page/landing-page.component';


const routes: Routes = [

 


  { path: '', loadChildren: () => import('./views/quiz-quesions/quiz-quesions.module').then(m => m.QuizQuesionsModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution:'corrected'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
