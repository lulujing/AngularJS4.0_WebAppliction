import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Product} from '../product/product.component';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

@Injectable( )
export class ProductResolve implements Resolve<Product> {
  constructor(private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product | Observable<Product> | Promise<Product> {
    const productId = 1;
    if (productId === 1) {
      return new Product(1, 'iphone8');
    } else {
      this.router.navigate(['/Home']);
      return undefined;
    }
  }

}
