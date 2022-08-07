import { CalculatorState } from './states/calculator.state';
import { calculate } from './actions/calculator.action';
import { counterState } from './states/counter.states';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as counterAction from './actions/counter.action';
import * as CalculatorActions from './actions/calculator.action';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'AngularRedux';
  //counter$: Observable<number>;
  currentNumber$: Observable<string>;
  // constructor(private store: Store<{ counter: counterState }>, private calculateStore: Store<{ calculate: CalculatorState}) {
  //   this.counter$ = this.store.select((state) => state.counter.count);

  // }

  constructor(
    private store: Store<{ calculate: CalculatorState }>,
    //private storeCounter: Store<{ counter: counterState }>
  ) {
    //this.counter$ = this.storeCounter.select((state) => state.counter.count);
    this.currentNumber$ = this.store.select((state)=> state.calculate.currentNumber)
    console.log(this.currentNumber$)
  }
  enterNumber(number: string) {
    this.store.dispatch(CalculatorActions.inputNumber({ number: number }));
  }
  enterOperator(operator: string) {
    this.store.dispatch(
      CalculatorActions.inputOperator({ operator: operator })
    );
  }

  // increment() {
  //   this.store.dispatch(counterAction.increment());
  // }
  // decrement() {
  //   this.store.dispatch(counterAction.decrement());
  // }
  // counter = 0;
  // increment() {
  //   this.counter++;
  // }
  // decrement() {
  //   this.counter--;
  // }
}
