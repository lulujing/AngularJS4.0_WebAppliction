import { Injectable } from '@angular/core';
import {Product, ProductService} from './product.service';
import {LoggerService} from './logger.service';

@Injectable()
export class AnotherProductService implements ProductService {
   getProduct( ): Product {
     this.logger.log('this is anotherproductservice');
     return new Product(1, 'HTC', 59999, 'Second Hand');
   }
  constructor(public logger: LoggerService) { }

}
