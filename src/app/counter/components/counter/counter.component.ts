
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h1>Este es un counter</h1>

    <h3>La base es: <strong> {{ numero }}</strong></h3>

    <button (click)="acumular(-base)">- {{ base }}</button>
    <button (click)="resetCounter()">RESET</button>
    <button (click)="acumular(base)">+ {{ base }}</button>
  `,
})

export class CounterComponent {
  constructor() {

  }
  titulo: string = 'Contador App';
  numero: number = 0;
  base: number = 5;
  public counter: number = 11;

  acumular(valor: number) {
    this.numero += valor;
  }

  increaseBy(): void {
    this.counter += 1;
  }

  resetCounter(): void {
    this.numero = 0;
  }

}
