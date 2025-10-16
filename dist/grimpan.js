/** 심볼을 사용하여 private 생성자를 구현할 수 있음
 * Symbol() === Symbol() => false (항상 새로운 심볼을 생성)
 * Symbol.for('key') === Symbol.for('key') => true (같은 키로 심볼을 공유)
 * 따라서, new Grimpan()을 방지하기 위해 심볼을 사용
 */
const GRIMPAN_CONSTRUCTOR_SYMBOL = Symbol();

// singleton 패턴 적용
class Grimpan {
    static instance;
    constructor(canvas, symbol) {
        if(symbol !== GRIMPAN_CONSTRUCTOR_SYMBOL) {
            throw new Error(`new를 통해서 호출할 수 없습니다.`);
        }
        if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
            throw new Error('Canvas 엘리먼트를 입력하세요.');
        }
    }
    initialize() { }
    initializeMenu() { }
    static getInstance() {
        if (!this.instance) {
            this.instance = new Grimpan(document.querySelector('#canvas'), GRIMPAN_CONSTRUCTOR_SYMBOL);
        }
        return this.instance;
    }
}
export default Grimpan;
