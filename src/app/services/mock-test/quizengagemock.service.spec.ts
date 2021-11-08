import { TestBed } from '@angular/core/testing';

import { QuizengagemockService } from './quizengagemock.service';

describe('QuizengagemockService', () => {
  let service: QuizengagemockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizengagemockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
