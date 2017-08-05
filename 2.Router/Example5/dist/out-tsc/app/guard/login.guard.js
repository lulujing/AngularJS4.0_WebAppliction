export var LoginGuard = (function () {
    function LoginGuard() {
    }
    LoginGuard.prototype.canActivate = function () {
        var loggedIn = Math.random() < 0.5;
        if (!loggedIn) {
            console.log('place log in first');
        }
        return loggedIn;
    };
    return LoginGuard;
}());
//# sourceMappingURL=C:/Users/jinglu/router/src/app/guard/login.guard.js.map