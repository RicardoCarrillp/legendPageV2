export interface Squares {
    text: string,
    img: string,
    url: string,
}
export class Squares {
    constructor(text, img, url) {
        this.text = text;
        this.img = img;
        this.url = url;
    }
} 