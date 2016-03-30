//declare function require(name:string);
//var db = require('diskdb');
System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var RAFFLES, RaffleService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            RAFFLES = [
                { "id": 1, "name": "Jan", "start": "01/01/2016", "end": "31/01/2016", "status": "Complete" },
                { "id": 2, "name": "Feb", "start": "01/02/2016", "end": "29/02/2016", "status": "Complete" },
                { "id": 3, "name": "Mar", "start": "01/03/2016", "end": "31/03/2016", "status": "In Progress" }
            ];
            RaffleService = (function () {
                function RaffleService() {
                }
                //  db = db.connect('./db/data', ['raffles']);
                RaffleService.prototype.getRaffles = function () {
                    return Promise.resolve(RAFFLES);
                };
                RaffleService.prototype.createRaffle = function (raffle) {
                };
                RaffleService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], RaffleService);
                return RaffleService;
            }());
            exports_1("RaffleService", RaffleService);
        }
    }
});
//# sourceMappingURL=raffle.service.js.map