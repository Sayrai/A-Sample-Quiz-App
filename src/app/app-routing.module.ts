import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { QuizquestionsComponent } from './views/quizquestions/quizquestions.component';

const routes: Routes = [

  {
    path: 'quiz-questions',
    component: QuizquestionsComponent
  },

  {
    path: '',
    component:LandingPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
