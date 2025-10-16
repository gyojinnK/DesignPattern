/**
 * 자바스크립트 모듈은 싱글톤 패턴을 따른다.
 * 즉, 동일한 모듈을 여러 번 import 하더라도
 * 실제로는 한 번만 로드되고, 같은 인스턴스를 공유한다.
 *
 */
import Grimpan from './grimpan.js';

console.log(Grimpan.getInstance() === Grimpan.getInstance()); // true
