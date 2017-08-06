
<h1>Router</h1>
<h2> Intorduction </h2>
This step will study how to configure the rounter and create Navigation in AngularJS 2+. I will create
a small project to show how to configure rounter.
 To learn AngularJs router, you should know:
                       <ul>
                           <li>Routes</li>
                           <li>RouterOutlet</li>
                            <li>Router</li>
                            <li>RouterLink</li>
                             <li>ActivatedRouter</li>
                        </ul>
<h2>Created project called <i> rounter</i> and components  <a href="https://github.com/lulujing/AngularJS4.0_WebAppliction/tree/master/2.Router/Example1"> Example 1</a></h2>
 1. Created project
<code>ng new router --routing </code>
<i>--routing</i> means AngularJs will generate Approuter.module file for this project and import it in
app.module file like:<br>
<code>
imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ]
</code>
2.Created three components 
<code>ng g component Home</code>
<code>ng g component Product</code>
<code> ng g component Code404</code>

<h2>Crated navigation by configuring Router</h2>
<i>1. Routers</i><br>
Wrote all router paths and components in Approuter.module files<br>
<code> 
const routes: Routes = [ { path : 'product', component: ProductComponent},
                         { path : '', component : HomeComponent },
                         {path : '**', component: Code404Component},];</code><br>
The ** path in the last route is a wildcard. The router will select this route if the requested URL doesn't match any paths for routes defined earlier in the configuration. This is useful for displaying a "404 - Not Found" page.<br>
<i>2.routeroutlet</i><br>
The loction of displaying component will be decided by the position of routeroutlet<br>
<i>3.routerLink<i><br>
Wrote navigation by routerLink <br>
In app.component.html file: <br>
<code>&lt;a [routerLink]="['/']"&gt;Home&lt;/a&gt;</code>
<code>&lt;a [routerLink]="['/product']">Product&lt;/a&gt;</code>
  </code><br>
