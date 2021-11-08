import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IQuizQuestions } from '../../interfaces/iquiz-questions';

@Injectable({
  providedIn: 'root'
})
export class QuizengagemockService {

  constructor() { }

  // getRandomQuestions(): Observable<{}> {

  //   const randonQuestions =  {
  //     id: "1",
  //       text: "What is the capital of Germany?",
  //         answerId: "berlin",
  //           category: "CITIES"
  //   };
  //   return  randonQuestions;
   

  // }

  getCategoryList(): Array<{}> {
    return [
      {
          id: "berlin",
          label: "Berlin"
      },
      {
          id: "paris",
          label: "Paris"
      },
      {
          id: "bologna",
          label: "Bologna"
      },
      {
          id: "strasbourg",
          label: "Strasbourg"
      }
  ]

  }
}
