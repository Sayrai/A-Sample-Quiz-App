import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';

import { QuizQuestionComponent } from './quiz-question.component';

describe('QuizQuestionComponent', () => {
  let component: QuizQuestionComponent;
  let fixture: ComponentFixture<QuizQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizQuestionComponent,FooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it(`should call the chooseAnswer method`, () => {
  //   spyOn(component, 'chooseAnswer');
  //   const el = fixture.debugElement.query(By.css('mat-radio-button')).nativeElement;
  //   el.click();
  //   expect(component.chooseAnswer).toHaveBeenCalled();
  // });


   
  // it("should fetch data asynchronously", async () => {
  //   const fakedFetchedQuestion = {
  //     id: "1",
  //     text: "What is the capital of Germany?",
  //     answerId: "berlin",
  //     category: "CITIES"
  // }
  //   const quizService = fixture.debugElement.injector.get(QuizengageService);
  //   let spy = spyOn(quizService, "getRandomQuestions").and.returnValue(
  //     Promise.resolve(fakedFetchedQuestion)
  //   );
  //   fixture.detectChanges();
  //   fixture.whenStable().then(() => {
  //     expect(component.getQuestions).toBe(fakedFetchedQuestion);
  //   });
  // });

});
