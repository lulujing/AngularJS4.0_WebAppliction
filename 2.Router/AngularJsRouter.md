
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
<h2>Created project called <i> rounter</i> and components</h2>
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
1.<i> Routers</i>
Wrote all router paths and components in Approuter.module files<br>
<code> 
const routes: Routes = [ { path : 'product', component: ProductComponent},
                         { path : '', component : HomeComponent },
                         {path : '**', component: Code404Component},];</code><br>
The ** path in the last route is a wildcard. The router will select this route if the requested URL doesn't match any paths for routes defined earlier in the configuration. This is useful for displaying a "404 - Not Found" page.<br>
2.<i>routeroutlet</i><br>
The loction of displaying component will be decided by the position of routeroutlet<br>
3.<i>routerLink<i><br>
Wrote navigation by routerLink <br>
In app.component.html file: <br>
<code>&lt;a [routerLink]="['/']"&gt;Home&lt;/a&gt;</code>
<code>&lt;a [routerLink]="['/product']">Product&lt;/a&gt;</code>
  </code><br>
4.<i>Router</i><br>
another way to make navigation by method of router <br>
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
  <a href="#">All code can be seen in example 1</a>

