(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <mat-form-field>\n    <mat-select placeholder=\"Set\" (selectionChange)=\"setCards($event.value)\">\n      <mat-option *ngFor=\"let set of sets\" [value]=\"set.cards\">{{ set.name }}</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <button mat-flat-button color=\"primary\" (click)=\"getNewDecks()\" [disabled]=\"cards.length === 0\">Get New Decks</button>\n\n  <div *ngIf=\"decks\">\n    <div *ngFor=\"let deck of decks\">\n      <p>{{ deck.colors.join(' ') }}</p>\n      <h4>Creature ({{ deck.countCardsByType('Creature') }})</h4>\n      <table>\n        <tr *ngFor=\"let c of deck.getCardsByType('Creature')\">\n          <td>{{ c['NumUsed'] }}</td>\n          <td>{{ c['Name'] }}</td>\n          <td>{{ c['Mana'] }}</td>\n        </tr>\n      </table>\n\n      <h4>Spells ({{ deck.countCardsByType('Other') }})</h4>\n      <table>\n        <tr *ngFor=\"let c of deck.getCardsByType('Other')\">\n          <td>{{ c['NumUsed'] }}</td>\n          <td>{{ c['Name'] }}</td>\n          <td>{{ c['Mana'] }}</td>\n        </tr>\n      </table>\n\n      <table>\n        <tfoot>\n        <tr>\n          <th>CMC</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7+</td>\n        </tr>\n        </tfoot>\n        <tbody>\n        <tr>\n          <th>Num</th>\n          <td *ngFor=\"let i of [0,1,2,3,4,5,6,7]\">{{ deck.countCardsByCMC(i) }}</td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _deck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deck */ "./src/app/deck.ts");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card */ "./src/app/card.ts");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jszip */ "./node_modules/jszip/dist/jszip.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_soi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/soi */ "./src/data/soi.ts");
/* harmony import */ var _data_emn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/emn */ "./src/data/emn.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.cards = [];
        this.sets = [
            { name: 'SOI', cards: _data_soi__WEBPACK_IMPORTED_MODULE_4__["SOI"] },
            { name: 'EMN', cards: _data_emn__WEBPACK_IMPORTED_MODULE_5__["EMN"] }
        ];
    }
    AppComponent.prototype.getNewDecks = function () {
        var deckColors = [
            [_card__WEBPACK_IMPORTED_MODULE_2__["Color"].White, _card__WEBPACK_IMPORTED_MODULE_2__["Color"].Blue],
            [_card__WEBPACK_IMPORTED_MODULE_2__["Color"].White, _card__WEBPACK_IMPORTED_MODULE_2__["Color"].Black],
            [_card__WEBPACK_IMPORTED_MODULE_2__["Color"].White, _card__WEBPACK_IMPORTED_MODULE_2__["Color"].Red],
            [_card__WEBPACK_IMPORTED_MODULE_2__["Color"].White, _card__WEBPACK_IMPORTED_MODULE_2__["Color"].Green],
            [_card__WEBPACK_IMPORTED_MODULE_2__["Color"].Blue, _card__WEBPACK_IMPORTED_MODULE_2__["Color"].Black],
            [_card__WEBPACK_IMPORTED_MODULE_2__["Color"].Blue, _card__WEBPACK_IMPORTED_MODULE_2__["Color"].Red],
            [_card__WEBPACK_IMPORTED_MODULE_2__["Color"].Blue, _card__WEBPACK_IMPORTED_MODULE_2__["Color"].Green],
            [_card__WEBPACK_IMPORTED_MODULE_2__["Color"].Black, _card__WEBPACK_IMPORTED_MODULE_2__["Color"].Red],
            [_card__WEBPACK_IMPORTED_MODULE_2__["Color"].Black, _card__WEBPACK_IMPORTED_MODULE_2__["Color"].Green],
            [_card__WEBPACK_IMPORTED_MODULE_2__["Color"].Red, _card__WEBPACK_IMPORTED_MODULE_2__["Color"].Green]
        ];
        this.shuffle(deckColors);
        var decks = [];
        var zip = new jszip__WEBPACK_IMPORTED_MODULE_3__();
        var colorsUsed = { 'White': 0, 'Blue': 0, 'Black': 0, 'Red': 0, 'Green': 0 };
        var _loop_1 = function (i) {
            var deck = new _deck__WEBPACK_IMPORTED_MODULE_1__["Deck"]();
            do {
                var colors = deckColors.pop();
                var c1 = colors[0].toString();
                var c2 = colors[1].toString();
                if (colorsUsed[c1] < 2 && colorsUsed[c2] < 2) {
                    deck.colors = colors;
                    colorsUsed[c1]++;
                    colorsUsed[c2]++;
                }
            } while (deck.colors === undefined);
            deck.colors.sort();
            this_1.shuffle(this_1.cards);
            var onColor = this_1.cards.filter(function (c) {
                var c1 = deck.colors[0].toString();
                var c2 = deck.colors[1].toString();
                if (c1 === c.Color) {
                    return true;
                }
                if (c2 === c.Color) {
                    return true;
                }
                if (c1 + ' ' + c2 === c.Color) {
                    return true;
                }
                if (c.Color === 'Colorless' || c.Color === 'Land') {
                    return true;
                }
                return false;
            });
            var creatures = onColor.filter(function (c) { return c.Type === 'Creature'; });
            var other = onColor.filter(function (c) { return c.Type !== 'Creature'; });
            var desiredCreatures = Math.floor(Math.random() * (18 - 14 + 1)) + 14;
            do {
                var card = creatures.pop();
                card.NumUsed = Math.min(card.Use, desiredCreatures - deck.getNumNonLands());
                deck.cards.push(card);
            } while (deck.getNumNonLands() < desiredCreatures);
            do {
                var card = other.pop();
                card.NumUsed = Math.min(card.Use, 23 - deck.getNumNonLands());
                deck.cards.push(card);
            } while (deck.getNumNonLands() < 23);
            var numBasicsNeeded = 40 - deck.getNumCards();
            var countByColor = deck.countCardsByColor();
            var basics = {
                White: 'Plains',
                Blue: 'Island',
                Black: 'Swamp',
                Red: 'Mountain',
                Green: 'Forest'
            };
            var isFirstColor = true;
            ['White', 'Blue', 'Black', 'Red', 'Green'].forEach(function (color) {
                var count = countByColor[color];
                if (count > 0) {
                    var proportion = count / 23;
                    proportion = Math.max(proportion, 8 / 17);
                    proportion = Math.min(proportion, 9 / 17);
                    deck.cards.push({
                        Name: basics[color],
                        NumUsed: isFirstColor ? Math.round(proportion * numBasicsNeeded) : 40 - deck.getNumCards()
                    });
                    isFirstColor = false;
                }
            });
            var ids = deck.cards.reduce(function (acc, card) { return acc.concat(card.ID); }, []);
            this_1.cards = this_1.cards.filter(function (c) { return !ids.includes(c.ID); });
            decks[i] = deck;
            zip.file(deck.getName() + '.dck', deck.toDck());
        };
        var this_1 = this;
        for (var i = 0; i < 4; i++) {
            _loop_1(i);
        }
        this.decks = decks;
        this.setCards(this.chosenSet);
        zip.generateAsync({ type: 'blob' }).then(function (blob) {
            var url = window.URL.createObjectURL(blob);
            window.open(url);
        });
    };
    // creatures: 15-18
    // curve (creatures): 1: 0, 2: 4-6, 3: 6-7, 4: 3-4, 5: 2-3, 6: 1-2
    // creatures: 14-17
    // curve: 1: 0-3, 2: 4-5, 3: 7, 4: 6, 5+: 4
    // creatures: 14-17
    // curve (creatures): 1: 0-2, 2: 2-6, 3: 3-5, 4: 2-4, 5: 1-3, 6+: 0-2
    AppComponent.prototype.setCards = function (set) {
        var _this = this;
        this.chosenSet = set;
        this.cards = [];
        var n = 0;
        set.forEach(function (c) {
            for (var i = 0; i < c.Use; i++) {
                _this.cards.push(__assign({}, c, { Use: 1, ID: n++ }));
            }
        });
    };
    AppComponent.prototype.shuffle = function (arr) {
        for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [arr[j], arr[i]], arr[i] = _a[0], arr[j] = _a[1];
        }
        var _a;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _bunch_bunch_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bunch/bunch.component */ "./src/app/bunch/bunch.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _bunch_bunch_component__WEBPACK_IMPORTED_MODULE_5__["BunchComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bunch/bunch.component.css":
/*!*******************************************!*\
  !*** ./src/app/bunch/bunch.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/bunch/bunch.component.html":
/*!********************************************!*\
  !*** ./src/app/bunch/bunch.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"bunchOfStats\">\n  <table>\n    <tr><td *ngFor=\"let i of [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]\">{{ i }}</td></tr>\n    <tr><td *ngFor=\"let i of [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]\">{{ bunchOfStats.countNCreature(i) }}</td></tr>\n  </table>\n  Avg Creatures: {{ bunchOfStats.avgCreature() }}\n</div>\n\n<button mat-flat-button color=\"accent\" (click)=\"generateABunch()\">Generate a Bunch of Decks</button>\n"

/***/ }),

/***/ "./src/app/bunch/bunch.component.ts":
/*!******************************************!*\
  !*** ./src/app/bunch/bunch.component.ts ***!
  \******************************************/
/*! exports provided: BunchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BunchComponent", function() { return BunchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _deck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../deck */ "./src/app/deck.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BunchComponent = /** @class */ (function () {
    function BunchComponent() {
    }
    BunchComponent.prototype.ngOnInit = function () {
    };
    BunchComponent.prototype.generateABunch = function () {
        this.bunchOfStats = {
            n: 0,
            nCreature: [],
            countNCreature: function (n) {
                return this.nCreature.filter(function (m) { return m === n; }).length;
            },
            avgCreature: function () {
                var sum = this.nCreature.reduce(function (acc, n) { return (acc + n); }, 0);
                return (sum / this.nCreature.length).toFixed(1);
            }
        };
        for (var i = 0; i < 1000; i++) {
            var d = new _deck__WEBPACK_IMPORTED_MODULE_1__["Deck"]();
            var nCreature = void 0;
            do {
                // d = this.generateDeck();
                nCreature = d.countCardsByType('Creature');
            } while (nCreature < 13 || nCreature > 18);
            this.bunchOfStats.n = i;
            this.bunchOfStats.nCreature.push(nCreature);
        }
    };
    BunchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bunch',
            template: __webpack_require__(/*! ./bunch.component.html */ "./src/app/bunch/bunch.component.html"),
            styles: [__webpack_require__(/*! ./bunch.component.css */ "./src/app/bunch/bunch.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BunchComponent);
    return BunchComponent;
}());



/***/ }),

/***/ "./src/app/card.ts":
/*!*************************!*\
  !*** ./src/app/card.ts ***!
  \*************************/
/*! exports provided: Card, Color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
var Card = /** @class */ (function () {
    function Card() {
    }
    return Card;
}());

var Color;
(function (Color) {
    Color["White"] = "White";
    Color["Blue"] = "Blue";
    Color["Black"] = "Black";
    Color["Red"] = "Red";
    Color["Green"] = "Green";
})(Color || (Color = {}));


/***/ }),

/***/ "./src/app/deck.ts":
/*!*************************!*\
  !*** ./src/app/deck.ts ***!
  \*************************/
/*! exports provided: Deck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Deck", function() { return Deck; });
var Deck = /** @class */ (function () {
    function Deck() {
        this.cards = [];
    }
    Deck.prototype.getName = function () {
        return this.colors.join('-');
    };
    Deck.prototype.getNumNonLands = function () {
        return this.cards.reduce(function (acc, c) {
            return c.OracleType === 'Land' ? acc : acc + c.NumUsed;
        }, 0);
    };
    Deck.prototype.getNumCards = function () {
        return this.cards.reduce(function (acc, c) { return acc + c.NumUsed; }, 0);
    };
    Deck.prototype.getCardsByType = function (type) {
        return this.cards
            .filter(function (c) { return c.Type === type; })
            .sort(function (a, b) {
            if (a.CMC === b.CMC) {
                return 0;
            }
            return a.CMC - b.CMC;
        });
    };
    Deck.prototype.countCardsByCMC = function (cost) {
        var filtered;
        if (cost >= 7) {
            filtered = this.cards.filter(function (c) { return c.CMC >= cost; });
        }
        else {
            filtered = this.cards.filter(function (c) { return c.CMC === cost; });
        }
        return filtered.reduce(function (acc, c) { return acc + c.NumUsed; }, 0);
    };
    Deck.prototype.countCardsByColor = function () {
        var ret = { White: 0, Blue: 0, Black: 0, Red: 0, Green: 0 };
        var colors = ['White', 'Blue', 'Black', 'Red', 'Green'];
        this.cards.reduce(function (acc, c) {
            if (colors.includes(c.Color)) {
                acc[c.Color] += 1;
            }
            return acc;
        }, ret);
        return ret;
    };
    Deck.prototype.countCardsByType = function (type) {
        return this.getCardsByType(type).reduce(function (acc, c) { return acc + c.NumUsed; }, 0);
    };
    Deck.prototype.toText = function () {
        var out = [this.getName()];
        this.cards.forEach(function (c) {
            out.push(c.NumUsed + ' ' + c.Name);
        });
        return out.join('\n');
    };
    Deck.prototype.toDck = function () {
        var out = [
            '[metadata]',
            'Name=' + this.getName(),
            '[general]',
            'Sealed',
            '[main]'
        ];
        this.cards.forEach(function (c) {
            out.push(c.NumUsed + ' ' + c.Name);
        });
        return out.join('\n');
    };
    return Deck;
}());



/***/ }),

/***/ "./src/data/emn.ts":
/*!*************************!*\
  !*** ./src/data/emn.ts ***!
  \*************************/