<i>4.Router</i><br>
Another way to make navigation by method of router <br>
In app.component.html file,add new button  <br>
<code><input type="button" value="productInfo" (click)="toProductDetail( )"></code>
In app.component file, defining the method"toProductDetail( )" like <br>
<code>export class AppComponent { <br>
  title = 'app works!';<br>
  constructor(private router: Router) {<br>
  }<br>

  toProductDetail( ) { <br>
    this.router.navigate(['/product']);<br>
  } </code><br>
  <h2> Passing Parameters <a href="https://github.com/lulujing/AngularJS4.0_WebAppliction/tree/master/2.Router/Example2">Example 2</a></h2> 
  There are three way to pass parameters incuding :
 <ul>
 <li> qurryparam <code> /product?id=1&name=2 => ActivedRoute.queryParams[id]
 </li>
 <li> Router path <code> {path:/product/:id} => /product/1  => ActivedRoute.queryParams[id]</code>
 </li> 
 <li> Router configuration <code> {path:/product, component:ProductComponent,data[{isProd:true}]} => ActivedRoute.data[0][isProd]</code>
 </li>

</ul>
 <i>1.routerLink</i>
 Wrote code in app.component.html
 <code><a [routerLink]="['/product']" [querryParams]="{id:1}">Product</a></code>
 recieved params<br>
 In App.Product<br>
 <code> export class HomeComponent implements OnInit {<br>

  private  productId: number;<br>
  constructor(private routeInfo: ActivatedRoute) { }<br>

  ngOnInit() { <br>
  this.productId = this.routeInfo.snapshot.queryParams['id'];}<br></code>
  
  For view:<br>
  <code><p>
  The information of product, Id is {{productId}}
</p> </code><br>
<i>Url path</i>
In app.router.module file<br>

<code>const routes: Routes = [<br>

  { path : 'product/:id', component: ProductComponent}]</code><br>
  
 In app.component.html<br>
 <code><a [routerLink]="['/product',1]" >Product</a> </code><br>
 In product.component.ts<br>
 <code>   ngOnInit() {
    this.productId = this.routeInfo.snapshot.params['id'];
  } </code><br>
  <i>3.snapshot and subscribe</i><br>
  In product component ts :<br>
  <code> toProductDetail( ) {
    this.router.navigate(['/product',2]);
  } </code><br>
 The  problem is when you want to rurn to other product page from one product page, the Id donot changes <br>
 Solve: In product.component.ts<br>
 <code> ngOnInit() {
    this.routeInfo.params.subscribe((params: Params) => this.productId = params['id']);
  } </code><br>
  
  <h2> Redirect Router</h2>
  <p> when user input one url, you can redirect to other url</p>
  <h4> Default Homepage</h4>
  In app.router.module file:<br>
  <code>
  const routes: Routes = [ <br>

  { path : 'product/:id', component: ProductComponent},<br>
  {path: ' ' , redirectTo: '/home', pathMatch: 'full'},<br>
  {path : 'Home', component : HomeComponent},<br>
  {path : '**', component: Code404Component},<br>
];<br>
  </code>
  
  
<h2>Children Router <a href="https://github.com/lulujing/AngularJS4.0_WebAppliction/tree/master/2.Router/Example3">Example 3</a></h2>

<p>Rule:</p>
<code>{path:'home',component:HomeComponent,
  children:[
    {

       path:'',component:XxxComponent}
   }
   {
       path:'/yyy' component:YyyComponent

}]}</code>

<p>Create two Component ProductDesc sellerInfo</p>
<code>ng g component prodectDesc </code>
<code>ng g component sellerInfo </code>
<p>change seller component:</P>
seller component ts:
<code>< export class SellerInfoComponent implements OnInit {</code>
  <code>private sellerId: number;</code> <code> constructor(private routeInfo: ActivatedRoute) { }</code>

 <code> ngOnInit() {</code>
 <code> this.sellerId = this.routeInfo.snapshot.params['id'] }</code>

<p>In seller.component.ts file:</p>
<code>&lt;p&lt;</code>
  <code>sellerId is {{sellerId}}</code>
<code>&lt;/p&lt;</code>
Change router Information
In app.router.module file:
<code>const routes: Routes = </code>
<code>  { path : 'product/:id', component: ProductComponent, children: [</code>
 <code>   {path: '' , component: ProductDescComponent},</code>
<code>    {path: 'seller/:id', component: SellerInfoComponent} ]},</code>
 <code> {path: '' , redirectTo: '/Home', pathMatch: 'full'},</code>
 <code> {path : 'Home', component : HomeComponent},</code>
<code>  {path : '**', component: Code404Component},];</code>
<p>In product.component.html</p>
<code>&lt;p&gt;The information of product, Id is {{productId}}&lt;/p&gt;</code>
<code>&lt;a [routerLink]="['./']"&gt;product describe&lt;/a&gt;;</code>
<code>&lt;a [routerLink]="['./seller',99]"&gt;sellerInfo&lt;/a&gt;</code>
<code>&lt;router-outlet&gt;&lt;/router-outlet&gt;</code>


<h2>Auxiliary Route <a href="https://github.com/lulujing/AngularJS4.0_WebAppliction/tree/master/2.Router/Example4">Example 4</a></h2>
<p>Rule:</p>

<code>&lt;router-outlet&gt;&lt;/router-outlet&gt;</code><br>
<code>&lt;router-outlet name="aux"&gt;&lt;/router-outlet&gt;</code><br>

<code>{path：‘xxx’,component:XxxComponent,outlet:"aux"}</code><br>
<code>{path：‘yyy’,component:YxxComponent,outlet:"aux"}</code><br>
 
<code>&lt;a[routerLink]="['/home',{outlets:{aux:'xxx'}}]"&gt;Xxx&lt;/a&gt;</code><br>
<code>&lt;a[routerLink]="['/product',{outlets:{aux:'yyy'}}]"&gt;Yyy&lt;/a&gt;</code><br>

<p>Create new routeroutlet in app.html</p>

<code>&lt;a [routerLink]="['/Home']">Home&lt;/a></code><br>
<code>&lt;a [routerLink]="['/product',1]" >Product&lt;/a></code><br>
<code>&lt;input type="button" value="productInfo" (click)="toProductDetail( )"></code><br>
<code>&lt;router-outlet>&lt;/router-outlet></code><br>
<code>&lt;router-outlet name="aux">&lt;/router-outlet></code><br>

<p>Create ne component Called chat:</p>
<code>ng g component chat</code>
<p>chat.componet.htm file</p>
<code>&lt;textarea placeholder="please input message" class="chat">&lt;/textarea></code>
<p>Css</p>
<code>.chat{ <br>
  background-color: green;<br>
  height:100px;<br>
  width: 30%;<br>

float:left;<br>
  box-sizing: border-box;<br>
}</code>

<p>product.component.html file:</p>
<code>&lt;div class="product"> <br>
&lt;p><br>
  The information of product, Id is {{productId}}
&lt;/p><br>
&lt;a [routerLink]="['./']">product describe&lt;/a><br>
&lt;a [routerLink]="['./seller',99]">sellerInfo&lt;/a><br>
&lt;router-outlet>&lt;/router-outlet><br>
&lt;/div></code>
<p>Css:/p>
<code>.product{<br>
  background-color: yellow;<br>
  height:100px;<br>
  width: 70%;<br>
  float:left;<br>
  box-sizing: border-box;<br>
}</code>

<p>Change Home component</p>
<code>&lt;div class="home">&lt;p>
 this is home component&lt;/p>&lt;/div></code>

<p>CSS:</p>
<code>.home{ <br>
  background-color: red; <br>
  height:100px; <br>
  width: 70%; <br>
  float:left;<br>
  box-sizing: border-box;<br>
  }</code>

Add information into Routers in app.router.module file
  { path: 'chat', component: ChatComponent, outlet : 'aux'}

<p>In app componentt, Added navigation:</p>
<code>
&lt;a [routerLink]="['/Home']">Home&lt;/a> <br>
&lt;a [routerLink]="['/product',1]" >Product&lt;/a> <br>
&lt;a [routerLink]="[{outlets :{aux:'chat'}}]">start chat&lt;/a> <br>
&lt;a [routerLink]="[{outlets:{aux:null}}]">close chat&lt;/a> <br>
&lt;input type="button" value="productInfo" (click)="toProductDetail( )"> <br>
&lt;router-outlet>&lt;/router-outlet> <br>
&lt;router-outlet name="aux">&lt;/router-outlet> <br>
</code>
<h2>Router Guard <a href="https://github.com/lulujing/AngularJS4.0_WebAppliction/tree/master/2.Router/Example5">Example 5</h2>
<ul>
<li>CanActivate</li>
<li>CanDeactivate</li>
<li>Resolve</li>
</ul>
<h4>1.Sign in</h4>
<p>Created the fold called <i>guard</i> and file called <i>login.guard.ts </i></p>
<code>import {CanActivate} from '@angular/router';<br>
import {isUndefined} from 'util';<br>

export class  LoginGuard implements CanActivate {<br>
  canActivate() {<br>
    const loggedIn: boolean = Math.random() < 0.5;<br>
    if (!loggedIn) {<br>
      console.log('log in successed');<br>
    }<br>
    return loggedIn;<br>
    }}</code>
    <p>Add router Guard to the router path</p>
    <p>In app.router.module file:</p>
    <p><code>const routes: Routes = [
  { path : 'product/:id', component: ProductComponent, children: [
    {path: '' , component: ProductDescComponent},
    {path: 'seller/:id', component: SellerInfoComponent}], canActivate: [LoginGuard]},
  { path: 'chat', component: ChatComponent, outlet : 'aux'},
  {path: '' , redirectTo: '/Home', pathMatch: 'full'},
  {path : 'Home', component : HomeComponent},
  {path : '**', component: Code404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard]
  })</code></p>
