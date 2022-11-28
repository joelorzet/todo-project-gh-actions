import { describe, expect, test } from 'vitest';

describe('testing basics maths operations', () => {
	test('sum 2 numbers', () => {
		expect(1 + 1).toBe(2);
	});

	test('substract 2 numbers', () => {
		expect(5 - 1).toBe(4);
	});

	test('multiply 2 numbers', () => {
		expect(2 * 5).toBe(10);
	});

	test('divide 2 numbers', () => {
		expect(18 / 3).toBe(6);
	});
});

describe('all test running ok', () => {
	test('last check', () => {
		expect('hello world').toBeTruthy();
	});
});
