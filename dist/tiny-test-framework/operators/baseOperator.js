'use strict';
var BaseOperator = (function () {
    function BaseOperator(operatorValue) {
        this._value = operatorValue;
    }
    /**
     * Custom type guard (to tell TypeScript's _type system_ that obj is or isn't BaseOperator)
     */
    BaseOperator.isBaseOperator = function (obj) {
        return obj instanceof BaseOperator;
    };
    /**
     * Checks and throws exception if valueToCheck is not a number
     * @param {AssertionType} value valueToCheck to check
     * @param {string} valueOwner valueToCheck owner name, for example, "operator"
     */
    BaseOperator.checkForNumber = function (value, valueOwner) {
        if (typeof value !== 'number') {
            throw new Error(valueOwner + " argument should be a number. " + typeof value + " is taken");
        }
    };
    /**
     * Checks and throws an exception if the value is 'not a number' number (isNaN)
     * @param {AssertionType} value valueToCheck to check
     * @param {string} valueOwner valueToCheck owner name, for example, "operator"
     */
    BaseOperator.checkForNaN = function (value, valueOwner) {
        if (typeof value === "number" && isNaN(value)) {
            throw new Error(valueOwner + " argument should be a number. NaN is taken");
        }
    };
    return BaseOperator;
})();
exports.BaseOperator = BaseOperator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZU9wZXJhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29wZXJhdG9ycy9iYXNlT3BlcmF0b3IudHMiXSwibmFtZXMiOlsiQmFzZU9wZXJhdG9yIiwiQmFzZU9wZXJhdG9yLmNvbnN0cnVjdG9yIiwiQmFzZU9wZXJhdG9yLmlzQmFzZU9wZXJhdG9yIiwiQmFzZU9wZXJhdG9yLmNoZWNrRm9yTnVtYmVyIiwiQmFzZU9wZXJhdG9yLmNoZWNrRm9yTmFOIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFJYjtJQUdDQSxzQkFBWUEsYUFBNkJBO1FBQ3hDQyxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxhQUFhQSxDQUFDQTtJQUM3QkEsQ0FBQ0E7SUFJREQ7O09BRUdBO0lBQ0lBLDJCQUFjQSxHQUFyQkEsVUFBc0JBLEdBQVNBO1FBQzlCRSxNQUFNQSxDQUFDQSxHQUFHQSxZQUFZQSxZQUFZQSxDQUFDQTtJQUNwQ0EsQ0FBQ0E7SUFFREY7Ozs7T0FJR0E7SUFDSUEsMkJBQWNBLEdBQXJCQSxVQUFzQkEsS0FBcUJBLEVBQUVBLFVBQW1CQTtRQUMvREcsRUFBRUEsQ0FBQUEsQ0FBQ0EsT0FBT0EsS0FBS0EsS0FBS0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDOUJBLE1BQU1BLElBQUlBLEtBQUtBLENBQUlBLFVBQVVBLHNDQUFpQ0EsT0FBT0EsS0FBS0EsY0FBV0EsQ0FBQ0EsQ0FBQ0E7UUFDeEZBLENBQUNBO0lBQ0ZBLENBQUNBO0lBRURIOzs7O09BSUdBO0lBQ0lBLHdCQUFXQSxHQUFsQkEsVUFBbUJBLEtBQXFCQSxFQUFFQSxVQUFtQkE7UUFDNURJLEVBQUVBLENBQUFBLENBQUNBLE9BQU9BLEtBQUtBLEtBQUtBLFFBQVFBLElBQUlBLEtBQUtBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQzlDQSxNQUFNQSxJQUFJQSxLQUFLQSxDQUFJQSxVQUFVQSwrQ0FBNENBLENBQUNBLENBQUNBO1FBQzVFQSxDQUFDQTtJQUNGQSxDQUFDQTtJQUVGSixtQkFBQ0E7QUFBREEsQ0FBQ0EsQUF0Q0QsSUFzQ0M7QUF0Q3FCLG9CQUFZLGVBc0NqQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IHsgQXNzZXJ0aW9uVHlwZSB9IGZyb20gJy4uL2Fzc2VydGlvblN0eWxlcy9hc3NlcnRpb25UeXBlJ1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VPcGVyYXRvciB7XHJcblx0cHJvdGVjdGVkIF92YWx1ZSA6IEFzc2VydGlvblR5cGU7XHJcblxyXG5cdGNvbnN0cnVjdG9yKG9wZXJhdG9yVmFsdWUgOiBBc3NlcnRpb25UeXBlKSB7XHJcblx0XHR0aGlzLl92YWx1ZSA9IG9wZXJhdG9yVmFsdWU7XHJcblx0fVxyXG5cclxuXHRhYnN0cmFjdCB0ZXN0KHZhbHVlIDogQXNzZXJ0aW9uVHlwZSkgOiBib29sZWFuO1xyXG5cclxuXHQvKipcclxuXHQgKiBDdXN0b20gdHlwZSBndWFyZCAodG8gdGVsbCBUeXBlU2NyaXB0J3MgX3R5cGUgc3lzdGVtXyB0aGF0IG9iaiBpcyBvciBpc24ndCBCYXNlT3BlcmF0b3IpXHJcblx0ICovXHJcblx0c3RhdGljIGlzQmFzZU9wZXJhdG9yKG9iaiA6IGFueSkgOiBvYmogaXMgQmFzZU9wZXJhdG9yIHtcclxuXHRcdHJldHVybiBvYmogaW5zdGFuY2VvZiBCYXNlT3BlcmF0b3I7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDaGVja3MgYW5kIHRocm93cyBleGNlcHRpb24gaWYgdmFsdWVUb0NoZWNrIGlzIG5vdCBhIG51bWJlclxyXG5cdCAqIEBwYXJhbSB7QXNzZXJ0aW9uVHlwZX0gdmFsdWUgdmFsdWVUb0NoZWNrIHRvIGNoZWNrXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlT3duZXIgdmFsdWVUb0NoZWNrIG93bmVyIG5hbWUsIGZvciBleGFtcGxlLCBcIm9wZXJhdG9yXCJcclxuXHQgKi9cclxuXHRzdGF0aWMgY2hlY2tGb3JOdW1iZXIodmFsdWUgOiBBc3NlcnRpb25UeXBlLCB2YWx1ZU93bmVyIDogc3RyaW5nKSB7XHJcblx0XHRpZih0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihgJHt2YWx1ZU93bmVyfSBhcmd1bWVudCBzaG91bGQgYmUgYSBudW1iZXIuICR7dHlwZW9mIHZhbHVlfSBpcyB0YWtlbmApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ2hlY2tzIGFuZCB0aHJvd3MgYW4gZXhjZXB0aW9uIGlmIHRoZSB2YWx1ZSBpcyAnbm90IGEgbnVtYmVyJyBudW1iZXIgKGlzTmFOKVxyXG5cdCAqIEBwYXJhbSB7QXNzZXJ0aW9uVHlwZX0gdmFsdWUgdmFsdWVUb0NoZWNrIHRvIGNoZWNrXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlT3duZXIgdmFsdWVUb0NoZWNrIG93bmVyIG5hbWUsIGZvciBleGFtcGxlLCBcIm9wZXJhdG9yXCJcclxuXHQgKi9cclxuXHRzdGF0aWMgY2hlY2tGb3JOYU4odmFsdWUgOiBBc3NlcnRpb25UeXBlLCB2YWx1ZU93bmVyIDogc3RyaW5nKSB7XHJcblx0XHRpZih0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIgJiYgaXNOYU4odmFsdWUpKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihgJHt2YWx1ZU93bmVyfSBhcmd1bWVudCBzaG91bGQgYmUgYSBudW1iZXIuIE5hTiBpcyB0YWtlbmApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn1cclxuIl19