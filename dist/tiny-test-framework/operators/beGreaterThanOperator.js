'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var baseOperator_1 = require('./baseOperator');
var BeGreaterThanOperator = (function (_super) {
    __extends(BeGreaterThanOperator, _super);
    function BeGreaterThanOperator() {
        _super.apply(this, arguments);
    }
    /**
     * Check if valueToCheck is greater than operator argument (this._value)
     */
    BeGreaterThanOperator.prototype.test = function (valueToCheck) {
        baseOperator_1.BaseOperator.checkForNumber(this._value, "beGreaterThan");
        baseOperator_1.BaseOperator.checkForNumber(valueToCheck, "expect");
        baseOperator_1.BaseOperator.checkForNaN(this._value, "beGreaterThan");
        baseOperator_1.BaseOperator.checkForNaN(valueToCheck, "expect");
        return valueToCheck > this._value;
    };
    return BeGreaterThanOperator;
})(baseOperator_1.BaseOperator);
exports.BeGreaterThanOperator = BeGreaterThanOperator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVHcmVhdGVyVGhhbk9wZXJhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29wZXJhdG9ycy9iZUdyZWF0ZXJUaGFuT3BlcmF0b3IudHMiXSwibmFtZXMiOlsiQmVHcmVhdGVyVGhhbk9wZXJhdG9yIiwiQmVHcmVhdGVyVGhhbk9wZXJhdG9yLmNvbnN0cnVjdG9yIiwiQmVHcmVhdGVyVGhhbk9wZXJhdG9yLnRlc3QiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7O0FBR2IsNkJBQTZCLGdCQUU3QixDQUFDLENBRjRDO0FBRTdDO0lBQTJDQSx5Q0FBWUE7SUFBdkRBO1FBQTJDQyw4QkFBWUE7SUFhdkRBLENBQUNBO0lBWkFEOztPQUVHQTtJQUNIQSxvQ0FBSUEsR0FBSkEsVUFBS0EsWUFBNEJBO1FBQ2hDRSwyQkFBWUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsRUFBRUEsZUFBZUEsQ0FBQ0EsQ0FBQ0E7UUFDMURBLDJCQUFZQSxDQUFDQSxjQUFjQSxDQUFDQSxZQUFZQSxFQUFFQSxRQUFRQSxDQUFDQSxDQUFDQTtRQUVwREEsMkJBQVlBLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLEVBQUVBLGVBQWVBLENBQUNBLENBQUNBO1FBQ3ZEQSwyQkFBWUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsWUFBWUEsRUFBRUEsUUFBUUEsQ0FBQ0EsQ0FBQ0E7UUFFakRBLE1BQU1BLENBQUNBLFlBQVlBLEdBQUdBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBO0lBQ25DQSxDQUFDQTtJQUNGRiw0QkFBQ0E7QUFBREEsQ0FBQ0EsQUFiRCxFQUEyQywyQkFBWSxFQWF0RDtBQWJZLDZCQUFxQix3QkFhakMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCB7IEFzc2VydGlvblR5cGUgfSBmcm9tICcuLi9hc3NlcnRpb25TdHlsZXMvYXNzZXJ0aW9uVHlwZSdcclxuaW1wb3J0IHsgQmFzZU9wZXJhdG9yIH0gZnJvbSAnLi9iYXNlT3BlcmF0b3InXHJcblxyXG5leHBvcnQgY2xhc3MgQmVHcmVhdGVyVGhhbk9wZXJhdG9yIGV4dGVuZHMgQmFzZU9wZXJhdG9yIHtcclxuXHQvKipcclxuXHQgKiBDaGVjayBpZiB2YWx1ZVRvQ2hlY2sgaXMgZ3JlYXRlciB0aGFuIG9wZXJhdG9yIGFyZ3VtZW50ICh0aGlzLl92YWx1ZSlcclxuXHQgKi9cclxuXHR0ZXN0KHZhbHVlVG9DaGVjayA6IEFzc2VydGlvblR5cGUpIHtcclxuXHRcdEJhc2VPcGVyYXRvci5jaGVja0Zvck51bWJlcih0aGlzLl92YWx1ZSwgXCJiZUdyZWF0ZXJUaGFuXCIpO1xyXG5cdFx0QmFzZU9wZXJhdG9yLmNoZWNrRm9yTnVtYmVyKHZhbHVlVG9DaGVjaywgXCJleHBlY3RcIik7XHJcblxyXG5cdFx0QmFzZU9wZXJhdG9yLmNoZWNrRm9yTmFOKHRoaXMuX3ZhbHVlLCBcImJlR3JlYXRlclRoYW5cIik7XHJcblx0XHRCYXNlT3BlcmF0b3IuY2hlY2tGb3JOYU4odmFsdWVUb0NoZWNrLCBcImV4cGVjdFwiKTtcclxuXHJcblx0XHRyZXR1cm4gdmFsdWVUb0NoZWNrID4gdGhpcy5fdmFsdWU7XHJcblx0fVxyXG59XHJcbiJdfQ==