import {Component} from 'angular2/core';
import {Raffle} from './raffle';

@Component({
  selector: 'my-raffle-detail',
  template: `
  <div *ngIf="raffle">
  <h2>{{raffle.name}} details!</h2>
  <div><label>id: </label>{{raffle.id}}</div>
  <div><label>start: </label>{{raffle.start}}</div>
  <div><label>end: </label>{{raffle.end}}</div>
  <div><label>status: </label>{{raffle.status}}</div>
  </div>
  `,
  inputs: ['raffle']
})

export class RaffleDetailComponent {
  raffle: Raffle;
}
