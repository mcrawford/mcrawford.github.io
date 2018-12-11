System.register(['angular2/core', './puzzle'], function(exports_1, context_1) {
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
    var core_1, puzzle_1;
    var PuzzleService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (puzzle_1_1) {
                puzzle_1 = puzzle_1_1;
            }],
        execute: function() {
            PuzzleService = (function () {
                function PuzzleService() {
                    this.skipWords = [];
                }
                PuzzleService.prototype.generatePuzzle = function (words, rows, columns, diagonal, backward) {
                    if (rows === void 0) { rows = 15; }
                    if (columns === void 0) { columns = 15; }
                    if (diagonal === void 0) { diagonal = false; }
                    if (backward === void 0) { backward = false; }
                    var start = new Date().getTime();
                    var loopEnd = new Date().getTime();
                    var puzzle = null;
                    var n = 0;
                    var score = 0;
                    do {
                        var newPuzzle = new puzzle_1.Puzzle(words.slice(), rows, columns, diagonal, backward);
                        var newScore = this.scorePuzzle(newPuzzle);
                        if (newScore > score) {
                            newPuzzle.fillWithRandomLetters();
                            if (!this.puzzleContainsSkipWords(newPuzzle)) {
                                console.log("Found better puzzle with a score of " + Math.round(newScore));
                                puzzle = newPuzzle;
                                score = newScore;
                            }
                        }
                        n++;
                        loopEnd = new Date().getTime();
                    } while (puzzle != null && puzzle.skippedWords.length > 0 && loopEnd - start < 500);
                    console.log("Tried " + n + " puzzles.");
                    return puzzle;
                };
                PuzzleService.prototype.scorePuzzle = function (puzzle) {
                    var score = 0;
                    var numLetters = puzzle.getNumberOfLettersInUsedWords();
                    score += numLetters;
                    var wordsByDirection = puzzle.numWordsByDirection;
                    var directionScore = 0;
                    if (!puzzle.diagonal && !puzzle.backward) {
                        directionScore = Math.pow(wordsByDirection[0] * wordsByDirection[1], 1 / 2);
                    }
                    else if (puzzle.diagonal && !puzzle.backward) {
                        directionScore = Math.pow(wordsByDirection[0] * wordsByDirection[1] * (wordsByDirection[2] + 5), 1 / 3);
                    }
                    else if (puzzle.diagonal && puzzle.backward) {
                        directionScore = Math.pow(wordsByDirection[0] *
                            wordsByDirection[1] *
                            (wordsByDirection[2] + 5) *
                            wordsByDirection[3] *
                            wordsByDirection[4] *
                            (wordsByDirection[5] + 5) *
                            (wordsByDirection[6] + 5) *
                            (wordsByDirection[7] + 5), 1 / 8);
                    }
                    score += 10 * directionScore; // 10 is just an arbitrary scaling factor
                    console.log("--- " + numLetters + " letters, " + Math.round(10 * directionScore) + " for directions (" + wordsByDirection + ") = " + Math.round(score));
                    return score;
                };
                PuzzleService.prototype.puzzleContainsSkipWords = function (puzzle) {
                    var num = this.skipWords.length;
                    for (var i = 0; i < num; i++) {
                        var skipWord = this.skipWords[i];
                        if (puzzle.contains(skipWord)) {
                            return true;
                        }
                    }
                    return false;
                };
                PuzzleService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], PuzzleService);
                return PuzzleService;
            }());
            exports_1("PuzzleService", PuzzleService);
        }
    }
});
//# sourceMappingURL=puzzle.service.js.map