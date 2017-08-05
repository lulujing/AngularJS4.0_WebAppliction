import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {Code404Component} from './code404/code404.component';
import {SellerInfoComponent} from './seller-info/seller-info.component';
import {ProductDescComponent} from './product-desc/product-desc.component';
import {ChatComponent} from './chat/chat.component';
import {LoginGuard} from './guard/login.guard';
import {UnsavedGuard} from './guard/unsaved.guard';
import {ProductResolve} from './guard/product.resovle';

const routes: Routes = [
  { path : 'product/:id', component: ProductComponent, children: [
    {path: '' , component: ProductDescComponent},
    {path: 'seller/:id', component: SellerInfoComponent}] , resolve: {  product: ProductResolve},
    canActivate: [ LoginGuard ], canDeactivate: [UnsavedGuard]},
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
export class AppRoutingModule { }
