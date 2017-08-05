import { async, TestBed } from '@angular/core/testing';
import { SellerInfoComponent } from './seller-info.component';
describe('SellerInfoComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SellerInfoComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SellerInfoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=C:/Users/jinglu/router/src/app/seller-info/seller-info.component.spec.js.map