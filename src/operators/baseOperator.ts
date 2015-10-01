'use strict';

import { AssertionType } from '../assertionStyles/assertionType'

export abstract class BaseOperator {
	protected _value : AssertionType;

	constructor(operatorValue : AssertionType) {
		this._value = operatorValue;
	}

	abstract test(value : AssertionType) : boolean;

	/**
	 * Custom type guard (to tell TypeScript's _type system_ that obj is or isn't BaseOperator)
	 */
	static isBaseOperator(obj : any) : obj is BaseOperator {
		return obj instanceof BaseOperator;
	}

	/**
	 * Checks and throws exception if valueToCheck is not a number
	 * @param {AssertionType} value valueToCheck to check
	 * @param {string} valueOwner valueToCheck owner name, for example, "operator"
	 */
	static checkForNumber(value : AssertionType, valueOwner : string) {
		if(typeof value !== 'number') {
			throw new Error(`${valueOwner} argument should be a number. ${typeof value} is taken`);
		}
	}

	/**
	 * Checks and throws an exception if the value is 'not a number' number (isNaN)
	 * @param {AssertionType} value valueToCheck to check
	 * @param {string} valueOwner valueToCheck owner name, for example, "operator"
	 */
	static checkForNaN(value : AssertionType, valueOwner : string) {
		if(typeof value === "number" && isNaN(value)) {
			throw new Error(`${valueOwner} argument should be a number. NaN is taken`);
		}
	}

}
