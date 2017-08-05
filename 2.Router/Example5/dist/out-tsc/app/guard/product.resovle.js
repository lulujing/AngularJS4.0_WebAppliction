var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Router } from '@angular/router';
import { Product } from '../product/product.component';
import { Injectable } from '@angular/core';
export var ProductResolve = (function () {
    function ProductResolve(router) {
        this.router = router;
    }
    ProductResolve.prototype.resolve = function (route, state) {
        var productId = 1;
        if (productId === 1) {
            return new Product(1, 'iphone8');
        }
        else {
            this.router.navigate(['/Home']);
            return undefined;
        }
    };
    ProductResolve = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Router])
    ], ProductResolve);
    return ProductResolve;
}());
//# sourceMappingURL=C:/Users/jinglu/router/src/app/guard/product.resovle.js.map