export default class Grimpan {
    constructor(canvas) {
        if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
            throw new Error('Canvas 엘리먼트를 입력하세요.');
        }
    }
    static getInstance() { }
}
