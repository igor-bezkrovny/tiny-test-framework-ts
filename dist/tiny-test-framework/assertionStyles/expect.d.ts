import { BaseOperator } from '../operators/baseOperator';
import { AssertionType } from './assertionType';
/**
 * Implementation of Expect assertion style
 *
 * @see {@link expect}
 * @see {@link eq}
 * @see {@link beGreaterThan}
 */
export declare class Expect {
    private _value;
    private _isNegate;
    constructor(valueToCheck: AssertionType);
    /**
     * Negates the expression
     */
    not: Expect;
    /**
     * Expects instance of BaseOperator Child (instance of EqOperator/BeGreaterThanOperator)

     * @see {@link expect}
     * @see {@link eq}
     * @see {@link beGreaterThan}
     */
    to(operator: BaseOperator): boolean;
}
