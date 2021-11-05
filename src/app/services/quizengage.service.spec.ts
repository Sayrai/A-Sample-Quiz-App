import { TestBed } from '@angular/core/testing';

import { QuizengageService } from './quizengage.service';

describe('QuizengageService', () => {
  let service: QuizengageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizengageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
