import { BaseOperator } from './baseOperator';
import { AssertionType } from '../assertionStyles/assertionType';
export declare class EqOperator extends BaseOperator {
    /**
     * Check if test valueToCheck (valueToCheck) is equal to operator argument (this._value)
     */
    test(valueToCheck: AssertionType): boolean;
}
