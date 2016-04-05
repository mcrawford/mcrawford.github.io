System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Grid;
    return {
        setters:[],
        execute: function() {
            Grid = (function () {
                function Grid(rows, columns, grid) {
                    this.rows = 0;
                    this.columns = 0;
                    this.size = 0;
                    this.grid = null;
                    this.rows = rows;
                    this.columns = columns;
                    this.size = rows * columns;
                    this.grid = grid ? grid : [];
                }
                Grid.prototype.index = function (rowOrPos, column) {
                    var i = 0;
                    if (column !== undefined) {
                        i = rowOrPos * this.columns + column;
                    }
                    else {
                        i = rowOrPos;
                    }
                    return i;
                };
                Grid.prototype.at = function (position) {
                    var row = Math.floor(position / this.columns);
                    var col = position % this.columns;
                    return { row: row, col: col };
                };
                Grid.prototype.get = function (rowOrPos, column) {
                    var i = this.index(rowOrPos, column);
                    return this.grid[i] ? this.grid[i] : '-';
                };
                Grid.prototype.put = function (value, rowOrPos, column) {
                    var i = this.index(rowOrPos, column);
                    this.grid[i] = value;
                };
                return Grid;
            }());
            exports_1("Grid", Grid);
        }
    }
});
//# sourceMappingURL=grid.js.map