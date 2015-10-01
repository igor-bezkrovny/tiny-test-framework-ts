import { AssertionType } from '../assertionStyles/assertionType';
import { BaseOperator } from './baseOperator';
export declare class BeGreaterThanOperator extends BaseOperator {
    /**
     * Check if valueToCheck is greater than operator argument (this._value)
     */
    test(valueToCheck: AssertionType): boolean;
}
