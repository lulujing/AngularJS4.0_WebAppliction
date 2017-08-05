import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {Code404Component} from './code404/code404.component';
import {SellerInfoComponent} from './seller-info/seller-info.component';
import {ProductDescComponent} from './product-desc/product-desc.component';

const routes: Routes = [

  { path : 'product/:id', component: ProductComponent, children: [
    {path: '' , component: ProductDescComponent},
    {path: 'seller/:id', component: SellerInfoComponent}
  ]},
  {path: '' , redirectTo: '/Home', pathMatch: 'full'},
  {path : 'Home', component : HomeComponent},
  {path : '**', component: Code404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
