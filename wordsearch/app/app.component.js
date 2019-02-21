System.register(['angular2/core', './word-list.component', './word-list.service', './puzzle-spec', './puzzle.service', './puzzle.component', './puzzle-form.component'], function(exports_1, context_1) {
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
    var core_1, word_list_component_1, word_list_service_1, puzzle_spec_1, puzzle_service_1, puzzle_component_1, puzzle_form_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (word_list_component_1_1) {
                word_list_component_1 = word_list_component_1_1;
            },
            function (word_list_service_1_1) {
                word_list_service_1 = word_list_service_1_1;
            },
            function (puzzle_spec_1_1) {
                puzzle_spec_1 = puzzle_spec_1_1;
            },
            function (puzzle_service_1_1) {
                puzzle_service_1 = puzzle_service_1_1;
            },
            function (puzzle_component_1_1) {
                puzzle_component_1 = puzzle_component_1_1;
            },
            function (puzzle_form_component_1_1) {
                puzzle_form_component_1 = puzzle_form_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_wordListService, _puzzleService) {
                    this._wordListService = _wordListService;
                    this._puzzleService = _puzzleService;
                    this.puzzleSpec = new puzzle_spec_1.PuzzleSpec();
                    this.words = [];
                    this.puzzle = null;
                }
                AppComponent.prototype.createPuzzle = function (e) {
                    this.words = this._wordListService.getWordList(this.puzzleSpec.text);
                    this.puzzle = this._puzzleService.generatePuzzle(this.words, this.puzzleSpec.numRows, this.puzzleSpec.numCols, this.puzzleSpec.diagonal, this.puzzleSpec.backward);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <h1>Word Search Generator</h1>\n        <puzzle-form [puzzleSpec]=\"puzzleSpec\" (submit)=\"createPuzzle(e)\"></puzzle-form>\n        <h2 class=\"text-center\">{{ puzzleSpec.title }}</h2>\n        <puzzle *ngIf=\"puzzle\" [puzzle]=\"puzzle\"></puzzle>\n        <word-list *ngIf=\"puzzle\" \n                [words]=\"puzzle.usedWords\"></word-list>\n        <word-list *ngIf=\"puzzle && puzzle.skippedWords.length > 0\" class=\"skippedWords\"\n                [words]=\"puzzle.skippedWords\" \n                title=\"These words could not fit into the puzzle\"></word-list>\n    ",
                        styles: ["\n        @media print {\n            h1, word-list.skippedWords {\n                display:none;\n            }\n        }\n    "],
                        directives: [word_list_component_1.WordListComponent, puzzle_component_1.PuzzleComponent, puzzle_form_component_1.PuzzleFormComponent],
                        providers: [word_list_service_1.WordListService, puzzle_service_1.PuzzleService]
                    }), 
                    __metadata('design:paramtypes', [word_list_service_1.WordListService, puzzle_service_1.PuzzleService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map