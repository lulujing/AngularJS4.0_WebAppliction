
# Dependency Injection
## Concept of Dependency Injection
### 1. what is dependency injection ?
Dependency Injection (DI) is a software design pattern that deals with how components get hold of their dependencies.
The AngularJS injector subsystem is in charge of creating components, resolving their dependencies, and providing them to other components as requested.
### 2. The benefits of Dependency Injection
#### a.loose coupling
<p>if you donot use dependency Injection</p>

``` 
var producctService=new ProductService（）；
var productservice=new AnotherProductServer(); strong couple
```
But when you use dependency injection

```
@NgModule({
providers:[ProductService]=>[{provide:ProductService,useClass:ProductService}]})
export class AppModule{ }
@Component({})
export class ProductComponent{
  product: Product;
constructor(productService: ProductService){
this.product=productService.getProduct();}
}

```
#### b. easy to test method
#### c. reducing over write
### How to use it in AngularJS?

```
constroutor(private productService:ProductService){...}
provider providers:[ProductService];=>
[{provide:ProductService,useClass:ProductService}]

```
## Example of Dependency Injection

* Create new project called denpendency injection

```
ng new DenpendencyInjection
```
* Create one component called product1

```
ng g component product1
```
* Create a service called product and put it in service fold

```
ng  g service shared/product
```
* In product service.ts file

```
import { Injectable } from '@angular/core';
@Injectable()
export class ProductService {
  constructor() { }
  getProduct( ): Product {
    return new Product(0 , 'iphone8', 5899, 'newbrand'); }}
export  class Product {
  constructor(public id: number, public title: string, public price: number, public des: string ) {
  }}
```
* add provider in app.module.ts :

```
  providers: [ProductService],
 ```

* In product1.component.ts file:

```
export class Product1Component implements OnInit {
  product: Product;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }}
  ```

*In product1.component.html

``` html
<div>
  <p>product Information</p>\
  <h2>Name : {{product.title}}</h2>
  <h2>Price: {{product.price}}</h2>
  <h2>Id : {{product.Id}}</h2>
  <h2>decs: {{product.des}}</h2>
</div> 
```

* In app.component.html:

```html
<div>
  <div>
    <h1>Denpendency Injection</h1>
  </div>
  <div>
    <app-product1></app-product1>
  </div>
</div>
```

* domain of denpendency injection

1.App.module  usually use
 2.component

* create another component called product2 and service called antherProduct

* In anotherProduct.Service file:

```typescript
import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from '../shared/product.service';
import {AnotherProductService} from '../shared/another-product.service';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css'],
  providers: [{ provide: ProductService, useClass: AnotherProductService }]
})
export class Product2Component implements OnInit {
  product: Product;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }

}
```
* In anotherProduct.Service file:

```html
<div>
  
  <p>product Information</p>\
  <h2>Name : {{product.title}}</h2>
  <h2>Price: {{product.price}}</h2>
  <h2>decs: {{product.des}}</h2>
</div>
```

* In app.component.html file:

```html
<div>
  <div>
    <h1>Denpendency Injection</h1>
  </div>
  <div>
    <app-product1></app-product1>
    <app-product2></app-product2>
  </div>
</div>
```

when provide declare in app, each component can see it.
provide declare just can see in this component and child
* all declare in app module
"@injectable() " this service also can inject other service 


* Inject between each service
* In logger service file :

```
import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { }
  log(message: string) {
    console.log(message);
  }

}
```
* In product service inject loggerService:

```
export class ProductService {

  constructor(private logger: LoggerService) { }

  getProduct( ): Product {
    this.logger.log('successed');
    return new Product(0 , 'iphone8', 5899, 'newbrand');
  }
}
```
* In app.module.ts:

```
providers: [ProductService , LoggerService],
```



* factory() for injection

* Changed app.module.ts :

```
providers: [{ provide: ProductService, useFactory: ( ) => {
    const  logger = new LoggerService ( );
    const dev = Math.random ( ) > 0.5 ;
    if(dev) {
      return new ProductService( logger );
    } else {
      return new AnotherProductService( logger );
    }
```    
*Changed anotherproductservice :

```
export class AnotherProductService implements ProductService {
   getProduct( ): Product {
     this.logger.log('this is anotherproductservice');
     return new Product(1, 'HTC', 59999, 'Second Hand');
   }
  constructor(public logger: LoggerService) { }
}
```

* If inject at once, will not change

use loggersevice to useFactory
* Change the app.Module.ts:

```
  providers: [{ provide: ProductService, useFactory: ( logger: LoggerService ) => {
    const dev = Math.random ( ) > 0.5 ;
    if (dev) {
      return new ProductService( logger );
    } else {
      return new AnotherProductService( logger );
    };


  }, deps: [ LoggerService] }, LoggerService],
  bootstrap: [AppComponent]
})
```

Instance by params 

* Change app.Module.ts:

```
 providers: [{ provide: ProductService, useFactory: ( logger: LoggerService , isDev ) => {
    if (isDev) {
      return new ProductService( logger );
    } else {
      return new AnotherProductService( logger );
    };


  }, deps: [ LoggerService, 'IS_DEV_ENV'] }, LoggerService, { provide : 'IS_DEV_ENV', useValue: false}],
  bootstrap: [AppComponent]
})
```
Injection of class
* change app.module.ts:

```
  providers: [{ provide: ProductService, useFactory: ( logger: LoggerService , appConfig ) => {
    if (appConfig.isDev ) {
      return new ProductService( logger );
    } else {
      return new AnotherProductService( logger );
    };


  }, deps: [ LoggerService, 'APP_CONFIG'] }, LoggerService, { provide : 'APP_CONFIG', useValue: { isDev: false}}],
  bootstrap: [AppComponent]
})
```

injection and relation

all privder inculde all module's provider. 
* maually Injection

```
export class Product2Component implements OnInit {
  product: Product;
  private  productService: ProductService;
  constructor(private injector: Injector ) { this.productService = injector.get( ProductService );
  }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }
  ```
