/*! exports provided: EMN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMN", function() { return EMN; });
/* tslint:disable:quotemark */
var EMN = [
    {
        "Name": "Borrowed Malevolence",
        "OracleType": "Instant",
        "Mana": "B",
        "Rarity": "Common",
        "Artist": "Volkan Baga",
        "Edition": "Eldritch Moon",
        "CMC": 1,
        "Color": "Black",
        "Type": "Other",
        "Weight": 1.16,
        "Use": 2
    },
    {
        "Name": "Boon of Emrakul",
        "OracleType": "Enchantment - Aura",
        "Mana": "2B",
        "Rarity": "Common",
        "Artist": "Svetlin Velinov",
        "Edition": "Eldritch Moon",
        "CMC": 3,
        "Color": "Black",
        "Type": "Other",
        "Weight": 1.16,
        "Use": 2
    },
    {
        "Name": "Thraben Foulbloods",
        "OracleType": "Creature - Zombie Hound 3/2",
        "Mana": "2B",
        "Rarity": "Common",
        "Artist": "Deruchenko Alexander",
        "Edition": "Eldritch Moon",
        "CMC": 3,
        "Color": "Black",
        "Type": "Creature",
        "Weight": 1.16,
        "Use": 2
    },
    {
        "Name": "Midnight Scavengers",
        "OracleType": "Creature - Human Rogue 3/3",
        "Mana": "4B",
        "Rarity": "Common",
        "Artist": "Jason Felix",
        "Edition": "Eldritch Moon",
        "CMC": 5,
        "Color": "Black",
        "Type": "Creature",
        "Weight": 1.16,
        "Use": 2
    },
    {
        "Name": "Spontaneous Mutation",
        "OracleType": "Enchantment - Aura",
        "Mana": "U",
        "Rarity": "Common",
        "Artist": "Christopher Moeller",
        "Edition": "Eldritch Moon",
        "CMC": 1,
        "Color": "Blue",
        "Type": "Other",
        "Weight": 1.16,
        "Use": 2
    },
    {
        "Name": "Drag Under",
        "OracleType": "Sorcery",
        "Mana": "2U",
        "Rarity": "Common",
        "Artist": "Tianhua X",
        "Edition": "Eldritch Moon",
        "CMC": 3,
        "Color": "Blue",
        "Type": "Other",
        "Weight": 1.16,
        "Use": 2
    },
    {
        "Name": "Ingenious Skaab",
        "OracleType": "Creature - Zombie Horror 2/3",
        "Mana": "2U",
        "Rarity": "Common",
        "Artist": "Jesper Ejsing",
        "Edition": "Eldritch Moon",
        "CMC": 3,
        "Color": "Blue",
        "Type": "Creature",
        "Weight": 1.16,
        "Use": 2
    },
    {
        "Name": "Prey Upon",
        "OracleType": "Sorcery",
        "Mana": "G",
        "Rarity": "Common",
        "Artist": "Dave Kendall",
        "Edition": "Eldritch Moon",
        "CMC": 1,
        "Color": "Green",
        "Type": "Other",
        "Weight": 1.16,
        "Use": 2
    },
    {
        "Name": "Grapple with the Past",
        "OracleType": "Instant",
        "Mana": "1G",
        "Rarity": "Common",
        "Artist": "Howard Lyon",
        "Edition": "Eldritch Moon",
        "CMC": 2,
        "Color": "Green",
        "Type": "Other",
        "Weight": 1.16,
        "Use": 2
    },
    {
        "Name": "Ulvenwald Captive",
        "OracleType": "Creature - Werewolf Horror 1/2",
        "Mana": "1G",
        "Rarity": "Common",
        "Artist": "Chris Rahn",
        "Edition": "Eldritch Moon",
        "CMC": 2,
        "Color": "Green",
        "Type": "Creature",
        "Weight": 1.16,
        "Use": 2
    },
    {
        "Name": "Swift Spinner",
        "OracleType": "Creature - Spider 2/3",
        "Mana": "3G",
        "Rarity": "Common",
        "Artist": "Nils Hamm",
        "Edition": "Eldritch Moon",
        "CMC": 4,
        "Color": "Green",
        "Type": "Creature",
        "Weight": 1.16,
        "Use": 2
    },
    {
        "Name": "Backwoods Survivalists",
        "OracleType": "Creature - Human Warrior 4/3",
        "Mana": "3G",
        "Rarity": "Common",
        "Artist": "Chris Rallis",
        "Edition": "Eldritch Moon",
        "CMC": 4,
        "Color": "Green",
        "Type": "Creature",
        "Weight": 1.16,
        "Use": 2
    },
    {
        "Name": "Wolfkin Bond",
        "OracleType": "Enchantment - Aura",
        "Mana": "4G",
        "Rarity": "Common",
        "Artist": "Lindsey Look",
        "Edition": "Eldritch Moon",
        "CMC": 5,
        "Color": "Green",
        "Type": "Other",
        "Weight": 1.16,
        "Use": 2
    },
    {
        "Name": "Warped Landscape",
        "OracleType": "Land",
        "Mana": "",
        "Rarity": "Common",
        "Artist": "Cliff Childs",
        "Edition": "Shadows over Innistrad",
        "CMC": null,
        "Color": "Land",
        "Type": "Other",
        "Weight": 0.41,
        "Use": 2
    },
    {
        "Name": "Galvanic Bombardment",
        "OracleType": "Instant",
        "Mana": "R",
        "Rarity": "Common",
        "Artist": "Terese Nielsen",
        "Edition": "Eldritch Moon",
        "CMC": 1,
        "Color": "Red",
        "Type": "Other",
        "Weight": 1.16,
        "Use": 2
    },
    {
        "Name": "Falkenrath Reaver",
        "OracleType": "Creature - Vampire 2/2",
        "Mana": "1R",
        "Rarity": "Common",
        "Artist": "Daarken",
        "Edition": "Eldritch Moon",
        "CMC": 2,
        "Color": "Red",
        "Type": "Creature",
        "Weight": 1.16,
        "Use": 2
    },
    {
        "Name": "Thermo-Alchemist",
        "OracleType": "Creature - Human Shaman 0/3",
        "Mana": "1R",
        "Rarity": "Common",
        "Artist": "Raymond Swanland",
        "Edition": "Eldritch Moon",
        "CMC": 2,
        "Color": "Red",
        "Type": "Creature",
        "Weight": 1.16,
        "Use": 2
    },
    {
        "Name": "Brazen Wolves",
        "OracleType": "Creature - Wolf 2/3",
        "Mana": "2R",
        "Rarity": "Common",
        "Artist": "Nils Hamm",
        "Edition": "Eldritch Moon",
        "CMC": 3,
        "Color": "Red",
        "Type": "Creature",
        "Weight": 1.16,
        "Use": 2
    },
    {
        "Name": "Stensia Innkeeper",
        "OracleType": "Creature - Vampire 3/3",
        "Mana": "3R",
        "Rarity": "Common",
        "Artist": "Winona Nelson",
        "Edition": "Eldritch Moon",
        "CMC": 4,
        "Color": "Red",
        "Type": "Creature",
        "Weight": 1.16,
        "Use": 2
    },
    {
        "Name": "Alchemist's Greeting",
        "OracleType": "Sorcery",
        "Mana": "4R",
        "Rarity": "Common",
        "Artist": "Jakub Kasper",
        "Edition": "Eldritch Moon",
        "CMC": 5,
        "Color": "Red",
        "Type": "Other",
        "Weight": 1.16,
        "Use": 2
    },
    {
        "Name": "Vildin-Pack Outcast",
        "OracleType": "Creature - Werewolf Horror 4/4",
        "Mana": "4R",
        "Rarity": "Common",
        "Artist": "Jose Cabrera",
        "Edition": "Eldritch Moon",
        "CMC": 5,
        "Color": "Red",
        "Type": "Creature",
        "Weight": 1.16,
        "Use": 2
    },
    {
        "Name": "Sigardian Priest",
        "OracleType": "Creature - Human Cleric 1/2",
        "Mana": "1W",
        "Rarity": "Common",
        "Artist": "Terese Nielsen",
        "Edition": "Eldritch Moon",
        "CMC": 2,
        "Color": "White",
        "Type": "Creature",
        "Weight": 1.16,
        "Use": 2
    },
    {
        "Name": "Desperate Sentry",
        "OracleType": "Creature - Human Soldier 1/2",
        "Mana": "2W",
        "Rarity": "Common",
        "Artist": "Mathias Kollros",
        "Edition": "Eldritch Moon",
        "CMC": 3,
        "Color": "White",
        "Type": "Creature",
        "Weight": 1.16,
        "Use": 2
    },
    {
        "Name": "Choking Restraints",
        "OracleType": "Enchantment - Aura",
        "Mana": "2W",
        "Rarity": "Common",
        "Artist": "John Stanko",
        "Edition": "Eldritch Moon",
        "CMC": 3,
        "Color": "White",
        "Type": "Other",
        "Weight": 1.16,
        "Use": 2
    },
    {
        "Name": "Ironclad Slayer",
        "OracleType": "Creature - Human Warrior 3/2",
        "Mana": "2W",
        "Rarity": "Common",
        "Artist": "Ryan Pancoast",
        "Edition": "Eldritch Moon",
        "CMC": 3,
        "Color": "White",
        "Type": "Creature",
        "Weight": 1.16,
        "Use": 2
    },
    {
        "Name": "Steadfast Cathar",
        "OracleType": "Creature - Human Soldier 2/1",
        "Mana": "1W",
        "Rarity": "Common",
        "Artist": "Dan Scott",
        "Edition": "Eldritch Moon",
        "CMC": 2,
        "Color": "White",
        "Type": "Creature",
        "Weight": 1.16,
        "Use": 1
    },
    {
        "Name": "Spectral Reserves",
        "OracleType": "Sorcery",
        "Mana": "3W",
        "Rarity": "Common",
        "Artist": "Seb McKinnon",
        "Edition": "Eldritch Moon",
        "CMC": 4,
        "Color": "White",
        "Type": "Other",
        "Weight": 1.16,
        "Use": 1
    },
    {
        "Name": "Dead Weight",
        "OracleType": "Enchantment - Aura",
        "Mana": "B",
        "Rarity": "Common",
        "Artist": "Randy Gallegos",
        "Edition": "Shadows over Innistrad",
        "CMC": 1,
        "Color": "Black",
        "Type": "Other",
        "Weight": 0.41,
        "Use": 1
    },
    {
        "Name": "Olivia's Dragoon",
        "OracleType": "Creature - Vampire Berserker 2/2",
        "Mana": "1B",
        "Rarity": "Common",
        "Artist": "Chris Rallis",
        "Edition": "Eldritch Moon",
        "CMC": 2,
        "Color": "Black",
        "Type": "Creature",
        "Weight": 1.16,
        "Use": 1
    },
    {
        "Name": "Graf Rats",
        "OracleType": "Creature - Rat 2/1",
        "Mana": "1B",
        "Rarity": "Common",
        "Artist": "Jason Felix",
        "Edition": "Eldritch Moon",
        "CMC": 2,
        "Color": "Black",
        "Type": "Creature",
        "Weight": 1.16,
        "Use": 1
    },
    {
        "Name": "Succumb to Temptation",
        "OracleType": "Instant",
        "Mana": "1BB",
        "Rarity": "Common",
        "Artist": "Winona Nelson",
        "Edition": "Eldritch Moon",
        "CMC": 3,
        "Color": "Black",
        "Type": "Other",
        "Weight": 1.16,
        "Use": 1
    },
    {
        "Name": "Gavony Unhallowed",
        "OracleType": "Creature - Zombie 2/4",
        "Mana": "3B",
        "Rarity": "Common",
        "Artist": "Christopher Moeller",
        "Edition": "Eldritch Moon",
        "CMC": 4,
        "Color": "Black",
        "Type": "Creature",
        "Weight": 1.16,
        "Use": 1
    },
    {
        "Name": "Weirded Vampire",
        "OracleType": "Creature - Vampire Horror 3/3",
        "Mana": "3B",
        "Rarity": "Common",
        "Artist": "David Gaillet",
        "Edition": "Eldritch Moon",
        "CMC": 4,
        "Color": "Black",
        "Type": "Creature",
        "Weight": 1.16,
        "Use": 1
    },
    {
        "Name": "Certain Death",
        "OracleType": "Sorcery",
        "Mana": "5B",
        "Rarity": "Common",
        "Artist": "Kev Walker",
        "Edition": "Eldritch Moon",
        "CMC": 6,
        "Color": "Black",
        "Type": "Other",
        "Weight": 1.16,
        "Use": 1
    },
    {
        "Name": "Graf Harvest",
        "OracleType": "Enchantment",
        "Mana": "B",
        "Rarity": "Uncommon",
        "Artist": "Lake Hurwitz",
        "Edition": "Eldritch Moon",
        "CMC": 1,
        "Color": "Black",
        "Type": "Other",
        "Weight": 0.37,
        "Use": 1
    },
    {
        "Name": "Liliana's Elite",
        "OracleType": "Creature - Zombie 1/1",
        "Mana": "2B",
        "Rarity": "Uncommon",
        "Artist": "Deruchenko Alexander",
        "Edition": "Eldritch Moon",
        "CMC": 3,
        "Color": "Black",
        "Type": "Creature",
        "Weight": 0.37,
        "Use": 1
    },
    {
        "Name": "Murder",
        "OracleType": "Instant",
        "Mana": "1BB",
        "Rarity": "Uncommon",
        "Artist": "Tyler Jacobson",
        "Edition": "Eldritch Moon",
        "CMC": 3,
        "Color": "Black",
        "Type": "Other",
        "Weight": 0.37,
        "Use": 1
    },
    {
        "Name": "Accursed Witch",
        "OracleType": "Creature - Human Shaman 4/2",
        "Mana": "3B",
        "Rarity": "Uncommon",
        "Artist": "Wesley Burt",
        "Edition": "Shadows over Innistrad",
        "CMC": 4,
        "Color": "Black",
        "Type": "Creature",
        "Weight": 0.13,
        "Use": 1
    },
    {
        "Name": "Mausoleum Wanderer",
        "OracleType": "Creature - Spirit 1/1",
        "Mana": "U",
        "Rarity": "Rare",
        "Artist": "Kieran Yanner",
        "Edition": "Eldritch Moon",
        "CMC": 1,
        "Color": "Blue",
        "Type": "Creature",
        "Weight": 0.16,
        "Use": 1
    },
    {
        "Name": "Fogwalker",
        "OracleType": "Creature - Spirit 1/3",
        "Mana": "1U",
        "Rarity": "Common",
        "Artist": "Seb McKinnon",
        "Edition": "Eldritch Moon",
        "CMC": 2,
        "Color": "Blue",
        "Type": "Creature",
        "Weight": 1.16,
        "Use": 1
    },
    {
        "Name": "Tattered Haunter",
        "OracleType": "Creature - Spirit 2/1",
        "Mana": "1U",
        "Rarity": "Common",
        "Artist": "Nils Hamm",
        "Edition": "Eldritch Moon",
        "CMC": 2,
        "Color": "Blue",
        "Type": "Creature",
        "Weight": 1.16,
        "Use": 1
    },
    {
        "Name": "Furtive Homunculus",
        "OracleType": "Creature - Homunculus 2/1",
        "Mana": "1U",
        "Rarity": "Common",
        "Artist": "Wayne Reynolds",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Blue",
        "Type": "Creature",
        "Weight": 0.41,
        "Use": 1
    },
    {
        "Name": "Jace's Scrutiny",
        "OracleType": "Instant",
        "Mana": "1U",
        "Rarity": "Common",
        "Artist": "Slawomir Maniak",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Blue",
        "Type": "Other",
        "Weight": 0.41,
        "Use": 1
    },
    {
        "Name": "Just the Wind",
        "OracleType": "Instant",
        "Mana": "1U",
        "Rarity": "Common",
        "Artist": "Christopher Moeller",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Blue",
        "Type": "Other",
        "Weight": 0.41,
        "Use": 1
    },
    {
        "Name": "Vessel of Paramnesia",
        "OracleType": "Enchantment",
        "Mana": "1U",
        "Rarity": "Common",
        "Artist": "Kieran Yanner",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Blue",
        "Type": "Other",
        "Weight": 0.41,
        "Use": 1
    },
    {
        "Name": "Imprisoned in the Moon",
        "OracleType": "Enchantment - Aura",
        "Mana": "2U",
        "Rarity": "Rare",
        "Artist": "Ryan Alexander Lee",
        "Edition": "Eldritch Moon",
        "CMC": 3,
        "Color": "Blue",
        "Type": "Other",
        "Weight": 0.16,
        "Use": 1
    },
    {
        "Name": "Convolute",
        "OracleType": "Instant",
        "Mana": "2U",
        "Rarity": "Common",
        "Artist": "Viktor Titov",
        "Edition": "Eldritch Moon",
        "CMC": 3,
        "Color": "Blue",
        "Type": "Other",
        "Weight": 1.16,
        "Use": 1
    },
    {
        "Name": "Exultant Cultist",
        "OracleType": "Creature - Human Wizard 2/2",
        "Mana": "2U",
        "Rarity": "Common",
        "Artist": "Joseph Meehan",
        "Edition": "Eldritch Moon",
        "CMC": 3,
        "Color": "Blue",
        "Type": "Creature",
        "Weight": 1.16,
        "Use": 1
    },
    {
        "Name": "Grizzled Angler",
        "OracleType": "Creature - Human 2/3",
        "Mana": "2U",
        "Rarity": "Uncommon",
        "Artist": "Kev Walker",
        "Edition": "Eldritch Moon",
        "CMC": 3,
        "Color": "Blue",
        "Type": "Creature",
        "Weight": 0.37,
        "Use": 1
    },
    {
        "Name": "Catalog",
        "OracleType": "Instant",
        "Mana": "2U",
        "Rarity": "Common",
        "Artist": "Johannes Voss",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "Blue",
        "Type": "Other",
        "Weight": 0.41,
        "Use": 1
    },
    {
        "Name": "Deny Existence",
        "OracleType": "Instant",
        "Mana": "2U",
        "Rarity": "Common",
        "Artist": "Christopher Moeller",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "Blue",
        "Type": "Other",
        "Weight": 0.41,
        "Use": 1
    },
    {
        "Name": "Laboratory Brute",
        "OracleType": "Creature - Zombie Horror 3/3",
        "Mana": "3U",
        "Rarity": "Common",
        "Artist": "Yeong-Hao Han",
        "Edition": "Eldritch Moon",
        "CMC": 4,
        "Color": "Blue",
        "Type": "Creature",
        "Weight": 1.16,
        "Use": 1
    },
    {
        "Name": "Enlightened Maniac",
        "OracleType": "Creature - Human 0/2",
        "Mana": "3U",
        "Rarity": "Common",
        "Artist": "Jaime Jones",
        "Edition": "Eldritch Moon",
        "CMC": 4,
        "Color": "Blue",
        "Type": "Creature",
        "Weight": 1.16,
        "Use": 1
    },
    {
        "Name": "Identity Thief",
        "OracleType": "Creature - Shapeshifter 0/3",
        "Mana": "2UU",
        "Rarity": "Rare",
        "Artist": "Magali Villeneuve",
        "Edition": "Eldritch Moon",
        "CMC": 4,
        "Color": "Blue",
        "Type": "Creature",
        "Weight": 0.16,
        "Use": 1
    },
    {
        "Name": "Welcome to the Fold",
        "OracleType": "Sorcery",
        "Mana": "2UU",
        "Rarity": "Rare",
        "Artist": "David Palumbo",
        "Edition": "Shadows over Innistrad",
        "CMC": 4,
        "Color": "Blue",
        "Type": "Other",
        "Weight": 0.06,
        "Use": 1
    },
    {
        "Name": "Sleep Paralysis",
        "OracleType": "Enchantment - Aura",
        "Mana": "3U",
        "Rarity": "Common",
        "Artist": "Josu Hernaiz",
        "Edition": "Shadows over Innistrad",
        "CMC": 4,
        "Color": "Blue",
        "Type": "Other",
        "Weight": 0.41,
        "Use": 1
    },
    {
        "Name": "Advanced Stitchwing",
        "OracleType": "Creature - Zombie Horror 3/4",
        "Mana": "3UU",
        "Rarity": "Uncommon",
        "Artist": "Johann Bodin",
        "Edition": "Eldritch Moon",
        "CMC": 5,
        "Color": "Blue",
        "Type": "Creature",
        "Weight": 0.37,
        "Use": 1
    },
    {
        "Name": "Stormrider Spirit",
        "OracleType": "Creature - Spirit 3/3",
        "Mana": "4U",
        "Rarity": "Common",
        "Artist": "Lake Hurwitz",
        "Edition": "Shadows over Innistrad",
        "CMC": 5,
        "Color": "Blue",
        "Type": "Creature",
        "Weight": 0.41,
        "Use": 1
    },
    {
        "Name": "Scour the Laboratory",
        "OracleType": "Instant",
        "Mana": "4UU",
        "Rarity": "Uncommon",
        "Artist": "Greg Opalinski",
        "Edition": "Eldritch Moon",
        "CMC": 6,
        "Color": "Blue",
        "Type": "Other",
        "Weight": 0.37,
        "Use": 1
    },
    {
        "Name": "Terrarion",
        "OracleType": "Artifact",
        "Mana": "1",
        "Rarity": "Common",
        "Artist": "Titus Lunter",
        "Edition": "Eldritch Moon",
        "CMC": 1,
        "Color": "Colorless",
        "Type": "Other",
        "Weight": 1.16,
        "Use": 1
    },
    {
        "Name": "Explosive Apparatus",
        "OracleType": "Artifact",
        "Mana": "1",
        "Rarity": "Common",
        "Artist": "Lindsey Look",
        "Edition": "Shadows over Innistrad",
        "CMC": 1,
        "Color": "Colorless",
        "Type": "Other",
        "Weight": 0.41,
        "Use": 1
    },
    {
        "Name": "Cultist's Staff",
        "OracleType": "Artifact - Equipment",
        "Mana": "2",
        "Rarity": "Common",
        "Artist": "Adam Paquette",
        "Edition": "Eldritch Moon",
        "CMC": 2,
        "Color": "Colorless",
        "Type": "Other",
        "Weight": 1.16,
        "Use": 1
    },
    {
        "Name": "Field Creeper",
        "OracleType": "Artifact Creature - Scarecrow 2/1",
        "Mana": "2",
        "Rarity": "Common",
        "Artist": "Anthony Palumbo",
        "Edition": "Eldritch Moon",
        "CMC": 2,
        "Color": "Colorless",
        "Type": "Creature",
        "Weight": 1.16,
        "Use": 1
    },
    {
        "Name": "True-Faith Censer",
        "OracleType": "Artifact - Equipment",
        "Mana": "2",
        "Rarity": "Common",
        "Artist": "Christine Choi",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Colorless",
        "Type": "Other",
        "Weight": 0.41,
        "Use": 1
    },
    {
        "Name": "Eternal Scourge",
        "OracleType": "Creature - Eldrazi Horror 3/3",
        "Mana": "3",
        "Rarity": "Rare",
        "Artist": "Winona Nelson",
        "Edition": "Eldritch Moon",
        "CMC": 3,
        "Color": "Colorless",
        "Type": "Creature",
        "Weight": 0.16,
        "Use": 1
    },
    {
        "Name": "Cryptolith Fragment",
        "OracleType": "Artifact",
        "Mana": "3",
        "Rarity": "Uncommon",
        "Artist": "John Avon",
        "Edition": "Eldritch Moon",
        "CMC": 3,
        "Color": "Colorless",
        "Type": "Other",
        "Weight": 0.37,
        "Use": 1
    },
    {
        "Name": "Wretched Gryff",
        "OracleType": "Creature - Eldrazi Hippogriff 3/4",
        "Mana": "7",
        "Rarity": "Common",
        "Artist": "Darek Zabrocki",
        "Edition": "Eldritch Moon",
        "CMC": 7,
        "Color": "Colorless",
        "Type": "Creature",
        "Weight": 1.16,
        "Use": 1
    },
    {
        "Name": "Distended Mindbender",
        "OracleType": "Creature - Eldrazi Insect 5/5",
        "Mana": "8",
        "Rarity": "Rare",
        "Artist": "Yohann Schepacz",
        "Edition": "Eldritch Moon",
        "CMC": 8,
        "Color": "Colorless",
        "Type": "Creature",
        "Weight": 0.16,
        "Use": 1
    },
    {
        "Name": "Lashweed Lurker",
        "OracleType": "Creature - Eldrazi Horror 5/4",
        "Mana": "8",
        "Rarity": "Uncommon",
        "Artist": "Igor Kieryluk",
        "Edition": "Eldritch Moon",
        "CMC": 8,
        "Color": "Colorless",
        "Type": "Creature",
        "Weight": 0.37,
        "Use": 1
    },
    {
        "Name": "It of the Horrid Swarm",
        "OracleType": "Creature - Eldrazi Insect 4/4",
        "Mana": "8",
        "Rarity": "Common",
        "Artist": "Jason Felix",
        "Edition": "Eldritch Moon",
        "CMC": 8,
        "Color": "Colorless",
        "Type": "Creature",
        "Weight": 1.16,
        "Use": 1
    },
    {
        "Name": "Crossroads Consecrator",
        "OracleType": "Creature - Human Cleric 1/2",
        "Mana": "G",
        "Rarity": "Common",
        "Artist": "David Gaillet",
        "Edition": "Eldritch Moon",
        "CMC": 1,
        "Color": "Green",
        "Type": "Creature",
        "Weight": 1.16,
        "Use": 1
    },
    {
        "Name": "Gnarlwood Dryad",
        "OracleType": "Creature - Dryad Horror 1/1",
        "Mana": "G",
        "Rarity": "Uncommon",
        "Artist": "Raymond Swanland",
        "Edition": "Eldritch Moon",
        "CMC": 1,
        "Color": "Green",
        "Type": "Creature",
        "Weight": 0.37,
        "Use": 1
    },
    {
        "Name": "Vessel of Nascency",
        "OracleType": "Enchantment",
        "Mana": "G",
        "Rarity": "Common",
        "Artist": "Kieran Yanner",
        "Edition": "Shadows over Innistrad",
        "CMC": 1,
        "Color": "Green",
        "Type": "Other",
        "Weight": 0.41,
        "Use": 1
    },
    {
        "Name": "Hamlet Captain",
        "OracleType": "Creature - Human Warrior 2/2",
        "Mana": "1G",
        "Rarity": "Uncommon",
        "Artist": "Wayne Reynolds",
        "Edition": "Eldritch Moon",
        "CMC": 2,
        "Color": "Green",
        "Type": "Creature",
        "Weight": 0.37,
        "Use": 1
    },
    {
        "Name": "Waxing Moon",
        "OracleType": "Instant",
        "Mana": "1G",
        "Rarity": "Common",
        "Artist": "Adam Paquette",
        "Edition": "Eldritch Moon",
        "CMC": 2,
        "Color": "Green",
        "Type": "Other",
        "Weight": 1.16,
        "Use": 1
    },
    {
        "Name": "Primal Druid",
        "OracleType": "Creature - Human Druid 0/3",
        "Mana": "1G",
        "Rarity": "Common",
        "Artist": "Tomasz Jedruszek",
        "Edition": "Eldritch Moon",
        "CMC": 2,
        "Color": "Green",
        "Type": "Creature",
        "Weight": 1.16,
        "Use": 1
    },
    {
        "Name": "Rabid Bite",
        "OracleType": "Sorcery",
        "Mana": "1G",
        "Rarity": "Common",
        "Artist": "Karl Kopinski",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Green",
        "Type": "Other",
        "Weight": 0.41,
        "Use": 1
    },
    {
        "Name": "Clear Shot",
        "OracleType": "Instant",
        "Mana": "2G",
        "Rarity": "Uncommon",
        "Artist": "Craig J Spearing",
        "Edition": "Eldritch Moon",
        "CMC": 3,
        "Color": "Green",
        "Type": "Other",
        "Weight": 0.37,
        "Use": 1
    },
    {
        "Name": "Bloodbriar",
        "OracleType": "Creature - Plant Elemental 2/3",
        "Mana": "2G",
        "Rarity": "Common",
        "Artist": "Tomasz Jedruszek",
        "Edition": "Eldritch Moon",
        "CMC": 3,
        "Color": "Green",
        "Type": "Creature",
        "Weight": 1.16,
        "Use": 1
    },
    {
        "Name": "Woodcutter's Grit",
        "OracleType": "Instant",
        "Mana": "2G",
        "Rarity": "Common",
        "Artist": "Anthony Palumbo",
        "Edition": "Eldritch Moon",
        "CMC": 3,
        "Color": "Green",
        "Type": "Other",
        "Weight": 1.16,
        "Use": 1
    },
    {
        "Name": "Spirit of the Hunt",
        "OracleType": "Creature - Wolf Spirit 3/3",
        "Mana": "1GG",
        "Rarity": "Rare",
        "Artist": "Bastien L. Deharme",
        "Edition": "Eldritch Moon",
        "CMC": 3,
        "Color": "Green",
        "Type": "Creature",
        "Weight": 0.16,
        "Use": 1
    },
    {
        "Name": "Byway Courier",
        "OracleType": "Creature - Human Scout 3/2",
        "Mana": "2G",
        "Rarity": "Common",
        "Artist": "Zoltan Boros",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "Green",
        "Type": "Creature",
        "Weight": 0.41,
        "Use": 1
    },
    {
        "Name": "Tangleclaw Werewolf",
        "OracleType": "Creature - Werewolf Horror 2/4",
        "Mana": "2GG",
        "Rarity": "Uncommon",
        "Artist": "Steven Belledin",
        "Edition": "Eldritch Moon",
        "CMC": 4,
        "Color": "Green",
        "Type": "Creature",
        "Weight": 0.37,
        "Use": 1
    },
    {
        "Name": "Somberwald Stag",
        "OracleType": "Creature - Elk 4/3",
        "Mana": "3GG",
        "Rarity": "Uncommon",
        "Artist": "Lake Hurwitz",
        "Edition": "Eldritch Moon",
        "CMC": 5,
        "Color": "Green",
        "Type": "Creature",
        "Weight": 0.37,
        "Use": 1
    },
    {
        "Name": "Ulvenwald Observer",
        "OracleType": "Creature - Treefolk 6/6",
        "Mana": "4GG",
        "Rarity": "Rare",
        "Artist": "Jaime Jones",
        "Edition": "Eldritch Moon",
        "CMC": 6,
        "Color": "Green",
        "Type": "Creature",
        "Weight": 0.16,
        "Use": 1
    },
    {
        "Name": "Ride Down",
        "OracleType": "Instant",
        "Mana": "WR",
        "Rarity": "Uncommon",
        "Artist": "David Gaillet",
        "Edition": "Eldritch Moon",
        "CMC": 2,
        "Color": "Red White",
        "Type": "Other",
        "Weight": 0.37,
        "Use": 1
    },
    {
        "Name": "Mournwillow",
        "OracleType": "Creature - Plant Skeleton 3/2",
        "Mana": "1BG",
        "Rarity": "Uncommon",
        "Artist": "Jeff Simpson",
        "Edition": "Eldritch Moon",
        "CMC": 3,
        "Color": "Black Green",
        "Type": "Creature",
        "Weight": 0.37,
        "Use": 1
    },
    {
        "Name": "Mercurial Geists",
        "OracleType": "Creature - Spirit 1/3",
        "Mana": "2UR",
        "Rarity": "Uncommon",
        "Artist": "Lake Hurwitz",
        "Edition": "Eldritch Moon",
        "CMC": 4,
        "Color": "Blue Red",
        "Type": "Creature",
        "Weight": 0.37,
        "Use": 1
    },
    {
        "Name": "Campaign of Vengeance",
        "OracleType": "Enchantment",
        "Mana": "3WB",
        "Rarity": "Uncommon",
        "Artist": "Igor Kieryluk",
        "Edition": "Eldritch Moon",
        "CMC": 5,
        "Color": "Black White",
        "Type": "Other",
        "Weight": 0.37,
        "Use": 1
    },
    {
        "Name": "Borrowed Hostility",
        "OracleType": "Instant",
        "Mana": "R",
        "Rarity": "Common",
        "Artist": "Volkan Baga",
        "Edition": "Eldritch Moon",
        "CMC": 1,
        "Color": "Red",
        "Type": "Other",
        "Weight": 1.16,
        "Use": 1
    },
    {
        "Name": "Falkenrath Gorger",
        "OracleType": "Creature - Vampire Berserker 2/1",
        "Mana": "R",
        "Rarity": "Rare",
        "Artist": "Anna Steinbauer",
        "Edition": "Shadows over Innistrad",
        "CMC": 1,
        "Color": "Red",
        "Type": "Creature",
        "Weight": 0.06,
        "Use": 1
    },
    {
        "Name": "Lightning Axe",
        "OracleType": "Instant",
        "Mana": "R",
        "Rarity": "Uncommon",
        "Artist": "Jason A. Engle",
        "Edition": "Shadows over Innistrad",
        "CMC": 1,
        "Color": "Red",
        "Type": "Other",
        "Weight": 0.13,
        "Use": 1
    },
    {
        "Name": "Incendiary Flow",
        "OracleType": "Sorcery",
        "Mana": "1R",
        "Rarity": "Uncommon",
        "Artist": "Raymond Swanland",
        "Edition": "Eldritch Moon",
        "CMC": 2,
        "Color": "Red",
        "Type": "Other",
        "Weight": 0.37,
        "Use": 1
    },
    {
        "Name": "Tormenting Voice",
        "OracleType": "Sorcery",
        "Mana": "1R",
        "Rarity": "Common",
        "Artist": "Dan Scott",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Red",
        "Type": "Other",
        "Weight": 0.41,
        "Use": 1
    },
    {
        "Name": "Senseless Rage",
        "OracleType": "Enchantment - Aura",
        "Mana": "1R",
        "Rarity": "Common",
        "Artist": "Raymond Swanland",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Red",
        "Type": "Other",
        "Weight": 0.41,
        "Use": 1
    },
    {
        "Name": "Savage Alliance",
        "OracleType": "Instant",
        "Mana": "2R",
        "Rarity": "Uncommon",
        "Artist": "Johann Bodin",
        "Edition": "Eldritch Moon",
        "CMC": 3,
        "Color": "Red",
        "Type": "Other",
        "Weight": 0.37,
        "Use": 1
    },
    {
        "Name": "Conduit of Storms",
        "OracleType": "Creature - Werewolf Horror 2/3",
        "Mana": "2R",
        "Rarity": "Uncommon",
        "Artist": "Raymond Swanland",
        "Edition": "Eldritch Moon",
        "CMC": 3,
        "Color": "Red",
        "Type": "Creature",
        "Weight": 0.37,
        "Use": 1
    },
    {
        "Name": "Make Mischief",
        "OracleType": "Sorcery",
        "Mana": "2R",
        "Rarity": "Common",
        "Artist": "Ben Maier",
        "Edition": "Eldritch Moon",
        "CMC": 3,
        "Color": "Red",
        "Type": "Other",
        "Weight": 1.16,
        "Use": 1
    },
    {
        "Name": "Stensia Banquet",
        "OracleType": "Sorcery",
        "Mana": "2R",
        "Rarity": "Common",
        "Artist": "Greg Opalinski",
        "Edition": "Eldritch Moon",
        "CMC": 3,
        "Color": "Red",
        "Type": "Other",
        "Weight": 1.16,
        "Use": 1
    },
    {
        "Name": "Fiery Temper",
        "OracleType": "Instant",
        "Mana": "1RR",
        "Rarity": "Common",
        "Artist": "Johannes Voss",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "Red",
        "Type": "Other",
        "Weight": 0.41,
        "Use": 1
    },
    {
        "Name": "Pyre Hound",
        "OracleType": "Creature - Elemental Hound 2/3",
        "Mana": "3R",
        "Rarity": "Common",
        "Artist": "Jama Jurabaev",
        "Edition": "Shadows over Innistrad",
        "CMC": 4,
        "Color": "Red",
        "Type": "Creature",
        "Weight": 0.41,
        "Use": 1
    },
    {
        "Name": "Voldaren Duelist",
        "OracleType": "Creature - Vampire Warrior 3/2",
        "Mana": "3R",
        "Rarity": "Common",
        "Artist": "Jason Rainville",
        "Edition": "Shadows over Innistrad",
        "CMC": 4,
        "Color": "Red",
        "Type": "Creature",
        "Weight": 0.41,
        "Use": 1
    },
    {
        "Name": "Thraben Standard Bearer",
        "OracleType": "Creature - Human Soldier 1/1",
        "Mana": "W",
        "Rarity": "Common",
        "Artist": "Volkan Baga",
        "Edition": "Eldritch Moon",
        "CMC": 1,
        "Color": "White",
        "Type": "Creature",
        "Weight": 1.16,
        "Use": 1
    },
    {
        "Name": "Strength of Arms",
        "OracleType": "Instant",
        "Mana": "W",
        "Rarity": "Common",
        "Artist": "John Stanko",
        "Edition": "Shadows over Innistrad",
        "CMC": 1,
        "Color": "White",
        "Type": "Other",
        "Weight": 0.41,
        "Use": 1
    },
    {
        "Name": "Thraben Inspector",
        "OracleType": "Creature - Human Soldier 1/2",
        "Mana": "W",
        "Rarity": "Common",
        "Artist": "Matt Stewart",
        "Edition": "Shadows over Innistrad",
        "CMC": 1,
        "Color": "White",
        "Type": "Creature",
        "Weight": 0.41,
        "Use": 1
    },
    {
        "Name": "Long Road Home",
        "OracleType": "Instant",
        "Mana": "1W",
        "Rarity": "Uncommon",
        "Artist": "Sidharth Chaturvedi",
        "Edition": "Eldritch Moon",
        "CMC": 2,
        "Color": "White",
        "Type": "Other",
        "Weight": 0.37,
        "Use": 1
    },
    {
        "Name": "Repel the Abominable",
        "OracleType": "Instant",
        "Mana": "1W",
        "Rarity": "Uncommon",
        "Artist": "Dan Scott",
        "Edition": "Eldritch Moon",
        "CMC": 2,
        "Color": "White",
        "Type": "Other",
        "Weight": 0.37,
        "Use": 1
    },
    {
        "Name": "Guardian of Pilgrims",
        "OracleType": "Creature - Spirit Cleric 2/2",
        "Mana": "1W",
        "Rarity": "Common",
        "Artist": "Noah Bradley",
        "Edition": "Eldritch Moon",
        "CMC": 2,
        "Color": "White",
        "Type": "Creature",
        "Weight": 1.16,
        "Use": 1
    },
    {
        "Name": "Devilthorn Fox",
        "OracleType": "Creature - Fox 3/1",
        "Mana": "1W",
        "Rarity": "Common",
        "Artist": "Filip Burburan",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "White",
        "Type": "Creature",
        "Weight": 0.41,
        "Use": 1
    },
    {
        "Name": "Puncturing Light",
        "OracleType": "Instant",
        "Mana": "1W",
        "Rarity": "Common",
        "Artist": "Greg Staples",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "White",
        "Type": "Other",
        "Weight": 0.41,
        "Use": 1
    },
    {
        "Name": "Moorland Drifter",
        "OracleType": "Creature - Spirit 2/2",
        "Mana": "1W",
        "Rarity": "Common",
        "Artist": "Ryan Yee",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "White",
        "Type": "Creature",
        "Weight": 0.41,
        "Use": 1
    },
    {
        "Name": "Collective Effort",
        "OracleType": "Sorcery",
        "Mana": "1WW",
        "Rarity": "Rare",
        "Artist": "Eric Deschamps",
        "Edition": "Eldritch Moon",
        "CMC": 3,
        "Color": "White",
        "Type": "Other",
        "Weight": 0.16,
        "Use": 1
    },
    {
        "Name": "Borrowed Grace",
        "OracleType": "Instant",
        "Mana": "2W",
        "Rarity": "Common",
        "Artist": "Volkan Baga",
        "Edition": "Eldritch Moon",
        "CMC": 3,
        "Color": "White",
        "Type": "Other",
        "Weight": 1.16,
        "Use": 1
    },
    {
        "Name": "Dawn Gryff",
        "OracleType": "Creature - Hippogriff 2/2",
        "Mana": "2W",
        "Rarity": "Common",
        "Artist": "Christine Choi",
        "Edition": "Eldritch Moon",
        "CMC": 3,
        "Color": "White",
        "Type": "Creature",
        "Weight": 1.16,
        "Use": 1
    },
    {
        "Name": "Dauntless Cathar",
        "OracleType": "Creature - Human Soldier 3/2",
        "Mana": "2W",
        "Rarity": "Common",
        "Artist": "Zack Stella",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "White",
        "Type": "Creature",
        "Weight": 0.41,
        "Use": 1
    },
    {
        "Name": "Faith Unbroken",
        "OracleType": "Enchantment - Aura",
        "Mana": "3W",
        "Rarity": "Uncommon",
        "Artist": "Kev Walker",
        "Edition": "Eldritch Moon",
        "CMC": 4,
        "Color": "White",
        "Type": "Other",
        "Weight": 0.37,
        "Use": 1
    },
    {
        "Name": "Fiend Binder",
        "OracleType": "Creature - Human Soldier 3/2",
        "Mana": "3W",
        "Rarity": "Common",
        "Artist": "David Gaillet",
        "Edition": "Eldritch Moon",
        "CMC": 4,
        "Color": "White",
        "Type": "Creature",
        "Weight": 1.16,
        "Use": 1
    },
    {
        "Name": "Apothecary Geist",
        "OracleType": "Creature - Spirit 2/3",
        "Mana": "3W",
        "Rarity": "Common",
        "Artist": "Franz Vohwinkel",
        "Edition": "Shadows over Innistrad",
        "CMC": 4,
        "Color": "White",
        "Type": "Creature",
        "Weight": 0.41,
        "Use": 1
    },
    {
        "Name": "Humble the Brute",
        "OracleType": "Instant",
        "Mana": "4W",
        "Rarity": "Uncommon",
        "Artist": "Daarken",
        "Edition": "Shadows over Innistrad",
        "CMC": 5,
        "Color": "White",
        "Type": "Other",
        "Weight": 0.13,
        "Use": 1
    },
    {
        "Name": "Vampire Cutthroat",
        "OracleType": "Creature - Vampire Rogue 1/1",
        "Mana": "B",
        "Rarity": "Uncommon",
        "Artist": "Matt Stewart",
        "Edition": "Eldritch Moon",
        "CMC": 1,
        "Color": "Black",
        "Type": "Creature",
        "Weight": 0.37,
        "Use": 1
    },
    {
        "Name": "Stromkirk Condemned",
        "OracleType": "Creature - Vampire Horror 2/2",
        "Mana": "BB",
        "Rarity": "Rare",
        "Artist": "Magali Villeneuve",
        "Edition": "Eldritch Moon",
        "CMC": 2,
        "Color": "Black",
        "Type": "Creature",
        "Weight": 0.16,
        "Use": 1
    },
    {
        "Name": "Cemetery Recruitment",
        "OracleType": "Sorcery",
        "Mana": "1B",
        "Rarity": "Common",
        "Artist": "Kieran Yanner",
        "Edition": "Eldritch Moon",
        "CMC": 2,
        "Color": "Black",
        "Type": "Other",
        "Weight": 1.16,
        "Use": 1
    },
    {
        "Name": "Wailing Ghoul",
        "OracleType": "Creature - Zombie 1/3",
        "Mana": "1B",
        "Rarity": "Common",
        "Artist": "Svetlin Velinov",
        "Edition": "Eldritch Moon",
        "CMC": 2,
        "Color": "Black",
        "Type": "Creature",
        "Weight": 1.16,
        "Use": 1
    },
    {
        "Name": "Grotesque Mutation",
        "OracleType": "Instant",
        "Mana": "1B",
        "Rarity": "Common",
        "Artist": "Dan Scott",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Black",
        "Type": "Other",
        "Weight": 0.41,
        "Use": 1
    },
    {
        "Name": "Murderous Compulsion",
        "OracleType": "Sorcery",
        "Mana": "1B",
        "Rarity": "Common",
        "Artist": "David Palumbo",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Black",
        "Type": "Other",
        "Weight": 0.41,
        "Use": 1
    },
    {
        "Name": "Macabre Waltz",
        "OracleType": "Sorcery",
        "Mana": "1B",
        "Rarity": "Common",
        "Artist": "Willian Murai",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Black",
        "Type": "Other",
        "Weight": 0.41,
        "Use": 1
    },
    {
        "Name": "Skirsdag Supplicant",
        "OracleType": "Creature - Human Cleric 2/3",
        "Mana": "2B",
        "Rarity": "Common",
        "Artist": "Anastasia Ovchinnikova",
        "Edition": "Eldritch Moon",
        "CMC": 3,
        "Color": "Black",
        "Type": "Creature",
        "Weight": 1.16,
        "Use": 1
    },
    {
        "Name": "Farbog Revenant",
        "OracleType": "Creature - Spirit 1/3",
        "Mana": "2B",
        "Rarity": "Common",
        "Artist": "Min Yum",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "Black",
        "Type": "Creature",
        "Weight": 0.41,
        "Use": 1
    },
    {
        "Name": "Haunted Dead",
        "OracleType": "Creature - Zombie 2/2",
        "Mana": "3B",
        "Rarity": "Uncommon",
        "Artist": "Lake Hurwitz",
        "Edition": "Eldritch Moon",
        "CMC": 4,
        "Color": "Black",
        "Type": "Creature",
        "Weight": 0.37,
        "Use": 1
    },
    {
        "Name": "Stallion of Ashmouth",
        "OracleType": "Creature - Nightmare Horse 3/3",
        "Mana": "3B",
        "Rarity": "Common",
        "Artist": "Chris Rahn",
        "Edition": "Shadows over Innistrad",
        "CMC": 4,
        "Color": "Black",
        "Type": "Creature",
        "Weight": 0.41,
        "Use": 1
    },
    {
        "Name": "Rise from the Grave",
        "OracleType": "Sorcery",
        "Mana": "4B",
        "Rarity": "Uncommon",
        "Artist": "Kieran Yanner",
        "Edition": "Eldritch Moon",
        "CMC": 5,
        "Color": "Black",
        "Type": "Other",
        "Weight": 0.37,
        "Use": 1
    },
    {
        "Name": "Throttle",
        "OracleType": "Instant",
        "Mana": "4B",
        "Rarity": "Common",
        "Artist": "Raymond Swanland",
        "Edition": "Shadows over Innistrad",
        "CMC": 5,
        "Color": "Black",
        "Type": "Other",
        "Weight": 0.41,
        "Use": 1
    },
    {
        "Name": "Dusk Feaster",
        "OracleType": "Creature - Vampire 4/5",
        "Mana": "5BB",
        "Rarity": "Uncommon",
        "Artist": "Anastasia Ovchinnikova",
        "Edition": "Eldritch Moon",
        "CMC": 7,
        "Color": "Black",
        "Type": "Creature",
        "Weight": 0.37,
        "Use": 1
    },
    {
        "Name": "Unsubstantiate",
        "OracleType": "Instant",
        "Mana": "1U",
        "Rarity": "Uncommon",
        "Artist": "Victor Adame Minguez",
        "Edition": "Eldritch Moon",
        "CMC": 2,
        "Color": "Blue",
        "Type": "Other",
        "Weight": 0.37,
        "Use": 1
    },
    {
        "Name": "Erdwal Illuminator",
        "OracleType": "Creature - Spirit 1/3",
        "Mana": "1U",
        "Rarity": "Uncommon",
        "Artist": "Seb McKinnon",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Blue",
        "Type": "Creature",
        "Weight": 0.13,
        "Use": 1
    },
    {
        "Name": "Stitched Mangler",
        "OracleType": "Creature - Zombie Horror 2/3",
        "Mana": "2U",
        "Rarity": "Common",
        "Artist": "Dave Kendall",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "Blue",
        "Type": "Creature",
        "Weight": 0.41,
        "Use": 1
    },
    {
        "Name": "Wicker Witch",
        "OracleType": "Artifact Creature - Scarecrow 3/1",
        "Mana": "3",
        "Rarity": "Common",
        "Artist": "Izzy",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "Colorless",
        "Type": "Creature",
        "Weight": 0.41,
        "Use": 1
    },
    {
        "Name": "Geist-Fueled Scarecrow",
        "OracleType": "Artifact Creature - Scarecrow 4/4",
        "Mana": "4",
        "Rarity": "Uncommon",
        "Artist": "Adam Paquette",
        "Edition": "Eldritch Moon",
        "CMC": 4,
        "Color": "Colorless",
        "Type": "Creature",
        "Weight": 0.37,
        "Use": 1
    },
    {
        "Name": "Hermit of the Natterknolls",
        "OracleType": "Creature - Human Werewolf 2/3",
        "Mana": "2G",
        "Rarity": "Uncommon",
        "Artist": "Dan Scott",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "Green",
        "Type": "Creature",
        "Weight": 0.13,
        "Use": 1
    },
    {
        "Name": "Might Beyond Reason",
        "OracleType": "Instant",
        "Mana": "3G",
        "Rarity": "Common",
        "Artist": "Craig J Spearing",
        "Edition": "Shadows over Innistrad",
        "CMC": 4,
        "Color": "Green",
        "Type": "Other",
        "Weight": 0.41,
        "Use": 1
    },
    {
        "Name": "Otherworldly Outburst",
        "OracleType": "Instant",
        "Mana": "R",
        "Rarity": "Common",
        "Artist": "Kieran Yanner",
        "Edition": "Eldritch Moon",
        "CMC": 1,
        "Color": "Red",
        "Type": "Other",
        "Weight": 1.16,
        "Use": 1
    },
    {
        "Name": "Furyblade Vampire",
        "OracleType": "Creature - Vampire Berserker 1/2",
        "Mana": "1R",
        "Rarity": "Uncommon",
        "Artist": "Lius Lasahido",
        "Edition": "Eldritch Moon",
        "CMC": 2,
        "Color": "Red",
        "Type": "Creature",
        "Weight": 0.37,
        "Use": 1
    },
    {
        "Name": "Weaver of Lightning",
        "OracleType": "Creature - Human Shaman 1/4",
        "Mana": "2R",
        "Rarity": "Uncommon",
        "Artist": "John Stanko",
        "Edition": "Eldritch Moon",
        "CMC": 3,
        "Color": "Red",
        "Type": "Creature",
        "Weight": 0.37,
        "Use": 1
    },
    {
        "Name": "Inner Struggle",
        "OracleType": "Instant",
        "Mana": "3R",
        "Rarity": "Uncommon",
        "Artist": "Mathias Kollros",
        "Edition": "Shadows over Innistrad",
        "CMC": 4,
        "Color": "Red",
        "Type": "Other",
        "Weight": 0.13,
        "Use": 1
    },
    {
        "Name": "Burn from Within",
        "OracleType": "Sorcery",
        "Mana": "XR",
        "Rarity": "Rare",
        "Artist": "James Ryman",
        "Edition": "Shadows over Innistrad",
        "CMC": 7,
        "Color": "Red",
        "Type": "Other",
        "Weight": 0.06,
        "Use": 1
    },
    {
        "Name": "Extricator of Sin",
        "OracleType": "Creature - Human Cleric 0/3",
        "Mana": "2W",
        "Rarity": "Uncommon",
        "Artist": "Craig J Spearing",
        "Edition": "Eldritch Moon",
        "CMC": 3,
        "Color": "White",
        "Type": "Creature",
        "Weight": 0.37,
        "Use": 1
    },
    {
        "Name": "Tenacity",
        "OracleType": "Instant",
        "Mana": "3W",
        "Rarity": "Uncommon",
        "Artist": "Zoltan Boros",
        "Edition": "Shadows over Innistrad",
        "CMC": 4,
        "Color": "White",
        "Type": "Other",
        "Weight": 0.13,
        "Use": 1
    },
    {
        "Name": "Drogskol Cavalry",
        "OracleType": "Creature - Spirit Knight 4/4",
        "Mana": "5WW",
        "Rarity": "Rare",
        "Artist": "Igor Kieryluk",
        "Edition": "Shadows over Innistrad",
        "CMC": 7,
        "Color": "White",
        "Type": "Creature",
        "Weight": 0.06,
        "Use": 1
    },
    {
        "Name": "Rush of Adrenaline",
        "OracleType": "Instant",
        "Mana": "R",
        "Rarity": "Common",
        "Artist": "Chris Rallis",
        "Edition": "Shadows over Innistrad",
        "CMC": 1,
        "Color": "Red",
        "Type": "Other",
        "Weight": 0.41,
        "Use": 1
    },
    {
        "Name": "Press for Answers",
        "OracleType": "Sorcery",
        "Mana": "1U",
        "Rarity": "Common",
        "Artist": "Steve Prescott",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Blue",
        "Type": "Other",
        "Weight": 0.41,
        "Use": 1
    },
    {
        "Name": "Aim High",
        "OracleType": "Instant",
        "Mana": "1G",
        "Rarity": "Common",
        "Artist": "Steve Prescott",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Green",
        "Type": "Other",
        "Weight": 0.41,
        "Use": 1
    },
    {
        "Name": "Emrakul's Evangel",
        "OracleType": "Creature - Human Horror 3/2",
        "Mana": "2G",
        "Rarity": "Rare",
        "Artist": "Jason Felix",
        "Edition": "Eldritch Moon",
        "CMC": 3,
        "Color": "Green",
        "Type": "Creature",
        "Weight": 0.16,
        "Use": 1
    },
    {
        "Name": "Lunarch Mantle",
        "OracleType": "Enchantment - Aura",
        "Mana": "1W",
        "Rarity": "Common",
        "Artist": "Anastasia Ovchinnikova",
        "Edition": "Eldritch Moon",
        "CMC": 2,
        "Color": "White",
        "Type": "Other",
        "Weight": 1.16,
        "Use": 1
    },
    {
        "Name": "Sanctifier of Souls",
        "OracleType": "Creature - Human Cleric 2/3",
        "Mana": "3W",
        "Rarity": "Rare",
        "Artist": "Jesper Ejsing",
        "Edition": "Eldritch Moon",
        "CMC": 4,
        "Color": "White",
        "Type": "Creature",
        "Weight": 0.16,
        "Use": 1
    },
    {
        "Name": "Faithbearer Paladin",
        "OracleType": "Creature - Human Knight 3/4",
        "Mana": "4W",
        "Rarity": "Common",
        "Artist": "Aaron Miller",
        "Edition": "Eldritch Moon",
        "CMC": 5,
        "Color": "White",
        "Type": "Creature",
        "Weight": 1.16,
        "Use": 1
    }
];


