var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
export var ProductComponent = (function () {
    function ProductComponent(routeInfo) {
        this.routeInfo = routeInfo;
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeInfo.params.subscribe(function (params) { return _this.productId = params['id']; });
        this.routeInfo.data.subscribe(function (data) {
            _this.productId = data.product.id;
            _this.productName = data.product.name;
        });
    };
    ProductComponent = __decorate([
        Component({
            selector: 'app-product',
            templateUrl: './product.component.html',
            styleUrls: ['./product.component.css']
        }), 
        __metadata('design:paramtypes', [ActivatedRoute])
    ], ProductComponent);
    return ProductComponent;
}());
export var Product = (function () {
    function Product(id, name) {
        this.id = id;
        this.name = name;
    }
    return Product;
}());
//# sourceMappingURL=C:/Users/jinglu/router/src/app/product/product.component.js.map