import { HasFormatMethod } from "../interfaces/hasformatmethod.js";

// create table elements and render in browser
export class RenderTableHeading {
    constructor(private container: HTMLDivElement) {}

    constructTableHeadings(element: HasFormatMethod){
        let div = document.createElement('div');
        div.innerHTML = element.internalFormat();
        div.className = "tablecell";

        this.container.append(div);
    }
}