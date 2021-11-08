import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { QuizQuesionsModule } from './views/quiz-quesions/quiz-quesions.module';
import { QuizengageService } from './services/quizengage.service';
// import { MatDialogModule } from '@angular/material/dialog/dialog-module';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
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
    // HttpClient,
    MaterialModule,
    // MatDialogModule
  ],
  providers: [HttpClient, QuizengageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
