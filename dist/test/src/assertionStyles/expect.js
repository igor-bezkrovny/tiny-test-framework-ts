'use strict';
var baseOperator_1 = require('../operators/baseOperator');
/**
 * Implementation of Expect assertion style
 *
 * @see {@link expect}
 * @see {@link eq}
 * @see {@link beGreaterThan}
 */
var Expect = (function () {
    function Expect(valueToCheck) {
        this._value = valueToCheck;
        this._isNegate = false;
    }
    Object.defineProperty(Expect.prototype, "not", {
        /**
         * Negates the expression
         */
        get: function () {
            this._isNegate = !this._isNegate;
            return this;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Expects instance of BaseOperator Child (instance of EqOperator/BeGreaterThanOperator)

     * @see {@link expect}
     * @see {@link eq}
     * @see {@link beGreaterThan}
     */
    Expect.prototype.to = function (operator) {
        if (baseOperator_1.BaseOperator.isBaseOperator(operator)) {
            var result = operator.test(this._value);
            return this._isNegate ? !result : result;
        }
        throw new Error("Expect#to: method argument expected to be a child of BaseOperator");
    };
    return Expect;
})();
exports.Expect = Expect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2Fzc2VydGlvblN0eWxlcy9leHBlY3QudHMiXSwibmFtZXMiOlsiRXhwZWN0IiwiRXhwZWN0LmNvbnN0cnVjdG9yIiwiRXhwZWN0Lm5vdCIsIkV4cGVjdC50byJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBRWIsNkJBQTZCLDJCQUM3QixDQUFDLENBRHVEO0FBR3hEOzs7Ozs7R0FNRztBQUNIO0lBSUNBLGdCQUFhQSxZQUE0QkE7UUFDeENDLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLFlBQVlBLENBQUNBO1FBQzNCQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxLQUFLQSxDQUFDQTtJQUN4QkEsQ0FBQ0E7SUFLREQsc0JBQUlBLHVCQUFHQTtRQUhQQTs7V0FFR0E7YUFDSEE7WUFDQ0UsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0E7WUFDakNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO1FBQ2JBLENBQUNBOzs7T0FBQUY7SUFFREE7Ozs7OztPQU1HQTtJQUNIQSxtQkFBRUEsR0FBRkEsVUFBSUEsUUFBdUJBO1FBQzFCRyxFQUFFQSxDQUFDQSxDQUFDQSwyQkFBWUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDM0NBLElBQU1BLE1BQU1BLEdBQUdBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1lBQzFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxDQUFDQSxNQUFNQSxHQUFHQSxNQUFNQSxDQUFDQTtRQUMxQ0EsQ0FBQ0E7UUFFREEsTUFBTUEsSUFBSUEsS0FBS0EsQ0FBQ0EsbUVBQW1FQSxDQUFDQSxDQUFBQTtJQUNyRkEsQ0FBQ0E7SUFDRkgsYUFBQ0E7QUFBREEsQ0FBQ0EsQUFoQ0QsSUFnQ0M7QUFoQ1ksY0FBTSxTQWdDbEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCB7IEJhc2VPcGVyYXRvciB9IGZyb20gJy4uL29wZXJhdG9ycy9iYXNlT3BlcmF0b3InXHJcbmltcG9ydCB7IEFzc2VydGlvblR5cGUgfSBmcm9tICcuL2Fzc2VydGlvblR5cGUnXHJcblxyXG4vKipcclxuICogSW1wbGVtZW50YXRpb24gb2YgRXhwZWN0IGFzc2VydGlvbiBzdHlsZVxyXG4gKlxyXG4gKiBAc2VlIHtAbGluayBleHBlY3R9XHJcbiAqIEBzZWUge0BsaW5rIGVxfVxyXG4gKiBAc2VlIHtAbGluayBiZUdyZWF0ZXJUaGFufVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEV4cGVjdCB7XHJcblx0cHJpdmF0ZSBfdmFsdWUgOiBBc3NlcnRpb25UeXBlO1xyXG5cdHByaXZhdGUgX2lzTmVnYXRlIDogYm9vbGVhbjtcclxuXHJcblx0Y29uc3RydWN0b3IgKHZhbHVlVG9DaGVjayA6IEFzc2VydGlvblR5cGUpIHtcclxuXHRcdHRoaXMuX3ZhbHVlID0gdmFsdWVUb0NoZWNrO1xyXG5cdFx0dGhpcy5faXNOZWdhdGUgPSBmYWxzZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIE5lZ2F0ZXMgdGhlIGV4cHJlc3Npb25cclxuXHQgKi9cclxuXHRnZXQgbm90ICgpIHtcclxuXHRcdHRoaXMuX2lzTmVnYXRlID0gIXRoaXMuX2lzTmVnYXRlO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBFeHBlY3RzIGluc3RhbmNlIG9mIEJhc2VPcGVyYXRvciBDaGlsZCAoaW5zdGFuY2Ugb2YgRXFPcGVyYXRvci9CZUdyZWF0ZXJUaGFuT3BlcmF0b3IpXHJcblxyXG5cdCAqIEBzZWUge0BsaW5rIGV4cGVjdH1cclxuXHQgKiBAc2VlIHtAbGluayBlcX1cclxuXHQgKiBAc2VlIHtAbGluayBiZUdyZWF0ZXJUaGFufVxyXG5cdCAqL1xyXG5cdHRvIChvcGVyYXRvciA6IEJhc2VPcGVyYXRvcikge1xyXG5cdFx0aWYgKEJhc2VPcGVyYXRvci5pc0Jhc2VPcGVyYXRvcihvcGVyYXRvcikpIHtcclxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gb3BlcmF0b3IudGVzdCh0aGlzLl92YWx1ZSk7XHJcblx0XHRcdHJldHVybiB0aGlzLl9pc05lZ2F0ZSA/ICFyZXN1bHQgOiByZXN1bHQ7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0I3RvOiBtZXRob2QgYXJndW1lbnQgZXhwZWN0ZWQgdG8gYmUgYSBjaGlsZCBvZiBCYXNlT3BlcmF0b3JcIilcclxuXHR9XHJcbn1cclxuIl19