import Grimpan from './AbstarctGrimpan.js';
// singleton 패턴 적용
class IEGrimpan extends Grimpan {
    static instance;
    initialize() { }
    initializeMenu() { }
    static getInstance() {
        if (!this.instance) {
            this.instance = new IEGrimpan(document.querySelector('#canvas'));
        }
        return this.instance;
    }
}
export default IEGrimpan;
