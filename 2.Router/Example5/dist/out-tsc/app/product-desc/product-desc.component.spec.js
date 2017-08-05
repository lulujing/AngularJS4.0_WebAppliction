import { async, TestBed } from '@angular/core/testing';
import { ProductDescComponent } from './product-desc.component';
describe('ProductDescComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ProductDescComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ProductDescComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=C:/Users/jinglu/router/src/app/product-desc/product-desc.component.spec.js.map