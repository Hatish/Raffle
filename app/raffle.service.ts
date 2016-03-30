//declare function require(name:string);
//var db = require('diskdb');

import {Injectable} from 'angular2/core';
import {Raffle} from './raffle';

var RAFFLES: Raffle[] = [
  { "id": 1, "name": "Jan", "start":"01/01/2016", "end":"31/01/2016", "status":"Complete" },
  { "id": 2, "name": "Feb", "start":"01/02/2016", "end":"29/02/2016", "status":"Complete" },
  { "id": 3, "name": "Mar", "start":"01/03/2016", "end":"31/03/2016", "status":"In Progress" }
];

@Injectable()
export class RaffleService {
//  db = db.connect('./db/data', ['raffles']);


  getRaffles() {
    return Promise.resolve(RAFFLES);
  }

  createRaffle(raffle) {

  }


}
