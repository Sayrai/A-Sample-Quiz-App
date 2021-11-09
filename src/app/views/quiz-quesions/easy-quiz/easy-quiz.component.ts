import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
// import { MatDialog } from '@angular/material/dialog/dialog';
import { IQuizQuestions } from 'src/app/interfaces/iquiz-questions';
import { QuizengageService } from 'src/app/services/quizengage.service';
import { IQuizCategory } from '../../../interfaces/iquiz-catergory';

@Component({
  selector: 'app-easy-quiz',
  templateUrl: './easy-quiz.component.html',
  styleUrls: ['./easy-quiz.component.css']
})
export class EasyQuizComponent implements OnInit {

 

  constructor(
    
  ) { }

  ngOnInit(): void {

  }



}
