import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from 'protractor';
import { EasyQuizComponent } from './easy-quiz/easy-quiz.component';

import { QuizQuesionsComponent } from './quiz-quesions.component';

describe('QuizQuesionsComponent', () => {
  let component: QuizQuesionsComponent;
  let fixture: ComponentFixture<QuizQuesionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizQuesionsComponent ],
      imports: [HttpClientModule,RouterTestingModule.withRoutes([
        {path:"easy-quiz",
          component: EasyQuizComponent}
        ],
        )],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizQuesionsComponent);
    component = fixture.componentInstance;
    // router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture.detectChanges();
    // debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should redirect to different quiz level', fakeAsync(() => {

  //   component.quizLevel = [
  //     // fill it with the different quiz level objects
  //   ];

  //   debugElement
  //     .query(By.css('.card'))
  //     .nativeElement.click();
  
  //   tick();
  
  //   expect(location.path()).toBe("/easy-quiz");
  
  // }));
});