<h4>2. Information check</h4>
<p>Create class Product in product.component.ts</p>
<code>export  class  Product {

  constructor(public  id: number , public  name: string) {
  }
  }</code>

<p>Create New file called <i>product.resovle</i></p>
<code>
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Product} from '../product/product.component';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

@Injectable( )
export class ProductResolve implements Resolve<Product> {
  constructor(private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product | Observable<Product> | Promise<Product> {
    const productId: number = route.params['id'];
    if (productId === 1) {
      return new Product(1, 'iphone8');
    } else {
      this.router.navigate(['/Home']);
      return undefined;
    }
  }

}</code>

<p>Configure Router</p>
<p>In app.route.module file:</p>
```csharp
const routes: Routes = [
  { path : 'product/:id', component: ProductComponent, children: [
    {path: '' , component: ProductDescComponent},
    {path: 'seller/:id', component: SellerInfoComponent}], canActivate: [LoginGuard], canDeactivate : [UnsavedGuard],
    resolve: { Product : ProductResolve }},
  { path: 'chat', component: ChatComponent, outlet : 'aux'},
  {path: '' , redirectTo: '/Home', pathMatch: 'full'},
  {path : 'Home', component : HomeComponent},
  {path : '**', component: Code404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard, UnsavedGuard , ProductResolve ]
})
```

<p>change product.component.ts file:</p>
```csharp
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private  productId: number;
  private productName: string;
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    this.routeInfo.params.subscribe((params: Params) => this.productId = params['id']);
    this.routeInfo.data.subscribe( (data: { product: Product}) => {
      this.productId = data.product.id;
      this.productName = data.product.name;
    });
  }

}

export  class  Product {

  constructor(public  id: number , public  name: string) {
  }
}

```
<h4>2.confirm</h4>
Crated other file call unsaved.guard.ts in guard fold

import {ActivatedRoute, ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {ProductComponent} from '../product/product.component';
import {Observable} from 'rxjs/Observable';

export class UnsavedGuard implements CanDeactivate<ProductComponent> {

  canDeactivate(component: ProductComponent) {
    return window.confirm('Are you sure you want to leave?');
  }
}

Configuring Router
In app.router.module file:


const routes: Routes = [
  { path : 'product/:id', component: ProductComponent, children: [
    {path: '' , component: ProductDescComponent},
    {path: 'seller/:id', component: SellerInfoComponent}], canActivate: [LoginGuard], canDeactivate : [UnsavedGuard]},
  { path: 'chat', component: ChatComponent, outlet : 'aux'},
  {path: '' , redirectTo: '/Home', pathMatch: 'full'},
  {path : 'Home', component : HomeComponent},
  {path : '**', component: Code404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard, UnsavedGuard ]
})



  
 
  
 
   
 
 
 
 
 



