
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
  <h2> Passing Parameters <a href="#">Example 2</a></h2> 
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
  
  
  
 
  
 
   
 
 
 
 
 



