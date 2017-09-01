import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products1: Observable<any>;
  dataSource: Observable<any>;
  products: Array<any>= [];
  constructor(private http: Http) {
    const myHeaders: Headers = new Headers();
    myHeaders.append('Authorization', 'Basic 123456');
    this.dataSource = this.http.get('/api/products'/*, {headers: myHeaders}*/)
      .map((res) => res.json());
    this.products1 = this.http.get('/api/products').map((res) => res.json());
  }

  ngOnInit() {
    this.dataSource.subscribe((data) => this.products = data);
    alert(this.products.toString());
  }

}
