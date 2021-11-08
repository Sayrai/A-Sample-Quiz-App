import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EasyQuizComponent } from './easy-quiz/easy-quiz.component';
import { HardQuizComponent } from './hard-quiz/hard-quiz.component';
import { MediumQuizComponent } from './medium-quiz/medium-quiz.component';

import { QuizQuesionsComponent } from './quiz-quesions.component';

const routes: Routes = [
  { path: '', component: QuizQuesionsComponent },
  { path: 'easy-quiz', component: EasyQuizComponent },
  { path: 'medium-quiz', component: MediumQuizComponent },
  { path: 'hard-quiz', component: HardQuizComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizQuesionsRoutingModule { }
