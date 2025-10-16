// singleton 패턴 적용
import Grimpan from './AbstarctGrimpan.js';

class ChromeGrimpan extends Grimpan {
	private static instance: ChromeGrimpan;

	initialize() {}
	initializeMenu() {}

	static override getInstance() {
		if (!this.instance) {
			this.instance = new ChromeGrimpan(document.querySelector('#canvas'));
		}
		return this.instance;
	}
}

export default ChromeGrimpan;
