import {ActivatedRoute, ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {ProductComponent} from '../product/product.component';
import {Observable} from 'rxjs/Observable';

export class UnsavedGuard implements CanDeactivate<ProductComponent> {

  canDeactivate(component: ProductComponent) {
    return window.confirm('Are you sure you want to leave?');
  }
}








