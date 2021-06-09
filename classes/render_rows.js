// generate html string for table rows data and render in browser
var RenderTableRows = /** @class */ (function () {
    function RenderTableRows(recordsStr) {
        this.returnStr = "";
        var table = document.querySelector('#table');
        var myArr = JSON.parse(recordsStr);
        for (var i = 0; i < myArr.length; i++) {
            for (var j = 0; j < myArr[i].length; j++) {
                this.returnStr +=
                    "<div><p>" + myArr[i][j] + "</p></div>";
            }
            var div = document.createElement('div');
            div.innerHTML = this.returnStr;
            div.className = "tablecell";
            table.append(div);
            this.returnStr = "";
        }
    }
    RenderTableRows.prototype.internalFormat = function () {
        return this.returnStr;
    };
    return RenderTableRows;
}());
export { RenderTableRows };
//# sourceMappingURL=render_rows.js.map