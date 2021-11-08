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

  quizQuestions!: IQuizQuestions;
  loading = true;
  question!: string;
  wrongAnswers: number = 0;
  correctAnswers: number = 0;
  count: number = 0;
  correctAnswer!: string;
  optionList: string[] = ['EASY', 'MEDIUM', 'HARD'];
  categoryName: string = '';
  quizCategoryAnswer!: IQuizCategory[];
  quizAnswer: string = '';
  isCorrectAnswer= false;
  easyQuiz!: IQuizCategory[];

  optionSelected = false;

  constructor(
    private quizengageservice: QuizengageService,
    // public dialog: MatDialog
  ) { }

  @Output() wrongAnswersCount = this.wrongAnswers;
  @Output() correctAnswersCount = this.correctAnswers;

  ngOnInit(): void {

    this.getQuestions();
    // this.quizControl;

    console.log(this.correctAnswer);

  }

  // quizControl = new FormControl('', [Validators.required]);

  shuffle(array: any[]) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }

  // onclicked(value: any){
  //   console.log('checking answer value', value);
  // }

  getQuestions() {

    try {

      this.quizengageservice.getRandomQuestions().then((response) => {

        if (response) {

          this.quizQuestions = response;

          console.log(this.quizQuestions, 'questions');

          this.count++;

          this.question = this.quizQuestions.text;

          this.categoryName = this.quizQuestions.category;

          this.quizAnswer = this.quizQuestions.answerId;

          this.loading = false;

          this.shuffle(this.optionList);

         this.getCategoryList(this.categoryName);

          // this.chooseAnswer(value, this.categoryName);

        } else {

          // this.sweetAlertService.info(response.responseMessage);

        }

      });

    } catch (error) {

      console.log(error);

    }

  }

  getCategoryList(category: string) {

    try {

      this.quizengageservice.getCategoryList(category).then((response) => {

        if (response) {

          this.quizCategoryAnswer = response;

          let newArray = this.quizCategoryAnswer.slice(0, 3);

          this.easyQuiz = newArray;

          // return response;
        }
      
      });

    } catch (error) {

      console.log(error);

    }

  }

  chooseAnswer(input: string, categoryName: string, correctAnswer: string) {
     console.log(input, 'input by user');
     this.optionSelected = true;
    const categoryAnswer = this.quizCategoryAnswer;

      // for (const answer of categoryAnswer) {
        if(input === correctAnswer) {
          console.log(correctAnswer, 'checkin correct answer')
          this.isCorrectAnswer = true;
          
          this.correctAnswers++
        }else {
          this.wrongAnswers++;
          this.isCorrectAnswer = false;
        }
        // input === correctAnswer ? this.isCorrectAnswer === true? this.correctAnswers++ :  this.isCorrectAnswer === false : this.wrongAnswers++;
        // this.optionSelected = true;
        // return this.isCorrectAnswer;
        // console.log(this.correctAnswer);

      // }
    
  }


}
