import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} 
       from '@angular/common/http/testing';
import { QuizengageService } from './quizengage.service';
import { IQuizQuestions } from '../interfaces/iquiz-questions';
import { HttpClientModule } from '@angular/common/http';

export const mockQuiz: IQuizQuestions =  
{
  id: "1",
  text: "What is the capital of Germany?",
  answerId: "berlin",
  category: "CITIES"
}

describe('QuizengageService', () => {
  let httpTestingController: HttpTestingController;
  let service: QuizengageService;

 

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuizengageService],
      imports: [HttpClientTestingModule,
      HttpClientModule]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(QuizengageService);
  });
 

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get random questions from APi', () => {
    service.getRandomQuestion().subscribe((question: any) => {
      expect(question).not.toBe(null);
      expect(JSON.stringify(question)).toEqual(JSON.stringify(mockQuiz));
    });

    const req = httpTestingController
              .expectOne(`https://us-central1-quizengage.cloudfunctions.net/getRandomQuestion`);

    req.flush(mockQuiz);
  });

});
