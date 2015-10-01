import { AssertionType } from '../assertionStyles/assertionType';
export declare abstract class BaseOperator {
    protected _value: AssertionType;
    constructor(operatorValue: AssertionType);
    abstract test(value: AssertionType): boolean;
    /**
     * Custom type guard (to tell TypeScript's _type system_ that obj is or isn't BaseOperator)
     */
    static isBaseOperator(obj: any): obj is BaseOperator;
    /**
     * Checks and throws exception if valueToCheck is not a number
     * @param {AssertionType} value valueToCheck to check
     * @param {string} valueOwner valueToCheck owner name, for example, "operator"
     */
    static checkForNumber(value: AssertionType, valueOwner: string): void;
    /**
     * Checks and throws an exception if the value is 'not a number' number (isNaN)
     * @param {AssertionType} value valueToCheck to check
     * @param {string} valueOwner valueToCheck owner name, for example, "operator"
     */
    static checkForNaN(value: AssertionType, valueOwner: string): void;
}
