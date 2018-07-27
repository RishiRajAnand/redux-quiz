import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {  quizReducer } from './reducers/quizReducer';
import { AppComponent } from './app.component';
import { QuizContainerComponent } from './quiz-container/quiz-container.component';
import { MultipleChoiceComponent } from './quiz-type/multiple-choice/multiple-choice.component';
import { FillBlankComponent } from './quiz-type/fill-blank/fill-blank.component';


@NgModule({
  declarations: [
    AppComponent,
    QuizContainerComponent,
    MultipleChoiceComponent,
    FillBlankComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      quiz: quizReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
