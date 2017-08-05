export var UnsavedGuard = (function () {
    function UnsavedGuard() {
    }
    UnsavedGuard.prototype.canDeactivate = function (component) {
        return window.confirm('Are you sure you want to leave?');
    };
    return UnsavedGuard;
}());
//# sourceMappingURL=C:/Users/jinglu/router/src/app/guard/unsaved.guard.js.map