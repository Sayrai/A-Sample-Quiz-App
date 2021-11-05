import { Component, OnInit } from '@angular/core';
import { IQuizQuestions } from 'src/app/interfaces/iquiz-questions';
import { QuizengageService } from 'src/app/services/quizengage.service';

@Component({
  selector: 'app-quizquestions',
  templateUrl: './quizquestions.component.html',
  styleUrls: ['./quizquestions.component.css']
})
export class QuizquestionsComponent implements OnInit {

 quizQuestions!: IQuizQuestions;
 loading = true;
 question!: string;

  constructor(
    private quizengageservice: QuizengageService,
  ) { }

  ngOnInit(): void {

    this.getQuestions();

  }

  getQuestions() {

    try {

      this.quizengageservice.getRandomQuestions().then((response) => {
            
        if (response) {

           this.quizQuestions = response;

           console.log(this.quizQuestions, 'questions');

           this.question = this.quizQuestions.text;

          this.loading = false;

        } else {

          // this.sweetAlertService.info(response.responseMessage);

        }

      });

    } catch (error) {

      console.log(error);

    }

  }

}
