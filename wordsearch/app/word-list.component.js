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
    var WordListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            WordListComponent = (function () {
                function WordListComponent() {
                    this.title = '';
                    this.words = [];
                }
                WordListComponent = __decorate([
                    core_1.Component({
                        selector: 'word-list',
                        inputs: ['words', 'title'],
                        template: "\n        <h3 *ngIf=\"title\">{{ title }}</h3>\n        <div class=\"container\">\n            <ul class=\"list-unstyled list-inline row\">\n                <li *ngFor=\"#word of words.sort()\" class=\"col-xs-4\">{{ word }}</li>\n            </ul>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], WordListComponent);
                return WordListComponent;
            }());
            exports_1("WordListComponent", WordListComponent);
        }
    }
});
//# sourceMappingURL=word-list.component.js.map