/***/ }),

/***/ "./src/data/soi.ts":
/*!*************************!*\
  !*** ./src/data/soi.ts ***!
  \*************************/
/*! exports provided: SOI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOI", function() { return SOI; });
/* tslint:disable:quotemark */
var SOI = [
    {
        "Name": "Dead Weight",
        "OracleType": "Enchantment - Aura",
        "Mana": "B",
        "Rarity": "Common",
        "Artist": "Randy Gallegos",
        "Edition": "Shadows over Innistrad",
        "CMC": 1,
        "Color": "Black",
        "Type": "Other",
        "Weight": 1.22,
        "Use": 2
    },
    {
        "Name": "Murderous Compulsion",
        "OracleType": "Sorcery",
        "Mana": "1B",
        "Rarity": "Common",
        "Artist": "David Palumbo",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Black",
        "Type": "Other",
        "Weight": 1.22,
        "Use": 2
    },
    {
        "Name": "Rancid Rats",
        "OracleType": "Creature - Zombie Rat 1/1",
        "Mana": "1B",
        "Rarity": "Common",
        "Artist": "Daniel Ljunggren",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Black",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 2
    },
    {
        "Name": "Crow of Dark Tidings",
        "OracleType": "Creature - Zombie Bird 2/1",
        "Mana": "2B",
        "Rarity": "Common",
        "Artist": "Tianhua X",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "Black",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 2
    },
    {
        "Name": "Farbog Revenant",
        "OracleType": "Creature - Spirit 1/3",
        "Mana": "2B",
        "Rarity": "Common",
        "Artist": "Min Yum",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "Black",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 2
    },
    {
        "Name": "Throttle",
        "OracleType": "Instant",
        "Mana": "4B",
        "Rarity": "Common",
        "Artist": "Raymond Swanland",
        "Edition": "Shadows over Innistrad",
        "CMC": 5,
        "Color": "Black",
        "Type": "Other",
        "Weight": 1.22,
        "Use": 2
    },
    {
        "Name": "Just the Wind",
        "OracleType": "Instant",
        "Mana": "1U",
        "Rarity": "Common",
        "Artist": "Christopher Moeller",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Blue",
        "Type": "Other",
        "Weight": 1.22,
        "Use": 2
    },
    {
        "Name": "Furtive Homunculus",
        "OracleType": "Creature - Homunculus 2/1",
        "Mana": "1U",
        "Rarity": "Common",
        "Artist": "Wayne Reynolds",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Blue",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 2
    },
    {
        "Name": "Niblis of Dusk",
        "OracleType": "Creature - Spirit 2/1",
        "Mana": "2U",
        "Rarity": "Common",
        "Artist": "Nils Hamm",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "Blue",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 2
    },
    {
        "Name": "Catalog",
        "OracleType": "Instant",
        "Mana": "2U",
        "Rarity": "Common",
        "Artist": "Johannes Voss",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "Blue",
        "Type": "Other",
        "Weight": 1.22,
        "Use": 2
    },
    {
        "Name": "Sleep Paralysis",
        "OracleType": "Enchantment - Aura",
        "Mana": "3U",
        "Rarity": "Common",
        "Artist": "Josu Hernaiz",
        "Edition": "Shadows over Innistrad",
        "CMC": 4,
        "Color": "Blue",
        "Type": "Other",
        "Weight": 1.22,
        "Use": 2
    },
    {
        "Name": "Drownyard Explorers",
        "OracleType": "Creature - Human Wizard 2/4",
        "Mana": "3U",
        "Rarity": "Common",
        "Artist": "Anthony Palumbo",
        "Edition": "Shadows over Innistrad",
        "CMC": 4,
        "Color": "Blue",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 2
    },
    {
        "Name": "Vessel of Nascency",
        "OracleType": "Enchantment",
        "Mana": "G",
        "Rarity": "Common",
        "Artist": "Kieran Yanner",
        "Edition": "Shadows over Innistrad",
        "CMC": 1,
        "Color": "Green",
        "Type": "Other",
        "Weight": 1.22,
        "Use": 2
    },
    {
        "Name": "Rabid Bite",
        "OracleType": "Sorcery",
        "Mana": "1G",
        "Rarity": "Common",
        "Artist": "Karl Kopinski",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Green",
        "Type": "Other",
        "Weight": 1.22,
        "Use": 2
    },
    {
        "Name": "Quilled Wolf",
        "OracleType": "Creature - Wolf 2/2",
        "Mana": "1G",
        "Rarity": "Common",
        "Artist": "Bastien L. Deharme",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Green",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 2
    },
    {
        "Name": "Hinterland Logger",
        "OracleType": "Creature - Human Werewolf 2/1",
        "Mana": "1G",
        "Rarity": "Common",
        "Artist": "Karl Kopinski",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Green",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 2
    },
    {
        "Name": "Aim High",
        "OracleType": "Instant",
        "Mana": "1G",
        "Rarity": "Common",
        "Artist": "Steve Prescott",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Green",
        "Type": "Other",
        "Weight": 1.22,
        "Use": 2
    },
    {
        "Name": "Byway Courier",
        "OracleType": "Creature - Human Scout 3/2",
        "Mana": "2G",
        "Rarity": "Common",
        "Artist": "Zoltan Boros",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "Green",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 2
    },
    {
        "Name": "Watcher in the Web",
        "OracleType": "Creature - Spider 2/5",
        "Mana": "4G",
        "Rarity": "Common",
        "Artist": "Vincent Proce",
        "Edition": "Shadows over Innistrad",
        "CMC": 5,
        "Color": "Green",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 2
    },
    {
        "Name": "Dual Shot",
        "OracleType": "Instant",
        "Mana": "R",
        "Rarity": "Common",
        "Artist": "Joseph Meehan",
        "Edition": "Shadows over Innistrad",
        "CMC": 1,
        "Color": "Red",
        "Type": "Other",
        "Weight": 1.22,
        "Use": 2
    },
    {
        "Name": "Tormenting Voice",
        "OracleType": "Sorcery",
        "Mana": "1R",
        "Rarity": "Common",
        "Artist": "Dan Scott",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Red",
        "Type": "Other",
        "Weight": 1.22,
        "Use": 2
    },
    {
        "Name": "Sanguinary Mage",
        "OracleType": "Creature - Vampire Wizard 1/3",
        "Mana": "1R",
        "Rarity": "Common",
        "Artist": "David Gaillet",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Red",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 2
    },
    {
        "Name": "Senseless Rage",
        "OracleType": "Enchantment - Aura",
        "Mana": "1R",
        "Rarity": "Common",
        "Artist": "Raymond Swanland",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Red",
        "Type": "Other",
        "Weight": 1.22,
        "Use": 2
    },
    {
        "Name": "Fiery Temper",
        "OracleType": "Instant",
        "Mana": "1RR",
        "Rarity": "Common",
        "Artist": "Johannes Voss",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "Red",
        "Type": "Other",
        "Weight": 1.22,
        "Use": 2
    },
    {
        "Name": "Howlpack Wolf",
        "OracleType": "Creature - Wolf 3/3",
        "Mana": "2R",
        "Rarity": "Common",
        "Artist": "Svetlin Velinov",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "Red",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 2
    },
    {
        "Name": "Pyre Hound",
        "OracleType": "Creature - Elemental Hound 2/3",
        "Mana": "3R",
        "Rarity": "Common",
        "Artist": "Jama Jurabaev",
        "Edition": "Shadows over Innistrad",
        "CMC": 4,
        "Color": "Red",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 2
    },
    {
        "Name": "Voldaren Duelist",
        "OracleType": "Creature - Vampire Warrior 3/2",
        "Mana": "3R",
        "Rarity": "Common",
        "Artist": "Jason Rainville",
        "Edition": "Shadows over Innistrad",
        "CMC": 4,
        "Color": "Red",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 2
    },
    {
        "Name": "Gatstaf Arsonists",
        "OracleType": "Creature - Human Werewolf 5/4",
        "Mana": "4R",
        "Rarity": "Common",
        "Artist": "Greg Staples",
        "Edition": "Shadows over Innistrad",
        "CMC": 5,
        "Color": "Red",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 2
    },
    {
        "Name": "Puncturing Light",
        "OracleType": "Instant",
        "Mana": "1W",
        "Rarity": "Common",
        "Artist": "Greg Staples",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "White",
        "Type": "Other",
        "Weight": 1.22,
        "Use": 2
    },
    {
        "Name": "Unruly Mob",
        "OracleType": "Creature - Human 1/1",
        "Mana": "1W",
        "Rarity": "Common",
        "Artist": "Ryan Pancoast",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "White",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 2
    },
    {
        "Name": "Dauntless Cathar",
        "OracleType": "Creature - Human Soldier 3/2",
        "Mana": "2W",
        "Rarity": "Common",
        "Artist": "Zack Stella",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "White",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 2
    },
    {
        "Name": "Angelic Purge",
        "OracleType": "Sorcery",
        "Mana": "2W",
        "Rarity": "Common",
        "Artist": "Zezhou Chen",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "White",
        "Type": "Other",
        "Weight": 1.22,
        "Use": 2
    },
    {
        "Name": "Cathar's Companion",
        "OracleType": "Creature - Hound 3/1",
        "Mana": "2W",
        "Rarity": "Common",
        "Artist": "Svetlin Velinov",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "White",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 2
    },
    {
        "Name": "Inspiring Captain",
        "OracleType": "Creature - Human Knight 3/3",
        "Mana": "3W",
        "Rarity": "Common",
        "Artist": "Ben Maier",
        "Edition": "Shadows over Innistrad",
        "CMC": 4,
        "Color": "White",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 2
    },
    {
        "Name": "Emissary of the Sleepless",
        "OracleType": "Creature - Spirit 2/4",
        "Mana": "4W",
        "Rarity": "Common",
        "Artist": "Igor Kieryluk",
        "Edition": "Shadows over Innistrad",
        "CMC": 5,
        "Color": "White",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 2
    },
    {
        "Name": "Ghoulcaller's Accomplice",
        "OracleType": "Creature - Human Rogue 2/2",
        "Mana": "1B",
        "Rarity": "Common",
        "Artist": "Dave Kendall",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Black",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 2
    },
    {
        "Name": "Twins of Maurer Estate",
        "OracleType": "Creature - Vampire 3/5",
        "Mana": "4B",
        "Rarity": "Common",
        "Artist": "Darek Zabrocki",
        "Edition": "Shadows over Innistrad",
        "CMC": 5,
        "Color": "Black",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Sinister Concoction",
        "OracleType": "Enchantment",
        "Mana": "B",
        "Rarity": "Uncommon",
        "Artist": "Zack Stella",
        "Edition": "Shadows over Innistrad",
        "CMC": 1,
        "Color": "Black",
        "Type": "Other",
        "Weight": 0.39,
        "Use": 1
    },
    {
        "Name": "Indulgent Aristocrat",
        "OracleType": "Creature - Vampire 1/1",
        "Mana": "B",
        "Rarity": "Uncommon",
        "Artist": "Anna Steinbauer",
        "Edition": "Shadows over Innistrad",
        "CMC": 1,
        "Color": "Black",
        "Type": "Creature",
        "Weight": 0.39,
        "Use": 1
    },
    {
        "Name": "Grotesque Mutation",
        "OracleType": "Instant",
        "Mana": "1B",
        "Rarity": "Common",
        "Artist": "Dan Scott",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Black",
        "Type": "Other",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Call the Bloodline",
        "OracleType": "Enchantment",
        "Mana": "1B",
        "Rarity": "Uncommon",
        "Artist": "Lake Hurwitz",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Black",
        "Type": "Other",
        "Weight": 0.39,
        "Use": 1
    },
    {
        "Name": "Macabre Waltz",
        "OracleType": "Sorcery",
        "Mana": "1B",
        "Rarity": "Common",
        "Artist": "Willian Murai",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Black",
        "Type": "Other",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Vessel of Malignity",
        "OracleType": "Enchantment",
        "Mana": "1B",
        "Rarity": "Common",
        "Artist": "Kieran Yanner",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Black",
        "Type": "Other",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Kindly Stranger",
        "OracleType": "Creature - Human 2/3",
        "Mana": "2B",
        "Rarity": "Uncommon",
        "Artist": "Ryan Pancoast",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "Black",
        "Type": "Creature",
        "Weight": 0.39,
        "Use": 1
    },
    {
        "Name": "Merciless Resolve",
        "OracleType": "Instant",
        "Mana": "2B",
        "Rarity": "Common",
        "Artist": "Chase Stone",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "Black",
        "Type": "Other",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Vampire Noble",
        "OracleType": "Creature - Vampire 3/2",
        "Mana": "2B",
        "Rarity": "Common",
        "Artist": "Ryan Alexander Lee",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "Black",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Behind the Scenes",
        "OracleType": "Enchantment",
        "Mana": "2B",
        "Rarity": "Uncommon",
        "Artist": "David Gaillet",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "Black",
        "Type": "Other",
        "Weight": 0.39,
        "Use": 1
    },
    {
        "Name": "Rottenheart Ghoul",
        "OracleType": "Creature - Zombie 2/4",
        "Mana": "3B",
        "Rarity": "Common",
        "Artist": "Dave Kendall",
        "Edition": "Shadows over Innistrad",
        "CMC": 4,
        "Color": "Black",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Elusive Tormentor",
        "OracleType": "Creature - Vampire Wizard 4/4",
        "Mana": "2BB",
        "Rarity": "Rare",
        "Artist": "Izzy",
        "Edition": "Shadows over Innistrad",
        "CMC": 4,
        "Color": "Black",
        "Type": "Creature",
        "Weight": 0.19,
        "Use": 1
    },
    {
        "Name": "Gisa's Bidding",
        "OracleType": "Sorcery",
        "Mana": "2BB",
        "Rarity": "Uncommon",
        "Artist": "Jason Felix",
        "Edition": "Shadows over Innistrad",
        "CMC": 4,
        "Color": "Black",
        "Type": "Other",
        "Weight": 0.39,
        "Use": 1
    },
    {
        "Name": "Stallion of Ashmouth",
        "OracleType": "Creature - Nightmare Horse 3/3",
        "Mana": "3B",
        "Rarity": "Common",
        "Artist": "Chris Rahn",
        "Edition": "Shadows over Innistrad",
        "CMC": 4,
        "Color": "Black",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Stromkirk Mentor",
        "OracleType": "Creature - Vampire Soldier 4/2",
        "Mana": "3B",
        "Rarity": "Common",
        "Artist": "Cynthia Sheppard",
        "Edition": "Shadows over Innistrad",
        "CMC": 4,
        "Color": "Black",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Hound of the Farbogs",
        "OracleType": "Creature - Zombie Hound 5/3",
        "Mana": "4B",
        "Rarity": "Common",
        "Artist": "Christine Choi",
        "Edition": "Shadows over Innistrad",
        "CMC": 5,
        "Color": "Black",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Daring Sleuth",
        "OracleType": "Creature - Human Rogue 2/1",
        "Mana": "1U",
        "Rarity": "Uncommon",
        "Artist": "Seb McKinnon",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Blue",
        "Type": "Creature",
        "Weight": 0.39,
        "Use": 1
    },
    {
        "Name": "Nagging Thoughts",
        "OracleType": "Sorcery",
        "Mana": "1U",
        "Rarity": "Common",
        "Artist": "Seb McKinnon",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Blue",
        "Type": "Other",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Ghostly Wings",
        "OracleType": "Enchantment - Aura",
        "Mana": "1U",
        "Rarity": "Common",
        "Artist": "Josu Hernaiz",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Blue",
        "Type": "Other",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Vessel of Paramnesia",
        "OracleType": "Enchantment",
        "Mana": "1U",
        "Rarity": "Common",
        "Artist": "Kieran Yanner",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Blue",
        "Type": "Other",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Jace's Scrutiny",
        "OracleType": "Instant",
        "Mana": "1U",
        "Rarity": "Common",
        "Artist": "Slawomir Maniak",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Blue",
        "Type": "Other",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Seagraf Skaab",
        "OracleType": "Creature - Zombie 1/3",
        "Mana": "1U",
        "Rarity": "Common",
        "Artist": "Jama Jurabaev",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Blue",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Press for Answers",
        "OracleType": "Sorcery",
        "Mana": "1U",
        "Rarity": "Common",
        "Artist": "Steve Prescott",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Blue",
        "Type": "Other",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Ongoing Investigation",
        "OracleType": "Enchantment",
        "Mana": "1U",
        "Rarity": "Uncommon",
        "Artist": "Bud Cook",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Blue",
        "Type": "Other",
        "Weight": 0.39,
        "Use": 1
    },
    {
        "Name": "Stitched Mangler",
        "OracleType": "Creature - Zombie Horror 2/3",
        "Mana": "2U",
        "Rarity": "Common",
        "Artist": "Dave Kendall",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "Blue",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Uninvited Geist",
        "OracleType": "Creature - Spirit 2/2",
        "Mana": "2U",
        "Rarity": "Uncommon",
        "Artist": "Dan Scott",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "Blue",
        "Type": "Creature",
        "Weight": 0.39,
        "Use": 1
    },
    {
        "Name": "Deny Existence",
        "OracleType": "Instant",
        "Mana": "2U",
        "Rarity": "Common",
        "Artist": "Christopher Moeller",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "Blue",
        "Type": "Other",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Broken Concentration",
        "OracleType": "Instant",
        "Mana": "1UU",
        "Rarity": "Uncommon",
        "Artist": "Clint Cearley",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "Blue",
        "Type": "Other",
        "Weight": 0.39,
        "Use": 1
    },
    {
        "Name": "Stitchwing Skaab",
        "OracleType": "Creature - Zombie Horror 3/1",
        "Mana": "3U",
        "Rarity": "Uncommon",
        "Artist": "Nils Hamm",
        "Edition": "Shadows over Innistrad",
        "CMC": 4,
        "Color": "Blue",
        "Type": "Creature",
        "Weight": 0.39,
        "Use": 1
    },
    {
        "Name": "Silent Observer",
        "OracleType": "Creature - Spirit 1/5",
        "Mana": "3U",
        "Rarity": "Common",
        "Artist": "Lake Hurwitz",
        "Edition": "Shadows over Innistrad",
        "CMC": 4,
        "Color": "Blue",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Gone Missing",
        "OracleType": "Sorcery",
        "Mana": "4U",
        "Rarity": "Common",
        "Artist": "James Paick",
        "Edition": "Shadows over Innistrad",
        "CMC": 5,
        "Color": "Blue",
        "Type": "Other",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Pore Over the Pages",
        "OracleType": "Sorcery",
        "Mana": "3UU",
        "Rarity": "Uncommon",
        "Artist": "Magali Villeneuve",
        "Edition": "Shadows over Innistrad",
        "CMC": 5,
        "Color": "Blue",
        "Type": "Other",
        "Weight": 0.39,
        "Use": 1
    },
    {
        "Name": "Stormrider Spirit",
        "OracleType": "Creature - Spirit 3/3",
        "Mana": "4U",
        "Rarity": "Common",
        "Artist": "Lake Hurwitz",
        "Edition": "Shadows over Innistrad",
        "CMC": 5,
        "Color": "Blue",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Lamplighter of Selhoff",
        "OracleType": "Creature - Zombie Horror 3/5",
        "Mana": "4U",
        "Rarity": "Common",
        "Artist": "Clint Cearley",
        "Edition": "Shadows over Innistrad",
        "CMC": 5,
        "Color": "Blue",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Confirm Suspicions",
        "OracleType": "Instant",
        "Mana": "3UU",
        "Rarity": "Rare",
        "Artist": "David Gaillet",
        "Edition": "Shadows over Innistrad",
        "CMC": 5,
        "Color": "Blue",
        "Type": "Other",
        "Weight": 0.19,
        "Use": 1
    },
    {
        "Name": "Epiphany at the Drownyard",
        "OracleType": "Instant",
        "Mana": "XU",
        "Rarity": "Rare",
        "Artist": "Titus Lunter",
        "Edition": "Shadows over Innistrad",
        "CMC": 7,
        "Color": "Blue",
        "Type": "Other",
        "Weight": 0.19,
        "Use": 1
    },
    {
        "Name": "Nephalia Moondrakes",
        "OracleType": "Creature - Drake 5/5",
        "Mana": "5UU",
        "Rarity": "Rare",
        "Artist": "Tianhua X",
        "Edition": "Shadows over Innistrad",
        "CMC": 7,
        "Color": "Blue",
        "Type": "Creature",
        "Weight": 0.19,
        "Use": 1
    },
    {
        "Name": "Thraben Gargoyle",
        "OracleType": "Artifact Creature - Gargoyle 2/2",
        "Mana": "1",
        "Rarity": "Uncommon",
        "Artist": "Daniel Ljunggren",
        "Edition": "Shadows over Innistrad",
        "CMC": 1,
        "Color": "Colorless",
        "Type": "Creature",
        "Weight": 0.39,
        "Use": 1
    },
    {
        "Name": "Explosive Apparatus",
        "OracleType": "Artifact",
        "Mana": "1",
        "Rarity": "Common",
        "Artist": "Lindsey Look",
        "Edition": "Shadows over Innistrad",
        "CMC": 1,
        "Color": "Colorless",
        "Type": "Other",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Skeleton Key",
        "OracleType": "Artifact - Equipment",
        "Mana": "1",
        "Rarity": "Uncommon",
        "Artist": "Daniel Ljunggren",
        "Edition": "Shadows over Innistrad",
        "CMC": 1,
        "Color": "Colorless",
        "Type": "Other",
        "Weight": 0.39,
        "Use": 1
    },
    {
        "Name": "True-Faith Censer",
        "OracleType": "Artifact - Equipment",
        "Mana": "2",
        "Rarity": "Common",
        "Artist": "Christine Choi",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Colorless",
        "Type": "Other",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Slayer's Plate",
        "OracleType": "Artifact - Equipment",
        "Mana": "3",
        "Rarity": "Rare",
        "Artist": "Ben Maier",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "Colorless",
        "Type": "Other",
        "Weight": 0.19,
        "Use": 1
    },
    {
        "Name": "Wild-Field Scarecrow",
        "OracleType": "Artifact Creature - Scarecrow 1/4",
        "Mana": "3",
        "Rarity": "Uncommon",
        "Artist": "Jakub Kasper",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "Colorless",
        "Type": "Creature",
        "Weight": 0.39,
        "Use": 1
    },
    {
        "Name": "Harvest Hand",
        "OracleType": "Artifact Creature - Scarecrow 2/2",
        "Mana": "3",
        "Rarity": "Uncommon",
        "Artist": "Jason Felix",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "Colorless",
        "Type": "Creature",
        "Weight": 0.39,
        "Use": 1
    },
    {
        "Name": "Wicker Witch",
        "OracleType": "Artifact Creature - Scarecrow 3/1",
        "Mana": "3",
        "Rarity": "Common",
        "Artist": "Izzy",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "Colorless",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Murderer's Axe",
        "OracleType": "Artifact - Equipment",
        "Mana": "4",
        "Rarity": "Uncommon",
        "Artist": "Winona Nelson",
        "Edition": "Shadows over Innistrad",
        "CMC": 4,
        "Color": "Colorless",
        "Type": "Other",
        "Weight": 0.39,
        "Use": 1
    },
    {
        "Name": "Tamiyo's Journal",
        "OracleType": "Legendary Artifact",
        "Mana": "5",
        "Rarity": "Rare",
        "Artist": "Chase Stone",
        "Edition": "Shadows over Innistrad",
        "CMC": 5,
        "Color": "Colorless",
        "Type": "Other",
        "Weight": 0.19,
        "Use": 1
    },
    {
        "Name": "Confront the Unknown",
        "OracleType": "Instant",
        "Mana": "G",
        "Rarity": "Common",
        "Artist": "Kev Walker",
        "Edition": "Shadows over Innistrad",
        "CMC": 1,
        "Color": "Green",
        "Type": "Other",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Moldgraf Scavenger",
        "OracleType": "Creature - Fungus 0/4",
        "Mana": "1G",
        "Rarity": "Common",
        "Artist": "Tomasz Jedruszek",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Green",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Fork in the Road",
        "OracleType": "Sorcery",
        "Mana": "1G",
        "Rarity": "Common",
        "Artist": "Jung Park",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Green",
        "Type": "Other",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Obsessive Skinner",
        "OracleType": "Creature - Human Rogue 1/1",
        "Mana": "1G",
        "Rarity": "Uncommon",
        "Artist": "John Stanko",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Green",
        "Type": "Creature",
        "Weight": 0.39,
        "Use": 1
    },
    {
        "Name": "Graf Mole",
        "OracleType": "Creature - Mole Beast 2/4",
        "Mana": "2G",
        "Rarity": "Uncommon",
        "Artist": "Lars Grant-West",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "Green",
        "Type": "Creature",
        "Weight": 0.39,
        "Use": 1
    },
    {
        "Name": "Howlpack Resurgence",
        "OracleType": "Enchantment",
        "Mana": "2G",
        "Rarity": "Uncommon",
        "Artist": "Izzy",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "Green",
        "Type": "Other",
        "Weight": 0.39,
        "Use": 1
    },
    {
        "Name": "Inexorable Blob",
        "OracleType": "Creature - Ooze 3/3",
        "Mana": "2G",
        "Rarity": "Rare",
        "Artist": "Nils Hamm",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "Green",
        "Type": "Creature",
        "Weight": 0.19,
        "Use": 1
    },
    {
        "Name": "Autumnal Gloom",
        "OracleType": "Enchantment",
        "Mana": "2G",
        "Rarity": "Uncommon",
        "Artist": "Jaime Jones",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "Green",
        "Type": "Other",
        "Weight": 0.39,
        "Use": 1
    },
    {
        "Name": "Ulvenwald Mysteries",
        "OracleType": "Enchantment",
        "Mana": "2G",
        "Rarity": "Uncommon",
        "Artist": "Greg Opalinski",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "Green",
        "Type": "Other",
        "Weight": 0.39,
        "Use": 1
    },
    {
        "Name": "Stoic Builder",
        "OracleType": "Creature - Human 2/3",
        "Mana": "2G",
        "Rarity": "Common",
        "Artist": "Howard Lyon",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "Green",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Intrepid Provisioner",
        "OracleType": "Creature - Human Scout 3/3",
        "Mana": "3G",
        "Rarity": "Common",
        "Artist": "Lius Lasahido",
        "Edition": "Shadows over Innistrad",
        "CMC": 4,
        "Color": "Green",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Pack Guardian",
        "OracleType": "Creature - Wolf Spirit 4/3",
        "Mana": "2GG",
        "Rarity": "Uncommon",
        "Artist": "Filip Burburan",
        "Edition": "Shadows over Innistrad",
        "CMC": 4,
        "Color": "Green",
        "Type": "Creature",
        "Weight": 0.39,
        "Use": 1
    },
    {
        "Name": "Solitary Hunter",
        "OracleType": "Creature - Human Warrior Werewolf 3/4",
        "Mana": "3G",
        "Rarity": "Common",
        "Artist": "Craig J Spearing",
        "Edition": "Shadows over Innistrad",
        "CMC": 4,
        "Color": "Green",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Briarbridge Patrol",
        "OracleType": "Creature - Human Warrior 3/3",
        "Mana": "3G",
        "Rarity": "Uncommon",
        "Artist": "Greg Opalinski",
        "Edition": "Shadows over Innistrad",
        "CMC": 4,
        "Color": "Green",
        "Type": "Creature",
        "Weight": 0.39,
        "Use": 1
    },
    {
        "Name": "Might Beyond Reason",
        "OracleType": "Instant",
        "Mana": "3G",
        "Rarity": "Common",
        "Artist": "Craig J Spearing",
        "Edition": "Shadows over Innistrad",
        "CMC": 4,
        "Color": "Green",
        "Type": "Other",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Equestrian Skill",
        "OracleType": "Enchantment - Aura",
        "Mana": "3G",
        "Rarity": "Common",
        "Artist": "Zoltan Boros",
        "Edition": "Shadows over Innistrad",
        "CMC": 4,
        "Color": "Green",
        "Type": "Other",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Cult of the Waxing Moon",
        "OracleType": "Creature - Human Shaman 5/4",
        "Mana": "4G",
        "Rarity": "Uncommon",
        "Artist": "Anastasia Ovchinnikova",
        "Edition": "Shadows over Innistrad",
        "CMC": 5,
        "Color": "Green",
        "Type": "Creature",
        "Weight": 0.39,
        "Use": 1
    },
    {
        "Name": "Thornhide Wolves",
        "OracleType": "Creature - Wolf 4/5",
        "Mana": "4G",
        "Rarity": "Common",
        "Artist": "Scott Murphy",
        "Edition": "Shadows over Innistrad",
        "CMC": 5,
        "Color": "Green",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Kessig Dire Swine",
        "OracleType": "Creature - Boar Horror 6/6",
        "Mana": "4GG",
        "Rarity": "Common",
        "Artist": "Jason Kang",
        "Edition": "Shadows over Innistrad",
        "CMC": 6,
        "Color": "Green",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Forsaken Sanctuary",
        "OracleType": "Land",
        "Mana": "",
        "Rarity": "Uncommon",
        "Artist": "Vincent Proce",
        "Edition": "Shadows over Innistrad",
        "CMC": null,
        "Color": "Black White",
        "Type": "Other",
        "Weight": 0.45,
        "Use": 1
    },
    {
        "Name": "Foul Orchard",
        "OracleType": "Land",
        "Mana": "",
        "Rarity": "Uncommon",
        "Artist": "Jung Park",
        "Edition": "Shadows over Innistrad",
        "CMC": null,
        "Color": "Black Green",
        "Type": "Other",
        "Weight": 0.45,
        "Use": 1
    },
    {
        "Name": "Highland Lake",
        "OracleType": "Land",
        "Mana": "",
        "Rarity": "Uncommon",
        "Artist": "Florian de Gesincourt",
        "Edition": "Shadows over Innistrad",
        "CMC": null,
        "Color": "Blue Red",
        "Type": "Other",
        "Weight": 0.45,
        "Use": 1
    },
    {
        "Name": "Stone Quarry",
        "OracleType": "Land",
        "Mana": "",
        "Rarity": "Uncommon",
        "Artist": "Cliff Childs",
        "Edition": "Shadows over Innistrad",
        "CMC": null,
        "Color": "Red White",
        "Type": "Other",
        "Weight": 0.45,
        "Use": 1
    },
    {
        "Name": "Woodland Stream",
        "OracleType": "Land",
        "Mana": "",
        "Rarity": "Uncommon",
        "Artist": "James Paick",
        "Edition": "Shadows over Innistrad",
        "CMC": null,
        "Color": "Blue Green",
        "Type": "Other",
        "Weight": 0.45,
        "Use": 1
    },
    {
        "Name": "Rush of Adrenaline",
        "OracleType": "Instant",
        "Mana": "R",
        "Rarity": "Common",
        "Artist": "Chris Rallis",
        "Edition": "Shadows over Innistrad",
        "CMC": 1,
        "Color": "Red",
        "Type": "Other",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Skin Invasion",
        "OracleType": "Enchantment - Aura",
        "Mana": "R",
        "Rarity": "Uncommon",
        "Artist": "Nils Hamm",
        "Edition": "Shadows over Innistrad",
        "CMC": 1,
        "Color": "Red",
        "Type": "Other",
        "Weight": 0.39,
        "Use": 1
    },
    {
        "Name": "Insolent Neonate",
        "OracleType": "Creature - Vampire 1/1",
        "Mana": "R",
        "Rarity": "Common",
        "Artist": "Deruchenko Alexander",
        "Edition": "Shadows over Innistrad",
        "CMC": 1,
        "Color": "Red",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Avacyn's Judgment",
        "OracleType": "Sorcery",
        "Mana": "1R",
        "Rarity": "Rare",
        "Artist": "Victor Adame Minguez",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Red",
        "Type": "Other",
        "Weight": 0.19,
        "Use": 1
    },
    {
        "Name": "Gibbering Fiend",
        "OracleType": "Creature - Devil 2/1",
        "Mana": "1R",
        "Rarity": "Uncommon",
        "Artist": "Chris Rallis",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Red",
        "Type": "Creature",
        "Weight": 0.39,
        "Use": 1
    },
    {
        "Name": "Ember-Eye Wolf",
        "OracleType": "Creature - Wolf 1/2",
        "Mana": "1R",
        "Rarity": "Common",
        "Artist": "Anthony Palumbo",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "Red",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Geistblast",
        "OracleType": "Instant",
        "Mana": "2R",
        "Rarity": "Uncommon",
        "Artist": "Raymond Swanland",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "Red",
        "Type": "Other",
        "Weight": 0.39,
        "Use": 1
    },
    {
        "Name": "Uncaged Fury",
        "OracleType": "Instant",
        "Mana": "2R",
        "Rarity": "Common",
        "Artist": "Jason Kang",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "Red",
        "Type": "Other",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Convicted Killer",
        "OracleType": "Creature - Human Werewolf 2/2",
        "Mana": "2R",
        "Rarity": "Common",
        "Artist": "Deruchenko Alexander",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "Red",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Bloodmad Vampire",
        "OracleType": "Creature - Vampire Berserker 4/1",
        "Mana": "2R",
        "Rarity": "Common",
        "Artist": "Johannes Voss",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "Red",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Mad Prophet",
        "OracleType": "Creature - Human Shaman 2/2",
        "Mana": "3R",
        "Rarity": "Uncommon",
        "Artist": "Iain McCaig",
        "Edition": "Shadows over Innistrad",
        "CMC": 4,
        "Color": "Red",
        "Type": "Creature",
        "Weight": 0.39,
        "Use": 1
    },
    {
        "Name": "Dance with Devils",
        "OracleType": "Instant",
        "Mana": "3R",
        "Rarity": "Uncommon",
        "Artist": "Wayne England",
        "Edition": "Shadows over Innistrad",
        "CMC": 4,
        "Color": "Red",
        "Type": "Other",
        "Weight": 0.39,
        "Use": 1
    },
    {
        "Name": "Spiteful Motives",
        "OracleType": "Enchantment - Aura",
        "Mana": "3R",
        "Rarity": "Uncommon",
        "Artist": "Marco Nelor",
        "Edition": "Shadows over Innistrad",
        "CMC": 4,
        "Color": "Red",
        "Type": "Other",
        "Weight": 0.39,
        "Use": 1
    },
    {
        "Name": "Reduce to Ashes",
        "OracleType": "Sorcery",
        "Mana": "4R",
        "Rarity": "Common",
        "Artist": "Jason A. Engle",
        "Edition": "Shadows over Innistrad",
        "CMC": 5,
        "Color": "Red",
        "Type": "Other",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Flameblade Angel",
        "OracleType": "Creature - Angel 4/4",
        "Mana": "4RR",
        "Rarity": "Rare",
        "Artist": "Cynthia Sheppard",
        "Edition": "Shadows over Innistrad",
        "CMC": 6,
        "Color": "Red",
        "Type": "Creature",
        "Weight": 0.19,
        "Use": 1
    },
    {
        "Name": "Thraben Inspector",
        "OracleType": "Creature - Human Soldier 1/2",
        "Mana": "W",
        "Rarity": "Common",
        "Artist": "Matt Stewart",
        "Edition": "Shadows over Innistrad",
        "CMC": 1,
        "Color": "White",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Topplegeist",
        "OracleType": "Creature - Spirit 1/1",
        "Mana": "W",
        "Rarity": "Uncommon",
        "Artist": "Seb McKinnon",
        "Edition": "Shadows over Innistrad",
        "CMC": 1,
        "Color": "White",
        "Type": "Creature",
        "Weight": 0.39,
        "Use": 1
    },
    {
        "Name": "Town Gossipmonger",
        "OracleType": "Creature - Human 1/1",
        "Mana": "W",
        "Rarity": "Uncommon",
        "Artist": "John Stanko",
        "Edition": "Shadows over Innistrad",
        "CMC": 1,
        "Color": "White",
        "Type": "Creature",
        "Weight": 0.39,
        "Use": 1
    },
    {
        "Name": "Gryff's Boon",
        "OracleType": "Enchantment - Aura",
        "Mana": "W",
        "Rarity": "Uncommon",
        "Artist": "Svetlin Velinov",
        "Edition": "Shadows over Innistrad",
        "CMC": 1,
        "Color": "White",
        "Type": "Other",
        "Weight": 0.39,
        "Use": 1
    },
    {
        "Name": "Strength of Arms",
        "OracleType": "Instant",
        "Mana": "W",
        "Rarity": "Common",
        "Artist": "John Stanko",
        "Edition": "Shadows over Innistrad",
        "CMC": 1,
        "Color": "White",
        "Type": "Other",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Declaration in Stone",
        "OracleType": "Sorcery",
        "Mana": "1W",
        "Rarity": "Rare",
        "Artist": "Tyler Jacobson",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "White",
        "Type": "Other",
        "Weight": 0.19,
        "Use": 1
    },
    {
        "Name": "Devilthorn Fox",
        "OracleType": "Creature - Fox 3/1",
        "Mana": "1W",
        "Rarity": "Common",
        "Artist": "Filip Burburan",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "White",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Nahiri's Machinations",
        "OracleType": "Enchantment",
        "Mana": "1W",
        "Rarity": "Uncommon",
        "Artist": "Lake Hurwitz",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "White",
        "Type": "Other",
        "Weight": 0.39,
        "Use": 1
    },
    {
        "Name": "Moorland Drifter",
        "OracleType": "Creature - Spirit 2/2",
        "Mana": "1W",
        "Rarity": "Common",
        "Artist": "Ryan Yee",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "White",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Vessel of Ephemera",
        "OracleType": "Enchantment",
        "Mana": "1W",
        "Rarity": "Common",
        "Artist": "Kieran Yanner",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "White",
        "Type": "Other",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Expose Evil",
        "OracleType": "Instant",
        "Mana": "1W",
        "Rarity": "Common",
        "Artist": "Jama Jurabaev",
        "Edition": "Shadows over Innistrad",
        "CMC": 2,
        "Color": "White",
        "Type": "Other",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Bound by Moonsilver",
        "OracleType": "Enchantment - Aura",
        "Mana": "2W",
        "Rarity": "Uncommon",
        "Artist": "Joseph Meehan",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "White",
        "Type": "Other",
        "Weight": 0.39,
        "Use": 1
    },
    {
        "Name": "Pious Evangel",
        "OracleType": "Creature - Human Cleric 2/2",
        "Mana": "2W",
        "Rarity": "Uncommon",
        "Artist": "Kev Walker",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "White",
        "Type": "Creature",
        "Weight": 0.39,
        "Use": 1
    },
    {
        "Name": "Survive the Night",
        "OracleType": "Instant",
        "Mana": "2W",
        "Rarity": "Common",
        "Artist": "Svetlin Velinov",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "White",
        "Type": "Other",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Militant Inquisitor",
        "OracleType": "Creature - Human Cleric 2/3",
        "Mana": "2W",
        "Rarity": "Common",
        "Artist": "Karl Kopinski",
        "Edition": "Shadows over Innistrad",
        "CMC": 3,
        "Color": "White",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Silverstrike",
        "OracleType": "Instant",
        "Mana": "3W",
        "Rarity": "Uncommon",
        "Artist": "Lius Lasahido",
        "Edition": "Shadows over Innistrad",
        "CMC": 4,
        "Color": "White",
        "Type": "Other",
        "Weight": 0.39,
        "Use": 1
    },
    {
        "Name": "Apothecary Geist",
        "OracleType": "Creature - Spirit 2/3",
        "Mana": "3W",
        "Rarity": "Common",
        "Artist": "Franz Vohwinkel",
        "Edition": "Shadows over Innistrad",
        "CMC": 4,
        "Color": "White",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Inquisitor's Ox",
        "OracleType": "Creature - Ox 2/5",
        "Mana": "3W",
        "Rarity": "Common",
        "Artist": "Vincent Proce",
        "Edition": "Shadows over Innistrad",
        "CMC": 4,
        "Color": "White",
        "Type": "Creature",
        "Weight": 1.22,
        "Use": 1
    },
    {
        "Name": "Descend upon the Sinful",
        "OracleType": "Sorcery",
        "Mana": "4WW",
        "Rarity": "Mythic Rare",
        "Artist": "Tyler Jacobson",
        "Edition": "Shadows over Innistrad",
        "CMC": 6,
        "Color": "White",
        "Type": "Other",
        "Weight": 0.1,
        "Use": 1
    },
    {
        "Name": "From Under the Floorboards",
        "OracleType": "Sorcery",
        "Mana": "3BB",
        "Rarity": "Rare",
        "Artist": "Steven Belledin",
        "Edition": "Shadows over Innistrad",
        "CMC": 5,
        "Color": "Black",
        "Type": "Other",
        "Weight": 0.19,
        "Use": 1
    },
    {
        "Name": "Morkrut Necropod",
        "OracleType": "Creature - Slug Horror 7/7",
        "Mana": "5B",
        "Rarity": "Uncommon",
        "Artist": "Alejandro Mirabal",
        "Edition": "Shadows over Innistrad",
        "CMC": 6,
        "Color": "Black",
        "Type": "Creature",
        "Weight": 0.39,
        "Use": 1
    }
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mcrawford\Projects\Education\Angular\mtg-generator\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map