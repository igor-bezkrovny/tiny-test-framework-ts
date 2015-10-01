'use strict';

import { BaseOperator } from './baseOperator'
import { AssertionType } from '../assertionStyles/assertionType'

export class EqOperator extends BaseOperator {
	/**
	 * Check if test valueToCheck (valueToCheck) is equal to operator argument (this._value)
	 */
	test(valueToCheck : AssertionType) {
		return valueToCheck === this._value;
	}
}
