'use strict';

import { AssertionType } from '../assertionStyles/assertionType'
import { BaseOperator } from './baseOperator'

export class BeGreaterThanOperator extends BaseOperator {
	/**
	 * Check if valueToCheck is greater than operator argument (this._value)
	 */
	test(valueToCheck : AssertionType) {
		BaseOperator.checkForNumber(this._value, "beGreaterThan");
		BaseOperator.checkForNumber(valueToCheck, "expect");

		BaseOperator.checkForNaN(this._value, "beGreaterThan");
		BaseOperator.checkForNaN(valueToCheck, "expect");

		return valueToCheck > this._value;
	}
}
