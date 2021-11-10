import { Component, Input, OnInit, Output } from '@angular/core';
import { IQuizCategory } from 'src/app/interfaces/iquiz-catergory';
import { IQuizQuestions } from 'src/app/interfaces/iquiz-questions';
import { QuizengageService } from 'src/app/services/quizengage.service';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css']
})
export class QuizQuestionComponent implements OnInit {


  quizQuestions!: IQuizQuestions;
  question!: string;
  wrongAnswers: number = 0;
  correctAnswers: number = 0;
  count: number = 0;
  correctAnswer!: string;
  optionList: string[] = ['EASY', 'MEDIUM', 'HARD'];
  categoryName: string = '';
  quizCategoryAnswer!: IQuizCategory[];
  quizAnswer: string = '';
  isCorrectAnswer = false;
  easyQuiz!: IQuizCategory[];

  optionSelected = false;
  loadingPage! : boolean;
  constructor(
    private quizengageservice: QuizengageService,
    // public dialog: MatDialog
  ) {

  }

  @Input('quizlevel') quizlevel: string = 'easy-quiz'
  @Output() wrongAnswersCount: number = 0;
  @Output() correctAnswersCount: number = 0;
  

  ngOnInit(): void {
    this.loadingPage= true;
    this.getQuestions();
    this.loadingPage= false;
  }



  getQuestions() {

    try {

      this.quizengageservice.getRandomQuestions().then((response) => {

        if (response) {

          this.quizQuestions = response;

          // console.log(this.quizQuestions, 'questions');

          this.count++;

          this.question = this.quizQuestions.text;

          this.categoryName = this.quizQuestions.category;

          this.quizAnswer = this.quizQuestions.answerId;

          this.getCategoryList(this.categoryName);


        } else {

          // this.sweetAlertService.error("Error! Please contact quiz admin"));

        }

      });

    } catch (error) {

      console.log(error);

    }

  }
 
  

  getNextQuestion(){

    if(this.optionSelected && this.count > 0){
      this.getQuestions();
      this.optionSelected = false;
      this.correctAnswer == undefined


    } else{
      alert('Please choose an option')
    }
    
  }

  getCategoryList(category: string) {

    try {

      this.quizengageservice.getCategoryList(category).then((response) => {

        if (response) {

          this.quizCategoryAnswer = response;


          const answer: any = this.quizCategoryAnswer.find(answer => answer.id === this.quizAnswer) || {};

          let newArray = this.quizCategoryAnswer.filter(x => x.id !== this.quizAnswer).slice(0, this.checkLevel());

          this.easyQuiz = newArray.concat([answer]);

          // return response;
        }

      });

    } catch (error) {

      console.log(error);

    }

  }

  checkLevel() {

    if (this.quizlevel === "easy-quiz") {
      return 2
    }

    if (this.quizlevel === "medium-quiz") {
      return 3
    }
    if (this.quizlevel === "hard-quiz") {
      return 4
    }
  }

  chooseAnswer(input: string, categoryName: string, correctAnswer: string) {

    this.optionSelected = true;

    const categoryAnswer = this.quizCategoryAnswer;

    if (input === correctAnswer) {


      this.isCorrectAnswer = true;

      this.correctAnswers++

    } else {

      this.wrongAnswers++;
      this.isCorrectAnswer = false;
    }


  }

  getFeedbackColor(labelSelected: string) {
    if (this.correctAnswer == undefined) {
      return {
        'background-color': 'white',
      }
    }

    if (labelSelected !== this.quizAnswer && labelSelected !== this.correctAnswer) {

      return {
        'background-color': 'white',
      }
    }

    if (labelSelected === this.quizAnswer && labelSelected === this.correctAnswer) {
      return {
        'background-color': 'green',
        'color': 'white',
      }
    }

    if (labelSelected !== this.quizAnswer && labelSelected === this.correctAnswer) {
      return {
        'background-color': 'red',
      }
    }

    return {
      'background-color': 'white',
    }

  }


}
