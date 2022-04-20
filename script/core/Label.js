import { Node } from "./Node.js";

export class Label extends Node {
    constructor() {
        super();
        this._text = "";
        this.size = 10;
        this.family = "Courier New Lucida Console";
        this.textColor = "red";
    }

    get text() {
        return this._text;
    }
    set text(value){
        this._text = value;
        this.elm.innerText = value;
    }

    get fontsize() {
        return this.size;
    }
    set fontsize(value){
        this.size = value;
        this.elm.style.fontSize = value+"px";
    }

    get fontfamily() {
        return this.family;
    }
    set fontfamily(value){
        this.family = value;
        this.elm.style.fontFamily = value;
    }

    get color() {
        return this.textColor;
    }
    set color(value){
        this.textColor = value;
        this.elm.style.color = value;
    }

}