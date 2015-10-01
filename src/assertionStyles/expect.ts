'use strict';

import { BaseOperator } from '../operators/baseOperator'
import { AssertionType } from './assertionType'

/**
 * Implementation of Expect assertion style
 *
 * @see {@link expect}
 * @see {@link eq}
 * @see {@link beGreaterThan}
 */
export class Expect {
	private _value : AssertionType;
	private _isNegate : boolean;

	constructor (valueToCheck : AssertionType) {
		this._value = valueToCheck;
		this._isNegate = false;
	}

	/**
	 * Negates the expression
	 */
	get not () {
		this._isNegate = !this._isNegate;
		return this;
	}

	/**
	 * Expects instance of BaseOperator Child (instance of EqOperator/BeGreaterThanOperator)

	 * @see {@link expect}
	 * @see {@link eq}
	 * @see {@link beGreaterThan}
	 */
	to (operator : BaseOperator) {
		if (BaseOperator.isBaseOperator(operator)) {
			const result = operator.test(this._value);
			return this._isNegate ? !result : result;
		}

		throw new Error("Expect#to: method argument expected to be a child of BaseOperator")
	}
}
