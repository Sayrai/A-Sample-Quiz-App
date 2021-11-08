import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizQuesionsComponent } from './quiz-quesions.component';

describe('QuizQuesionsComponent', () => {
  let component: QuizQuesionsComponent;
  let fixture: ComponentFixture<QuizQuesionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizQuesionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizQuesionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
