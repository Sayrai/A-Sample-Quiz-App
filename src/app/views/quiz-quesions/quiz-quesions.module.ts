import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizQuesionsRoutingModule } from './quiz-quesions-routing.module';
import { QuizQuesionsComponent } from './quiz-quesions.component';
import { SharedModule } from '../../shared/shared.module';
import { HardQuizComponent } from './hard-quiz/hard-quiz.component';
import { MediumQuizComponent } from './medium-quiz/medium-quiz.component';
import { EasyQuizComponent } from './easy-quiz/easy-quiz.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';


@NgModule({
  declarations: [QuizQuesionsComponent, HardQuizComponent, MediumQuizComponent, EasyQuizComponent],
  imports: [
    CommonModule,
    QuizQuesionsRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  
  ]
})
export class QuizQuesionsModule { }
 