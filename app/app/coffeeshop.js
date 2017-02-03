var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var coffeeShop = (function () {
    function coffeeShop(pastries, coffee) {
        pastries.setup();
        coffeee.brew();
        registery.setup();
        clean();
        unlockDoors();
    }
    return coffeeShop;
}());
;
var fridayCoffeeshop = (function (_super) {
    __extends(fridayCoffeeshop, _super);
    function fridayCoffeeshop(pastries, coffee) {
        var _this;
        _this.donut = pastries;
        _this = _super.call(this, pastries, coffee) || this;
        return _this;
    }
    return fridayCoffeeshop;
}(coffeeShop));
console.log(fridayCoffeeshop);
