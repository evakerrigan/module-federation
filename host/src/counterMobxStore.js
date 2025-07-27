import { makeAutoObservable } from "mobx";

export class CounterMobxStore {
  counter = 0;

  constructor() {
    makeAutoObservable(this, undefined, { autoBind: true });
  }

  setCounter(newValue) {
    this.counter = newValue;
  }
}