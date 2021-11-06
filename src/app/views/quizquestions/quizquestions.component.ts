import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
 wrongAnswers: number = 0;
 correctAnswers: number = 0;
 count: number = 0;
 favoriteSeason!: string;
 categoryList: string[] = ['EASY', 'MEDIUM', 'HARD'];

  constructor(
    private quizengageservice: QuizengageService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {

    // this.getQuestions();

  }

  getQuestions() {

    try {

      this.quizengageservice.getRandomQuestions().then((response) => {
            
        if (response) {

           this.quizQuestions = response;

           console.log(this.quizQuestions, 'questions');
           this.count++;
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


  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
  //     width: '250px',
  //     data: {name: this.name, animal: this.animal},
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }

}
