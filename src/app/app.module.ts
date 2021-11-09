import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { QuizQuesionsModule } from './views/quiz-quesions/quiz-quesions.module';
import { QuizengageService } from './services/quizengage.service';
import { GlobalHttpInterceptorServiceService } from './shared/interceptors/global-http-interceptor-service.service';
import { LandingPageComponent } from './views/landing-page/landing-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    QuizQuesionsModule,
    MaterialModule,
    // MatDialogModule
  ],
  providers: [HttpClient, QuizengageService, { provide: HTTP_INTERCEPTORS, useClass: GlobalHttpInterceptorServiceService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
