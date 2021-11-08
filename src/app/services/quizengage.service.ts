import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IQuizQuestions } from '../interfaces/iquiz-questions';
import { IQuizCategory } from '../interfaces/iquiz-catergory';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class QuizengageService {
  constructor(private httpClient: HttpClient) {}

  async getRandomQuestions() {
    try {
      return await this.httpClient
        .get<IQuizQuestions>(
          `${environment.baseUrl}${environment.getRandomQuestions}`
        )
        .toPromise();
    } catch (error) {
      console.log(error);
    }
  }

  async getCategoryList(category: string) {
    try {
      //   https://us-central1-quizengage.cloudfunctions.net/getAnswers?cat={category}
      const response = await this.httpClient
        .get<IQuizCategory[]>(
          `${environment.baseUrl}${environment.getAnswers}${category}`
        )
        .toPromise();

      return response;
    } catch (error) {
      console.log(error);
    }
  }

  getRandomQuestion(): Observable<IQuizCategory[]> {
    return this.httpClient
               .get<IQuizCategory[]>(`https://us-central1-quizengage.cloudfunctions.net/getRandomQuestion`);
  }
}
