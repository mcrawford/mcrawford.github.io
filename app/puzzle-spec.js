System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PuzzleSpec;
    return {
        setters:[],
        execute: function() {
            PuzzleSpec = (function () {
                function PuzzleSpec(title, text, numRows, numCols, diagonal, backwards) {
                    if (title === void 0) { title = ""; }
                    if (text === void 0) { text = ""; }
                    if (numRows === void 0) { numRows = 14; }
                    if (numCols === void 0) { numCols = 14; }
                    if (diagonal === void 0) { diagonal = true; }
                    if (backwards === void 0) { backwards = false; }
                }
                ;
                return PuzzleSpec;
            }());
            exports_1("PuzzleSpec", PuzzleSpec);
        }
    }
});
//# sourceMappingURL=puzzle-spec.js.map