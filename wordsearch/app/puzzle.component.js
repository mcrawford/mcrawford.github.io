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
    var PuzzleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PuzzleComponent = (function () {
                function PuzzleComponent() {
                    this.puzzle = null;
                }
                PuzzleComponent = __decorate([
                    core_1.Component({
                        selector: 'puzzle',
                        inputs: ['puzzle'],
                        template: "\n        <div class=\"puzzle\">\n            <table class=\"table table-condensed\">\n                <tr *ngFor=\"#row of puzzle.getRows()\">\n                    <td *ngFor=\"#i of row\" class=\"text-center\">{{ i }} </td>\n                </tr>\n            </table>\n        </div>\n    ",
                        styles: ["\n        .puzzle {\n            border-color: #999;\n            border-width: 1px;\n            border-radius: 4px;\n            border-style: solid;\n            margin-bottom: 20px;\n            padding: 10px;\n        }\n        .table {\n            margin-bottom: 0;\n        }\n        .table > tbody > tr > td {\n            font-size: 18px;\n            line-height: 2;\n            border-top: none;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PuzzleComponent);
                return PuzzleComponent;
            }());
            exports_1("PuzzleComponent", PuzzleComponent);
        }
    }
});
//# sourceMappingURL=puzzle.component.js.map