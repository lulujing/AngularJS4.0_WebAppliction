import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-price-quote',
  templateUrl: './price-quote.component.html',
  styleUrls: ['./price-quote.component.css']
})
export class PriceQuoteComponent implements OnInit {
  stockCode= 'IBM';
  price: number;
  @Output('lastPrice' )
  lastPrice: EventEmitter<PriceQuote>= new EventEmitter();
  @Output( )
  buy: EventEmitter<PriceQuote>= new EventEmitter();
  constructor() {
    setInterval(( ) => { const priceQuote: PriceQuote = new PriceQuote(this.stockCode, 100 * Math.random());
     this.price = priceQuote.lastPrice;
     this.lastPrice.emit(priceQuote);
     }, 1000);
  }

  buyStock(event) {
    this.buy.emit(new PriceQuote(this.stockCode, this.price));

  }

  ngOnInit() {
  }
}
export class PriceQuote {
  constructor(public stockCode: string, public lastPrice: number) {

  }
}


