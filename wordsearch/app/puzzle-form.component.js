System.register(['angular2/core', './puzzle-spec'], function(exports_1, context_1) {
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
    var core_1, puzzle_spec_1;
    var PuzzleFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (puzzle_spec_1_1) {
                puzzle_spec_1 = puzzle_spec_1_1;
            }],
        execute: function() {
            PuzzleFormComponent = (function () {
                function PuzzleFormComponent() {
                    this.puzzleSpec = new puzzle_spec_1.PuzzleSpec();
                    this.level = 'intermediate';
                    this.submit = new core_1.EventEmitter();
                }
                PuzzleFormComponent.prototype.ngOnInit = function () {
                    this.setOptions(this.level);
                };
                PuzzleFormComponent.prototype.setOptions = function (level) {
                    this.level = level;
                    if (this.level == 'basic') {
                        this.puzzleSpec.numRows = 11;
                        this.puzzleSpec.numCols = 11;
                        this.puzzleSpec.diagonal = true;
                        this.puzzleSpec.backward = false;
                    }
                    else if (this.level == 'intermediate') {
                        this.puzzleSpec.numRows = 13;
                        this.puzzleSpec.numCols = 13;
                        this.puzzleSpec.diagonal = true;
                        this.puzzleSpec.backward = false;
                    }
                    else {
                        this.puzzleSpec.numRows = 16;
                        this.puzzleSpec.numCols = 16;
                        this.puzzleSpec.diagonal = true;
                        this.puzzleSpec.backward = true;
                    }
                };
                PuzzleFormComponent.prototype.submitPuzzleForm = function (e) {
                    this.submit.emit();
                };
                PuzzleFormComponent = __decorate([
                    core_1.Component({
                        selector: 'puzzle-form',
                        templateUrl: 'app/puzzle-form.component.html',
                        inputs: ['puzzleSpec', 'level'],
                        outputs: ['submit'],
                        styles: ["\n        @media print {\n            h1, form {\n                display:none;\n            }\n        }\n    "],
                    }), 
                    __metadata('design:paramtypes', [])
                ], PuzzleFormComponent);
                return PuzzleFormComponent;
            }());
            exports_1("PuzzleFormComponent", PuzzleFormComponent);
        }
    }
});
//# sourceMappingURL=puzzle-form.component.js.map