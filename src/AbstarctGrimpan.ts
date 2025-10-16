export default abstract class Grimpan {
	protected constructor(canvas: HTMLElement | null) {
		if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
			throw new Error('Canvas 엘리먼트를 입력하세요.');
		}
	}
	abstract initialize(): void;
	abstract initializeMenu(): void;
	static getInstance() {}
}
