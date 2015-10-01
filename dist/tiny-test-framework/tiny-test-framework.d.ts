import { AssertionType } from './assertionStyles/assertionType';
import { Expect } from './assertionStyles/expect';
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
export declare function expect(valueToCheck: AssertionType): Expect;
/**
 * @param {AssertionType} value value to check for equality
 *
 * @see {@link expect}
 * @see {@link beGreaterThan}
 */
export declare function eq(value: AssertionType): EqOperator;
/**
 * @param {AssertionType} value value to check for being greater
 *
 * @see {@link expect}
 * @see {@link eq}
 */
export declare function beGreaterThan(value: AssertionType): BeGreaterThanOperator;
