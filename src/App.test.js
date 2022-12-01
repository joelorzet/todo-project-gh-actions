/* globals describe it expect  */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('testing basics maths operations', () => {
	it('sum 2 numbers', () => {
		expect(1 + 1).toBe(2);
	});

	it('substract 2 numbers', () => {
		expect(5 - 1).toBe(4);
	});

	it('multiply 2 numbers', () => {
		expect(2 * 5).toBe(10);
	});

	it('divide 2 numbers', () => {
		expect(18 / 3).toBe(6);
	});
});

describe('should render a component', () => {
	it('should have the text "Click"', () => {
		render(<App />);

		expect(screen.getByText('Click')).toBeDefined();
	});
});

describe('all should running ok', () => {
	it('last check', () => {
		expect('hello world').toBeTruthy();
	});
});
