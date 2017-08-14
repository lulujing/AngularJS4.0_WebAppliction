import { Component } from '@angular/core';
import {PriceQuote} from './price-quote/price-quote.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stock= '';
 // priceQuote: PriceQuote = new PriceQuote('', 0);
 // priceQuoteHander(event: PriceQuote) {
 //  this.priceQuote = event;
//  }
  priceQutoe: PriceQuote = new PriceQuote('', 0);
  buyHandle(event: PriceQuote) {
    this.priceQutoe = event;
  }

  // EventEmitter(event: PriceQuote) {
    // this.priceQutoe = event;
 //  }


}
