import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IQuizQuestions } from '../interfaces/iquiz-questions';

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
        .get<IQuizQuestions>(
          `${environment.baseUrl}${environment.getAnswers}${category}`
        )
        .toPromise();

      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
