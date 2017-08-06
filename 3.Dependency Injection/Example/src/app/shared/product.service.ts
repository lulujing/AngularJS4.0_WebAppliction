import { Injectable } from '@angular/core';
import {LoggerService} from './logger.service';

@Injectable()
export class ProductService {

  constructor(public logger: LoggerService) { }

  getProduct( ): Product {
    this.logger.log('successed');
    return new Product(0 , 'iphone8', 5899, 'newbrand');
  }

}

export  class Product {
  constructor(public id: number, public title: string, public price: number, public des: string ) {
  }
}
