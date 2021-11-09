import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QuizengagemockService } from 'src/app/services/mock-test/quizengagemock.service';
import { QuizengageService } from 'src/app/services/quizengage.service';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { EasyQuizComponent } from './easy-quiz.component';
import { By } from '@angular/platform-browser';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { NavBarComponent } from '../../../shared/components/nav-bar/nav-bar.component';
import { QuizQuestionComponent } from '../../../shared/components/quiz-question/quiz-question.component';


describe('EasyQuizComponent', () => {
  let component: EasyQuizComponent;
  let fixture: ComponentFixture<EasyQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EasyQuizComponent,FooterComponent, NavBarComponent,QuizQuestionComponent ],
      providers: [
        { provide: QuizengageService, useClass: QuizengagemockService }
    ],
    schemas: [NO_ERRORS_SCHEMA]
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

  // it(`html should render list of quiz options`, () => {
  //   fixture.detectChanges();
  //   const el = fixture.nativeElement.querySelector('mat-radio-group');
  //   expect(el.innerText).toContain('Berlin');
  // });

  
});



