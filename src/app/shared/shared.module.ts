import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { QuizQuestionComponent } from './components/quiz-question/quiz-question.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [NavBarComponent, FooterComponent, QuizQuestionComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    NavBarComponent, 
    FooterComponent,
    QuizQuestionComponent
  ]
})
export class SharedModule { }
