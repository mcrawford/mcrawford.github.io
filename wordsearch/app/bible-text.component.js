System.register(['angular2/core', 'angular2/http', './bible-text.service'], function(exports_1, context_1) {
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
    var core_1, http_1, bible_text_service_1;
    var BibleTextComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (bible_text_service_1_1) {
                bible_text_service_1 = bible_text_service_1_1;
            }],
        execute: function() {
            BibleTextComponent = (function () {
                function BibleTextComponent(_bibleTextService) {
                    this._bibleTextService = _bibleTextService;
                }
                BibleTextComponent.prototype.ngOnInit = function () {
                    this.getText();
                };
                BibleTextComponent.prototype.getText = function () {
                    var _this = this;
                    this._bibleTextService.getText()
                        .subscribe(function (text) { return _this.text = text; }, function (error) { return _this.errorMessage = error; });
                };
                BibleTextComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n  <p>{{ text }}</p>\n  <p class=\"error\">{{ errorMessage }}</p>\n  ",
                        providers: [
                            http_1.HTTP_PROVIDERS, bible_text_service_1.BibleTextService
                        ]
                    }), 
                    __metadata('design:paramtypes', [bible_text_service_1.BibleTextService])
                ], BibleTextComponent);
                return BibleTextComponent;
            }());
            exports_1("BibleTextComponent", BibleTextComponent);
        }
    }
});
//# sourceMappingURL=bible-text.component.js.map