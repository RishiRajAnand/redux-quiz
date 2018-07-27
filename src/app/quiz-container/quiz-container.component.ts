import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import * as quizReducer from '../reducers/quizReducer';
interface AppState {
  quiz: any;
}
@Component({
  selector: 'app-quiz-container',
  templateUrl: './quiz-container.component.html',
  styleUrls: ['./quiz-container.component.css']
})
export class QuizContainerComponent implements OnInit {
  quiz: Observable<any>;
  constructor(private store: Store<AppState>) {
    this.quiz = store.select('quiz');
  }

  ngOnInit() {

    this.quiz.subscribe((state) => {
       console.log('state', state);
    });
    this.store.dispatch(new quizReducer.ChangeQuestion({
      index: 100 }));
  }

}
