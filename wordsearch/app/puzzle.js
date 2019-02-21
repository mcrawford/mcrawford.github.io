System.register(['./grid'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var grid_1;
    var Puzzle;
    return {
        setters:[
            function (grid_1_1) {
                grid_1 = grid_1_1;
            }],
        execute: function() {
            Puzzle = (function (_super) {
                __extends(Puzzle, _super);
                function Puzzle(words, rows, columns, diagonal, backward) {
                    if (rows === void 0) { rows = 15; }
                    if (columns === void 0) { columns = 15; }
                    if (diagonal === void 0) { diagonal = true; }
                    if (backward === void 0) { backward = false; }
                    _super.call(this, rows, columns);
                    this.words = [];
                    this.usedWords = [];
                    this.usedIndices = [];
                    this.skippedWords = [];
                    this.rows = 15;
                    this.columns = 15;
                    this.diagonal = false;
                    this.backward = false;
                    this.directionPositions = [];
                    this.numWordsByDirection = [];
                    this.DIRS = {
                        right: [0, 1],
                        down: [1, 0],
                        rightdown: [1, 1],
                        left: [0, -1],
                        up: [-1, 0],
                        rightup: [-1, 1],
                        leftdown: [1, -1],
                        leftup: [-1, -1]
                    };
                    this.words = words;
                    this.rows = rows;
                    this.columns = columns;
                    this.diagonal = diagonal;
                    this.backward = backward;
                    var directions = [this.DIRS.right, this.DIRS.down];
                    if (diagonal) {
                        directions.push(this.DIRS.rightdown);
                        directions.push(this.DIRS.rightup);
                    }
                    if (backward) {
                        directions.push(this.DIRS.left);
                        directions.push(this.DIRS.up);
                    }
                    if (diagonal && backward) {
                        directions.push(this.DIRS.leftup);
                        directions.push(this.DIRS.leftdown);
                    }
                    var numDirections = directions.length;
                    for (var i = 0; i < this.size; i++) {
                        for (var j = 0; j < numDirections; j++) {
                            this.directionPositions.push({
                                direction: directions[j],
                                directionIdx: j,
                                position: i
                            });
                        }
                    }
                    this.numWordsByDirection = new Array(numDirections);
                    this.numWordsByDirection.fill(0);
                    this.generate();
                }
                Puzzle.prototype.generate = function () {
                    var shuffledWords = this.shuffle(this.words);
                    //var shuffledWords = this.words;
                    var numDirectionPositions = this.directionPositions.length;
                    loopWords: do {
                        var word = shuffledWords.pop();
                        var letters = word.split('');
                        this.shuffle(this.directionPositions);
                        var addedWord = false;
                        for (var i = 0; i < numDirectionPositions; i++) {
                            var dirPos = this.directionPositions[i];
                            if (this.willFit(letters, dirPos.position, dirPos.direction) && !this.overlapsExistingWord(letters, dirPos.position, dirPos.direction)) {
                                this.putWord(letters, dirPos.position, dirPos.direction);
                                this.usedWords.push(word);
                                this.usedIndices.push(this.getIndices(word.length, dirPos.position, dirPos.direction));
                                this.numWordsByDirection[dirPos.directionIdx]++;
                                addedWord = true;
                                break;
                            }
                        }
                        if (!addedWord) {
                            this.skippedWords.push(word);
                        }
                    } while (shuffledWords.length > 0);
                };
                Puzzle.prototype.fillWithRandomLetters = function () {
                    for (var i = 0; i < this.size; i++) {
                        if (this.get(i) == '-') {
                            this.put(this.getRandomLetter(), i);
                        }
                    }
                };
                Puzzle.prototype.willFit = function (letters, pos, dir) {
                    var len = letters.length;
                    var point = this.at(pos);
                    var endRow = len * dir[0] + point.row;
                    if (endRow < 0 || endRow > this.rows) {
                        return false;
                    }
                    var endCol = len * dir[1] + point.col;
                    if (endCol < 0 || endCol > this.columns) {
                        return false;
                    }
                    for (var i = 0; i < len; i++) {
                        var letter = letters[i];
                        var curRow = point.row + i * dir[0];
                        var curCol = point.col + i * dir[1];
                        var curLetter = this.get(curRow, curCol);
                        if (curLetter != '-' && curLetter != letter) {
                            return false;
                        }
                    }
                    return true;
                };
                Puzzle.prototype.overlapsExistingWord = function (letters, pos, dir) {
                    var indices = this.getIndices(letters.length, pos, dir);
                    var len = indices.length;
                    var usedIndicesLen = this.usedIndices.length;
                    for (var i = 0; i < usedIndicesLen; i++) {
                        var usedIndices = this.usedIndices[i];
                        var usedLen = usedIndices.length;
                        var numDupes = 0;
                        for (var j = 0; j < len; j++) {
                            for (var k = 0; k < usedLen; k++) {
                                if (indices[j] == usedIndices[k]) {
                                    if (++numDupes > 1) {
                                        return true;
                                    }
                                }
                            }
                        }
                    }
                    return false;
                };
                Puzzle.prototype.contains = function (word) {
                    // TODO: I'm not sure this works at all...
                    var len = word.length;
                    var numPositions = this.positions.length;
                    var numDirections = this.DIRS.length;
                    for (var i = 0; i < numPositions; i++) {
                        var pos = this.positions[i];
                        loopDirection: for (var j = 0; j < numDirections; j++) {
                            var dir = this.DIRS[j];
                            if (this.getWord(len, pos, dir) == word) {
                                return true;
                            }
                        }
                    }
                    return false;
                };
                Puzzle.prototype.getWord = function (numLetters, pos, dir) {
                    var word = "";
                    var point = this.at(pos);
                    for (var i = 0; i < numLetters; i++) {
                        var curRow = point.row + i * dir[0];
                        var curCol = point.col + i * dir[1];
                        word += this.get(curRow, curCol);
                    }
                    return word;
                };
                Puzzle.prototype.putWord = function (letters, pos, dir) {
                    var len = letters.length;
                    var point = this.at(pos);
                    for (var i = 0; i < len; i++) {
                        var letter = letters[i];
                        var curRow = point.row + i * dir[0];
                        var curCol = point.col + i * dir[1];
                        this.put(letter, curRow, curCol);
                    }
                };
                Puzzle.prototype.getIndices = function (len, pos, dir) {
                    var indices = [];
                    var point = this.at(pos);
                    for (var i = 0; i < len; i++) {
                        indices.push(this.index(point.row + i * dir[0], point.col + i * dir[1]));
                    }
                    return indices;
                };
                Puzzle.prototype.getRows = function () {
                    var rows = [];
                    for (var i = 0; i < this.rows; i++) {
                        var row = [];
                        for (var j = 0; j < this.columns; j++) {
                            row.push(this.get(i, j));
                        }
                        rows.push(row);
                    }
                    return rows;
                };
                Puzzle.prototype.getNumberOfLettersInUsedWords = function () {
                    var n = 0;
                    var len = this.usedWords.length;
                    for (var i = 0; i < len; i++) {
                        n += this.usedWords[i].length;
                    }
                    return n;
                };
                Puzzle.prototype.shuffle = function (array) {
                    var counter = array.length;
                    // While there are elements in the array
                    while (counter > 0) {
                        // Pick a random index
                        var index = Math.floor(Math.random() * counter);
                        // Decrease counter by 1
                        counter--;
                        // And swap the last element with it
                        var temp = array[counter];
                        array[counter] = array[index];
                        array[index] = temp;
                    }
                    return array;
                };
                Puzzle.prototype.getRandomLetter = function () {
                    return String.fromCharCode(Math.random() * (90 - 65) + 65);
                };
                return Puzzle;
            }(grid_1.Grid));
            exports_1("Puzzle", Puzzle);
        }
    }
});
//# sourceMappingURL=puzzle.js.map