import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QuizengagemockService } from 'src/app/services/mock-test/quizengagemock.service';
import { QuizengageService } from 'src/app/services/quizengage.service';
import { DebugElement } from '@angular/core';
import { EasyQuizComponent } from './easy-quiz.component';
import { By } from '@angular/platform-browser';


describe('EasyQuizComponent', () => {
  let component: EasyQuizComponent;
  let fixture: ComponentFixture<EasyQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EasyQuizComponent ],
      providers: [
        { provide: QuizengageService, useClass: QuizengagemockService }
    ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`html should render list of quiz options`, () => {
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('mat-radio-group');
    expect(el.innerText).toContain('Berlin');
  });

  it(`should call the chooseAnswer method`, () => {
    spyOn(component, 'chooseAnswer');
    const el = fixture.debugElement.query(By.css('mat-radio-button')).nativeElement;
    el.click();
    expect(component.chooseAnswer).toHaveBeenCalled();
  });

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



