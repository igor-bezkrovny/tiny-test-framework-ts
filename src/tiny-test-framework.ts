'use strict';

// Assertion types
import { AssertionType } from './assertionStyles/assertionType';
import { Expect } from './assertionStyles/expect';

// Operators
import { EqOperator } from './operators/eqOperator';
import { BeGreaterThanOperator } from './operators/beGreaterThanOperator';

/**
 * Implementation of expect assertion style (function)
 * @see {@link expect}
 * @see {@link eq}
 * @see {@link beGreaterThan}
 *
 * @example
 * ```typescript
 * console.log(  expect(273).not.to(eq( -273 ))  );
 * ```
 */
export function expect(valueToCheck : AssertionType) {
	return new Expect(valueToCheck);
}

/**
 * @param {AssertionType} value value to check for equality
 *
 * @see {@link expect}
 * @see {@link beGreaterThan}
 */
export function eq(value : AssertionType) {
	return new EqOperator(value);
}

/**
 * @param {AssertionType} value value to check for being greater
 *
 * @see {@link expect}
 * @see {@link eq}
 */
export function beGreaterThan(value : AssertionType) {
	return new BeGreaterThanOperator(value);
}
