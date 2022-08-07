import { CalculatorReducer } from './reducers/calculator.reducers';
import { calculate } from './actions/calculator.action';
import { counterReducer } from './reducers/counter.reducer';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      counter: counterReducer,
      calculate: CalculatorReducer,
    }, {}),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
