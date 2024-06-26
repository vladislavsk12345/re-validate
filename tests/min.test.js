import { expect, test } from 'vitest';
import * as cjs from './dist/cjs/index.js';
import * as es from './dist/es/index.js';
test('min validator test', () => {
	function f({ min }) {
		expect(min(5,7), '5>7 should return false').toBe(false);
		expect(min(7,5), '7>5 should return true').toBe(true);
	}
	f(cjs);
	f(es);
});
