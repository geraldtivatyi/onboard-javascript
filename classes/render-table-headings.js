"use strict";
/// <reference path="../interfaces/has-format-method.ts" />
var HFM;
(function (HFM) {
    /**
       * This class is used to inject the created html string containing the headings into the DOM
       * @param div This parameter holds the created div element which contaings the headings html string to be injected into the HTML DOM
    */
    var RenderTableHeading = /** @class */ (function () {
        function RenderTableHeading(container) {
            this.container = container;
        }
        RenderTableHeading.prototype.constructTableHeadings = function (hd) {
            var div = document.createElement('div');
            div.innerHTML = hd.internalFormat();
            div.className = "tablecell";
            div.style.gridTemplateColumns = "repeat(" + hd.arrayLength() + ", 1fr)";
            this.container.append(div);
        };
        return RenderTableHeading;
    }());
    HFM.RenderTableHeading = RenderTableHeading;
})(HFM || (HFM = {}));
//# sourceMappingURL=render-table-headings.js.map