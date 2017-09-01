import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { WebScoketComponent } from './web-scoket/web-scoket.component';
import {WebSocketService} from './shared/web-socket.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    WebScoketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [WebSocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
