'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var baseOperator_1 = require('./baseOperator');
var EqOperator = (function (_super) {
    __extends(EqOperator, _super);
    function EqOperator() {
        _super.apply(this, arguments);
    }
    /**
     * Check if test valueToCheck (valueToCheck) is equal to operator argument (this._value)
     */
    EqOperator.prototype.test = function (valueToCheck) {
        return valueToCheck === this._value;
    };
    return EqOperator;
})(baseOperator_1.BaseOperator);
exports.EqOperator = EqOperator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXFPcGVyYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRvcnMvZXFPcGVyYXRvci50cyJdLCJuYW1lcyI6WyJFcU9wZXJhdG9yIiwiRXFPcGVyYXRvci5jb25zdHJ1Y3RvciIsIkVxT3BlcmF0b3IudGVzdCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7QUFFYiw2QkFBNkIsZ0JBQzdCLENBQUMsQ0FENEM7QUFHN0M7SUFBZ0NBLDhCQUFZQTtJQUE1Q0E7UUFBZ0NDLDhCQUFZQTtJQU81Q0EsQ0FBQ0E7SUFOQUQ7O09BRUdBO0lBQ0hBLHlCQUFJQSxHQUFKQSxVQUFLQSxZQUE0QkE7UUFDaENFLE1BQU1BLENBQUNBLFlBQVlBLEtBQUtBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBO0lBQ3JDQSxDQUFDQTtJQUNGRixpQkFBQ0E7QUFBREEsQ0FBQ0EsQUFQRCxFQUFnQywyQkFBWSxFQU8zQztBQVBZLGtCQUFVLGFBT3RCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgeyBCYXNlT3BlcmF0b3IgfSBmcm9tICcuL2Jhc2VPcGVyYXRvcidcclxuaW1wb3J0IHsgQXNzZXJ0aW9uVHlwZSB9IGZyb20gJy4uL2Fzc2VydGlvblN0eWxlcy9hc3NlcnRpb25UeXBlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIEVxT3BlcmF0b3IgZXh0ZW5kcyBCYXNlT3BlcmF0b3Ige1xyXG5cdC8qKlxyXG5cdCAqIENoZWNrIGlmIHRlc3QgdmFsdWVUb0NoZWNrICh2YWx1ZVRvQ2hlY2spIGlzIGVxdWFsIHRvIG9wZXJhdG9yIGFyZ3VtZW50ICh0aGlzLl92YWx1ZSlcclxuXHQgKi9cclxuXHR0ZXN0KHZhbHVlVG9DaGVjayA6IEFzc2VydGlvblR5cGUpIHtcclxuXHRcdHJldHVybiB2YWx1ZVRvQ2hlY2sgPT09IHRoaXMuX3ZhbHVlO1xyXG5cdH1cclxufVxyXG4iXX0=