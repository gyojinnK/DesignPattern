/**
 * Factory Method Pattern
 * - 객체 생성 코드를 서브 클래스에서 구현하도록 위임하는 패턴
 * - 객체 생성 코드를 캡슐화하여 클라이언트 코드와 분리
 * - 객체 생성 로직을 변경하지 않고도 새로운 제품을 추가할 수 있음
 *
 * 장점:
 * - 객체 생성 코드를 서브 클래스에서 구현하므로, 클라이언트 코드가 구체적인 클래스에 의존하지 않음
 * - 새로운 제품을 추가할 때, 기존 코드를 수정하지 않고도 확장 가능
 *
 * 단점:
 * - 클래스 수가 증가하여 복잡성이 증가할 수 있음
 * - 서브 클래스가 많아질 경우, 유지보수가 어려워질 수 있음
 */
import IEGrimpan from './IEGrimpan.js';
import ChromeGrimpan from './ChromeGrimpan.js';
import AbstractGrimpanFactory from './AbstractGrimpanFactory.js';

class ChromeGrimpanFactory extends AbstractGrimpanFactory {
	static override createGrimpan() {
		return ChromeGrimpan.getInstance();
	}
}

class IEGrimpanFactory extends AbstractGrimpanFactory {
	static override createGrimpan() {
		return IEGrimpan.getInstance();
	}
}

class SafariGrimpanFactory extends AbstractGrimpanFactory {
	static override createGrimpan() {
		return SafariGrimpan.getInstance();
	}
}

// const grimpanFactory = (type: string) => {
// 	if (type === 'ie') {
// 		return IEGrimpan.getInstance();
// 	} else if (type === 'chrome') {
// 		return ChromeGrimpan.getInstance();
// 	} else {
// 		throw new Error('일치하는 브라우저 타입이 없습니다.');
// 	}
// };

const main = () => {
	const grimpan = ChromeGrimpanFactory.createGrimpan();
	grimpan.initialize();
	grimpan.initializeMenu();
};

main();
